import { json, type RequestHandler } from "@sveltejs/kit";
import {
	EMAIL_JS_PUBLIC_KEY,
	EMAIL_JS_SERVICE_ID,
	EMAIL_JS_TEMPLATE_ID
} from '$env/static/private';

export const prerender = false;

export const POST: RequestHandler = async ({ fetch, request }) => {
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

	if (name === null || !name.length)
		return new Response(JSON.stringify({
			success: false,
			message: 'An error has occured!',
			name: 'Name cannot be blank!'
		}), {
			headers: {
				'Content-Type': 'application/json'
			},
			status: 400
		})

	if (email === null || !isValidEmail(email))
		return new Response(JSON.stringify({
			success: false,
			message: 'An error has occured!',
			email: 'Email address is not valid!'
		}), {
			status: 400,
			headers: {
				'Content-Type': 'application/json'
			},
		})


	if (businessName === null || !businessName.length)
		return new Response(JSON.stringify({
			success: false,
			message: 'An error has occured!',
			name: 'Business name cannot be blank!'
		}), {
			status: 400,
			headers: {
				'Content-Type': 'application/json'
			},
		})

	if (budget === null || !budget.length)
		return new Response(JSON.stringify({
			success: false,
			message: 'An error has occured!',
			name: 'Budget cannot be blank!'
		}), {
			status: 400,
			headers: {
				'Content-Type': 'application/json'
			},
		})

	if (description === null || !description.length)
		return new Response(JSON.stringify({
			success: false,
			message: 'An error has occured!',
			name: 'Description cannot be blank!'
		}), {
			status: 400,
			headers: {
				'Content-Type': 'application/json'
			}
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
			return new Response(JSON.stringify({ success: true, message: "Sent successfully!" }), {
				headers: {
					'Content-Type': 'application/json'
				},
				status: 200
			})
		else {
			const err = await email.json()
			console.log("Error occured: ", err)
			return new Response(JSON.stringify({
				success: false,
				message: 'An error has occured while sending your message. Please try again!',
			}), {
				headers: {
					'Content-Type': 'application/json'
				},
				status: 400
			})
		}
	} catch (err: any) {
		console.log("An error has occured", err)
		return new Response(JSON.stringify({
			success: false,
			message: err.message
		}), {
			headers: {
				'Content-Type': 'application/json'
			},
			status: 400
		})
	}



	return json({}, { status: 200 })
};