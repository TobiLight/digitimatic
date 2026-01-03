import type { Infer } from 'sveltekit-superforms';
import { z } from 'zod';

// Spam keyword patterns for content analysis
const SPAM_KEYWORDS = [
	'viagra',
	'cialis',
	'pharmacy',
	'loan',
	'credit',
	'debt',
	'casino',
	'gambling',
	'porn',
	'xxx',
	'adult',
	'dating',
	'meet',
	'fuck',
	'sex',
	'nude',
	'hot',
	'sexy',
	'free',
	'cheap',
	'discount',
	'offer',
	'deal',
	'sale',
	'money',
	'earn',
	'profit',
	'click',
	'visit',
	'website',
	'link',
	'url',
	'http',
	'www',
	'online',
	'best',
	'guarantee',
	'risk',
	'free',
	'trial',
	'win',
	'winner',
	'prize',
	'lottery',
	'urgent',
	'immediate',
	'now',
	'today',
	'fast',
	'quick',
	'instant',
	'easy',
	'click here',
	'buy now',
	'order now',
	'call now',
	'act now',
	'limited time',
	'100% free',
	'no risk',
	'no obligation',
	'satisfaction guaranteed'
];

// Suspicious patterns
const SUSPICIOUS_PATTERNS = [
	/\b\d{3,}\s*\d{3,}\s*\d{4}\b/, // Phone number patterns
	/\b[A-Z]{2,}\s*[0-9]{2,}\b/, // Suspicious alphanumeric patterns
	/\bhttp[s]?:\/\/[^\s]+\b/, // URLs in content
	/\b[A-Z]{3,}\b/, // Excessive capitalization
	/\b[!@#$%^&*()+={}:;'"|,.<>?/[\]-]{3,}\b/, // Excessive special characters
	/\b\d{10,}\b/ // Long number sequences
];

// Disposable email domains
const DISPOSABLE_EMAIL_DOMAINS = [
	'10minutemail.com',
	'tempmail.org',
	'guerrillamail.com',
	'mailinator.com',
	'10minutemail.net',
	'temp-mail.org',
	'throwaway.email',
	'getnada.com',
	'10minutemail.co.uk',
	'temp-mail.de',
	'guerrillamail.net',
	'maildrop.cc',
	'10minutemail.de',
	'temp-mail.net',
	'guerrillamail.org',
	'temp-mail.ru',
	'10minutemail.us',
	'temp-mail.net',
	'guerrillamailblock.com',
	'temp-mail.org'
];

// Custom validation functions
const validateSpamKeywords = (value: string): boolean => {
	const lowerValue = value.toLowerCase();
	return !SPAM_KEYWORDS.some((keyword) => lowerValue.includes(keyword));
};

const validateSuspiciousPatterns = (value: string): boolean => {
	return !SUSPICIOUS_PATTERNS.some((pattern) => pattern.test(value));
};

const validateEmailDomain = (email: string): boolean => {
	const domain = email.split('@')[1]?.toLowerCase();

	// Check if domain is in disposable list
	if (DISPOSABLE_EMAIL_DOMAINS.includes(domain)) {
		return false;
	}

	// For stricter validation, require domain to be in whitelist
	// For more flexible approach, just check it's not disposable
	return true;
};

const validateContentQuality = (value: string): boolean => {
	// Check for excessive repetition
	const words = value.toLowerCase().split(/\s+/);
	const wordCounts = new Map();

	for (const word of words) {
		if (word.length > 3) {
			// Ignore short words
			wordCounts.set(word, (wordCounts.get(word) || 0) + 1);
		}
	}

	// Check if any word appears more than 30% of the time
	const maxCount = Math.max(...wordCounts.values());
	const totalWords = words.filter((word) => word.length > 3).length;

	if (totalWords > 0 && maxCount / totalWords > 0.3) {
		return false;
	}

	// Check for minimum content quality (not just repeated characters)
	const uniqueChars = new Set(value).size;
	if (value.length > 50 && uniqueChars < 10) {
		return false;
	}

	return true;
};

const validateName = (name: string): boolean => {
	// Check for excessive capitalization
	const upperCaseCount = (name.match(/[A-Z]/g) || []).length;
	if (upperCaseCount > name.length * 0.5) {
		return false;
	}

	// Check for suspicious patterns in names
	if (/\d{3,}/.test(name)) {
		return false;
	}

	// Check for minimum name quality
	if (name.length < 2 || name.length > 100) {
		return false;
	}

	return true;
};

// Enhanced contact form schema
export const contactFormSchema = z.object({
	fullname: z
		.string()
		.min(2, 'Name must be at least 2 characters long')
		.max(100, 'Name cannot exceed 100 characters')
		.refine(validateName, 'Name appears to be suspicious')
		.refine(validateSpamKeywords, 'Name contains suspicious content')
		.refine(validateSuspiciousPatterns, 'Name contains suspicious patterns'),

	email: z
		.string()
		.email('Please enter a valid email address')
		.max(256, 'Email cannot exceed 256 characters')
		.refine(validateEmailDomain, 'Please use a valid email provider'),

	'business-name': z
		.string()
		.min(2, 'Business name must be at least 2 characters long')
		.max(150, 'Business name cannot exceed 150 characters')
		.refine(validateSpamKeywords, 'Business name contains suspicious content')
		.refine(validateSuspiciousPatterns, 'Business name contains suspicious patterns'),

	budget: z
		.string()
		.min(3, 'Please specify a budget range')
		.max(50, 'Budget description too long')
		.refine(validateSpamKeywords, 'Budget contains suspicious content')
		.refine(validateSuspiciousPatterns, 'Budget contains suspicious patterns'),

	description: z
		.string()
		.min(10, 'Please provide more details about your project')
		.max(2000, 'Description cannot exceed 2000 characters')
		.refine(validateContentQuality, 'Description appears to be low quality or spam')
		.refine(validateSpamKeywords, 'Description contains spam keywords')
		.refine(validateSuspiciousPatterns, 'Description contains suspicious patterns'),

	// Honeypot fields
	website: z.string().optional(),
	phone: z.string().optional(),
	'contact-method': z.string().optional(),

	// Timing and fingerprint fields
	'time-started': z.string().optional(),
	'time-submitted': z.string().optional(),
	'form-fingerprint': z.string().optional(),

	// reCAPTCHA field
	'g-recaptcha-response': z.string().optional()
});

export type ContactFormData = Infer<typeof contactFormSchema>;

// Spam score calculation
export interface SpamAnalysis {
	score: number;
	reasons: string[];
	isSpam: boolean;
}

export function analyzeSpamContent(data: ContactFormData): SpamAnalysis {
	const reasons: string[] = [];
	let score = 0;

	// Analyze each field for spam indicators
	const fields = [
		{ name: 'name', value: data.fullname },
		{ name: 'business', value: data['business-name'] },
		{ name: 'budget', value: data.budget },
		{ name: 'description', value: data.description }
	];

	for (const field of fields) {
		const value = field.value.toLowerCase();

		// Check spam keywords
		const spamMatches = SPAM_KEYWORDS.filter((keyword) => value.includes(keyword));
		if (spamMatches.length > 0) {
			score += spamMatches.length * 10;
			reasons.push(`${field.name} contains spam keywords: ${spamMatches.join(', ')}`);
		}

		// Check suspicious patterns
		const suspiciousMatches = SUSPICIOUS_PATTERNS.filter((pattern) => pattern.test(value));
		if (suspiciousMatches.length > 0) {
			score += suspiciousMatches.length * 5;
			reasons.push(`${field.name} contains suspicious patterns`);
		}

		// Check for excessive repetition
		if (!validateContentQuality(value)) {
			score += 15;
			reasons.push(`${field.name} appears to be low quality or repetitive`);
		}
	}

	// Check email domain
	if (!validateEmailDomain(data.email)) {
		score += 20;
		reasons.push('Email domain appears to be disposable or suspicious');
	}

	// Check timing (if available)
	if (data['time-started'] && data['time-submitted']) {
		const timeStarted = parseInt(data['time-started']);
		const timeSubmitted = parseInt(data['time-submitted']);
		const timeTaken = timeSubmitted - timeStarted;

		if (timeTaken < 3000) {
			// Less than 3 seconds
			score += 25;
			reasons.push('Form submitted too quickly, likely automated');
		} else if (timeTaken > 3600000) {
			// More than 1 hour
			score += 5;
			reasons.push('Form took unusually long to submit');
		}
	}

	// Check honeypot fields
	if (data.website || data.phone || data['contact-method']) {
		score += 50;
		reasons.push('Bot detected: honeypot fields were filled');
	}

	// Determine if spam
	const isSpam = score >= 30;

	return {
		score,
		reasons,
		isSpam
	};
}

// Configuration for spam protection levels
export interface SpamProtectionConfig {
	enabled: boolean;
	maxScore: number;
	strictMode: boolean;
	logSuspicious: boolean;
	blockThreshold: number;
}

export const defaultSpamConfig: SpamProtectionConfig = {
	enabled: true,
	maxScore: 30,
	strictMode: false,
	logSuspicious: true,
	blockThreshold: 50
};
