import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	EMAIL_HOST: {},
	EMAIL_USER: {},
	EMAIL_PWD: {},
	TO_EMAIL: {},
	WORDPRESS_URL: {},
	WORDPRESS_PER_PAGE: {},
	RECAPTCHA_SECRET_KEY: {},
	PUBLIC_RECAPTCHA_SITE_KEY: { public: true }
});
