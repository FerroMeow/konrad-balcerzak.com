import { env } from '$env/dynamic/private';

export const emailConfig = {
	smtp: env.EMAIL_SMTP,
	port: Number(env.EMAIL_PORT),
	user: env.EMAIL_USER,
	pass: env.EMAIL_PASS
};

export default emailConfig;
