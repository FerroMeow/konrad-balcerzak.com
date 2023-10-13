import * as nodemailer from 'nodemailer';
import type { Actions } from './$types';
import { env } from '$env/dynamic/private';

export const actions = {
    default: async (event) => {
        const formData = await event.request.formData();
        const firstName = formData.get('firstName')?.toString();
        const lastName = formData.get('lastName')?.toString();
        const email = formData.get('email')?.toString();
        const message = formData.get('message')?.toString();
        nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: 'konrad.balcerzak.work@gmail.com',
                pass: env.EMAIL_PASS
            },
        })
            ?.sendMail({
                from: 'konrad.balcerzak.work@gmail.com',
                to: 'konrad.balcerzak.work@gmail.com',
                subject: `Website Contact Form from ${firstName} ${lastName} (${email})`,
                text: message,
            });
    },
} satisfies Actions;