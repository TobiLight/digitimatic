import { EMAIL_HOST, EMAIL_USER, EMAIL_PWD } from '$app/env/private';
import nodemailer, { type Transporter } from 'nodemailer';

export interface EmailOptions {
	to: string;
	subject: string;
	text?: string;
	html?: string;
}

export class EmailService {
	private transporter: Transporter;

	constructor() {
		this.transporter = nodemailer.createTransport({
			host: EMAIL_HOST,
			port: 465,
			secure: true,
			auth: {
				user: EMAIL_USER,
				pass: EMAIL_PWD
			}
		});
	}

	async sendEmail(options: EmailOptions): Promise<void> {
		const mailOptions = {
			from: 'oluwatobilobagunloye@gmail.com',
			...options
		};

		try {
			return await this.transporter.sendMail(mailOptions);

		} catch (error: unknown) {
			console.error('Error sending email:', error);
			throw error;
		}
	}
}
