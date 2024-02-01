import {
	EMAIL_JS_PUBLIC_KEY,
	EMAIL_JS_SERVICE_ID,
	EMAIL_JS_TEMPLATE_ID
} from '$env/static/private';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const prerender = false;
export const ssr = true;


export const actions = {
	sendMail: async ({ fetch, request }) => {
		const form = await request.formData()
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		function isValidEmail(email: string) {
			return emailRegex.test(email);
		}
		const email = form.get('email') as string
		const name = form.get('fullname') as string
		const businessName = form.get('business-name') as string
		const budget = form.get('budget') as string
		const description = form.get('description') as string

		if (!name.length)
			return fail(400, {
				success: false,
				message: 'An error has occured!',
				name: 'Name cannot be blank!'
			})

		if (!isValidEmail(email))
			return fail(400, {
				success: false,
				message: 'An error has occured!',
				email: 'Email address is not valid!'
			})


		if (!businessName.length)
			return fail(400, {
				success: false,
				message: 'An error has occured!',
				name: 'Business name cannot be blank!'
			})

		if (!budget.length)
			return fail(400, {
				success: false,
				message: 'An error has occured!',
				name: 'Budget cannot be blank!'
			})

		if (!description.length)
			return fail(400, {
				success: false,
				message: 'An error has occured!',
				name: 'Description cannot be blank!'
			})


		const templateParams = {
			from_name: name,
			to_name: 'Digitimatic',
			message: `\tBusiness name: ${businessName}\n\tBudget: ${budget}\n\tDescription: ${description}`,
			notes: 'Someone contacted you!',
			reply_to: email,
			from_email: email
		};

		let data = {
			service_id: EMAIL_JS_SERVICE_ID,
			template_id: EMAIL_JS_TEMPLATE_ID,
			user_id: EMAIL_JS_PUBLIC_KEY,
			template_params: { ...templateParams }
		}

		try {
			const email = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			if (email.status === 200)
				return {
					success: true,
					message: 'Sent Successfully!'
				}
			else
				return fail(400, {
					success: false,
					message: 'An error has occured while sending your message. Please try again!',
				})
		} catch (err: any) {
			return fail(400, {
				success: false,
				message: err.message
			})
		}
	}
} satisfies Actions