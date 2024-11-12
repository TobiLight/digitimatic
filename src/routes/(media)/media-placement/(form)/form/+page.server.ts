import { EmailService } from '$lib/mail/mail.server';
import { mediaPlacementSchema } from '$lib/validation/schema';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export async function load(event) {
	const form = await superValidate(event, zod(mediaPlacementSchema));

	return { form };
}

/** @satisfies {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(mediaPlacementSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		try {
			const mail = new EmailService();

			await mail.sendEmail({
				to: 'info@digitimatic.com',
				subject: form.data.placementNeed,
				html: `
					<h2>You have a new message'</h2>
					<p>Full name: ${form.data.fullName}</p>
					<p>Email: ${form.data.email}</p>
					<p>Placement Need: ${form.data.placementNeed}</p>
					<p>Budget: ${form.data.budget}</p>
					<p>Message: ${form.data.description}</p>
				`
			});

			return { form, success: true, message: 'Message sent!' };
		} catch (err: any) {
			return { err, form, success: false, message: 'An error has occured' };
		}
	}
};
