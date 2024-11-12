import { EMAIL_HOST, EMAIL_USER, EMAIL_PWD } from '$env/static/private';
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
			from: 'admin@digitimatic.com',
			...options
		};

		try {
			await this.transporter.sendMail(mailOptions);

			console.log('Email sent successfully');
		} catch (error: any) {
			console.error('Error sending email:', error);
			throw error;
		}
	}
}
