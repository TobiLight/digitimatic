declare module 'svelte-recaptcha-v2' {
	import type { SvelteComponentTyped } from 'svelte';

	export interface RecaptchaEventDetail {
		token: string;
		response: string;
		[key: string]: unknown;
	}

	export type RecaptchaEvent = CustomEvent<RecaptchaEventDetail>;

	type RecaptchaProps = {
		recaptcha?: unknown;
		sitekey?: string;
		badge?: 'bottomleft' | 'bottomright' | 'inline' | 'top' | 'topleft' | 'topright';
		size?: 'compact' | 'invisible' | 'normal';
		sleepTime?: number;
	};

	type RecaptchaEvents = {
		load: RecaptchaEvent;
		ready: RecaptchaEvent;
		expire: RecaptchaEvent;
		error: RecaptchaEvent;
		open: RecaptchaEvent;
		close: RecaptchaEvent;
		success: RecaptchaEvent;
		token: RecaptchaEvent;
		expired: RecaptchaEvent;
	};

	export class Recaptcha extends SvelteComponentTyped<RecaptchaProps, RecaptchaEvents> {}

	export const recaptcha: {
		execute(): void;
		reset(): void;
		getResponse(): Promise<string | null>;
		getResponsePromise(): Promise<string | null>;
	};

	export const observer: Promise<RecaptchaEvent> & {
		resolve(event: RecaptchaEvent): void;
		reject(event: unknown): void;
	};
}
