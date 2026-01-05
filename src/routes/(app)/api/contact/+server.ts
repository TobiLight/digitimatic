import { type RequestHandler } from '@sveltejs/kit';
// import {
// 	EMAIL_HOST,
// 	EMAIL_PWD,
// 	EMAIL_USER,
// 	TO_EMAIL,
// 	RECAPTCHA_SECRET_KEY
// } from '$env/dynamic/private';
import * as nodemailer from 'nodemailer';
import { RateLimiter } from 'sveltekit-rate-limiter/server';
import { contactFormSchema, analyzeSpamContent } from '$lib/validation/contact-schema';
import { env } from '$env/dynamic/private';

const { EMAIL_HOST, EMAIL_PWD, EMAIL_USER, TO_EMAIL, RECAPTCHA_SECRET_KEY } = env;

const limiter = new RateLimiter({ IP: [2, 'm'] });

export const prerender = false;

export const POST: RequestHandler = async (event) => {
	const rated = await limiter.check(event);
	if (rated.limited) {
		return new Response(
			JSON.stringify({
				message: `You're sending too many requests. Please wait a while and try again.`
			}),
			{ status: 429 }
		);
	}

	const formData = await event.request.formData();
	const data = Object.fromEntries(formData);

	// Validate against schema
	const validation = contactFormSchema.safeParse(data);
	if (!validation.success) {
		return new Response(
			JSON.stringify({
				success: false,
				message: 'Validation failed',
				errors: validation.error.flatten()
			}),
			{ status: 400 }
		);
	}

	// Analyze for spam
	const spamAnalysis = analyzeSpamContent(validation.data);
	if (spamAnalysis.isSpam) {
		console.log('Spam detected:', spamAnalysis.reasons);
		return new Response(
			JSON.stringify({
				success: false,
				message: 'Spam detected - please try again',
				reasons: spamAnalysis.reasons
			}),
			{ status: 400 }
		);
	}

	// Extract validated data
	const { email, fullname, 'business-name': businessName, budget, description } = validation.data;
	// Verify reCAPTCHA
	const recaptchaToken = validation.data['g-recaptcha-response'];
	const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: `secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`
	});

	const recaptchaData = await response.json();
	if (!recaptchaData.success || recaptchaData.score < 0.5) {
		return new Response(
			JSON.stringify({
				success: false,
				message: 'reCAPTCHA verification failed.'
			}),
			{
				status: 400,
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
	}

	try {
		const transporter = nodemailer.createTransport({
			host: EMAIL_HOST,
			port: 465,
			secure: true,
			auth: {
				user: EMAIL_USER,
				pass: EMAIL_PWD
			}
		});

		const htmlTemplate = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>New Inquiry</title>
    <style>
      /* Basic resets for email clients */
      body { margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
      table { border-spacing: 0; }
      img { border: 0; display: block; line-height: 100%; outline: none; text-decoration: none; }
      a { color: inherit; text-decoration: none; }
      /* Container */
      .email-container { width: 100%; background-color: #f4f6f8; padding: 24px 0; }
      .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; }
      .header { background: #0f62fe; color: #ffffff; padding: 20px 24px; font-family: Arial, sans-serif; }
      .header h1 { margin: 0; font-size: 18px; font-weight: 600; }
      .body { padding: 20px 24px; font-family: Arial, sans-serif; color: #0b1220; line-height: 1.5; }
      .field { margin-bottom: 14px; }
      .label { display:block; font-size: 12px; color: #6b7280; margin-bottom: 6px; }
      .value { font-size: 15px; color: #111827; background:#f8fafc; padding: 12px; border-radius:6px; }
      .description { white-space: pre-wrap; } /* preserve line breaks */
      .footer { padding: 16px 24px; font-size:12px; color:#94a3b8; text-align:center; background:#fbfdff; }
      .cta { display:inline-block; margin-top: 8px; padding:10px 14px; background:#0f62fe; color:#fff; border-radius:6px; font-size:14px; }
      @media (max-width:480px) {
        .body { padding: 16px; }
        .header, .footer { padding-left:16px; padding-right:16px; }
      }
    </style>
  </head>
  <body>
    <center class="email-container">
      <table class="card" width="100%" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
          <td class="header" align="left">
            <h1>New Client Inquiry</h1>
          </td>
        </tr>

        <tr>
          <td class="body" align="left">
            <p style="margin:0 0 12px 0;">You have received a new message via your website contact form. Details are below.</p>

            <div class="field">
              <span class="label">Client name</span>
              <div class="value" id="client-name">${fullname}</div>
            </div>

            <div class="field">
              <span class="label">Business name</span>
              <div class="value" id="business-name">${businessName}</div>
            </div>

            <div class="field">
              <span class="label">Budget</span>
              <div class="value" id="budget">${budget}</div>
            </div>

            <div class="field">
              <span class="label">Description</span>
              <div class="value description" id="description">${description}</div>
            </div>

            <!-- Optional CTA -->
            
          </td>
        </tr>

        <tr>
          
        </tr>
      </table>
    </center>
  </body>
</html>
`;

		const plainText = `New Client Inquiry

Client name: ${fullname}
Business name: ${businessName}
Budget: ${budget}

Description:
${description}
`;

		const sendemail = await transporter.sendMail({
			from: `"digitimatic.com" <${EMAIL_USER}>`,
			to: TO_EMAIL, // where you want to receive the emails
			replyTo: email,
			subject: `New inquiry from ${name}`,
			text: plainText,
			html: htmlTemplate
		});

		if (sendemail.response.toLowerCase().includes('250 message'))
			return new Response(JSON.stringify({ success: true, message: 'Sent successfully!' }), {
				headers: {
					'Content-Type': 'application/json'
				},
				status: 200
			});
		else {
			// const err = await email.json()
			// console.log("Error occured: ", err)
			throw Error(
				JSON.stringify({
					success: false,
					message: 'An error has occured while sending your message. Please try again!'
				})
			);
		}
	} catch (err: any) {
		console.log('An error has occured', err);
		return new Response(
			JSON.stringify({
				success: false,
				message: (err as Error).message
			}),
			{
				headers: {
					'Content-Type': 'application/json'
				},
				status: 400
			}
		);
	}
};
