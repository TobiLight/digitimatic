import type { Infer } from 'sveltekit-superforms';
import { z } from 'zod';

export const mediaPlacementSchema = z.object({
	fullName: z.string().min(1, 'Full name cannot be blank').max(256),
	email: z.string().email("Invalid email address").max(256).trim(),
	placementNeed: z.string().min(1, 'Placement need cannot be blank').max(256).trim(),
	budget: z.string().min(1, 'Budget cannot be blank').max(150),
	description: z.string().min(1, 'Description cannot be blank')
});

export type MediaPlacement = Infer<typeof mediaPlacementSchema>