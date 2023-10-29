import { z } from 'zod';

export const createBugSchema = z.object({
  title: z.string().min(3).max(255),
  description: z.string().min(1),
});
