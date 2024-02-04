import * as nodemailer from 'nodemailer';
import type { Actions } from './$types';
import emailConfig from '$lib/config/emailConfig';
import type { PageLoad } from '../$types';
import { message, superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';
import validator from 'validator';
import { PRIVATE_HCAPTCHA_SECRET_KEY, PRIVATE_HCAPTCHA_VERIFY_URL } from '$env/static/private';
import { PUBLIC_HCAPTCHA_SITE_KEY } from '$env/static/public';

const contactForm = z.object({
	firstName: z.coerce.string().trim().min(1),
	lastName: z.coerce.string().trim(),
	email: z
		.string()
		.min(1, 'You must provide an email address')
		.email('This is not a valid email')
		.transform((mail, ctx) => {
			const normalized = validator.normalizeEmail(mail);
			if (normalized === false) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: 'Email address could not be processed'
				});
				return z.NEVER;
			}
			return normalized;
		}),
	message: z.coerce
		.string()
		.trim()
		.min(1, 'You must provide a message')
		.transform((message) => validator.escape(message)),
	'h-captcha-response': z.string({
		required_error: 'You must provide captcha answer',
		invalid_type_error: 'The captcha you provided is not valid'
	})
});

export const load: PageLoad = () => {
	return {
		form: superValidate(contactForm)
	};
};

export const actions = {
	default: async ({ request, fetch, getClientAddress }) => {
		const form = await superValidate(request, contactForm);
		try {
			if (!form.valid) {
				return message(
					form,
					{
						success: false,
						text: 'Error processing mail'
					},
					{
						status: 400
					}
				);
			}
			const captcha = form.data['h-captcha-response'];
			console.log(PRIVATE_HCAPTCHA_SECRET_KEY, captcha, PUBLIC_HCAPTCHA_SITE_KEY);
			const captchaVerifyResp = await fetch(PRIVATE_HCAPTCHA_VERIFY_URL, {
				method: 'POST',
				body: new URLSearchParams({
					secret: PRIVATE_HCAPTCHA_SECRET_KEY,
					response: captcha,
					remoteip: getClientAddress(),
					sitekey: PUBLIC_HCAPTCHA_SITE_KEY
				})
			});
			const captchaVerify = await captchaVerifyResp.json();
			console.log(captchaVerify);
			if (captchaVerify.success === false) {
				return message(form, {
					success: false,
					text: 'Error verifying captcha. Try again later.'
				});
			}
			const transportConfig = {
				host: emailConfig.smtp,
				port: emailConfig.port,
				secure: true,
				auth: {
					user: emailConfig.user,
					pass: emailConfig.pass
				}
			};
			const mailer = nodemailer.createTransport(transportConfig);
			const mail = {
				from: form.data.email,
				to: emailConfig.user,
				subject: `Website Contact Form from ${form.data.firstName} ${form.data.lastName} (${form.data.email})`,
				text: `First name: ${form.data.firstName}\nLast name: ${form.data.lastName}\nEmail address: ${form.data.email}\nMessage:\n\n${form.data.message}`
			};
			const mailStatus = await mailer.sendMail(mail);
			if (mailStatus.accepted.length !== 1) {
				return message(
					form,
					{
						success: false,
						text: 'Error sending mail'
					},
					{
						status: 500
					}
				);
			}
			return message(form, {
				success: true,
				text: 'Email sent!'
			});
		} catch (e: unknown) {
			return message(
				form,
				{
					success: false,
					text: 'Error sending mail'
				},
				{
					status: 500
				}
			);
		}
	}
} satisfies Actions;
