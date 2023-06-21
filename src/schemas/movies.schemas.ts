import { z } from "zod";

export const movies = z.object({
  id: z.number().positive(),
  name: z.string().max(50).nonempty(),
  duration: z.number().int().positive(),
  price: z.number().int().positive(),
  description: z.string().optional(),
});

export const moviesCreate = z.object({
  name: z.string().max(50).nonempty(),
  duration: z.number().int().positive(),
  price: z.number().int().positive(),
  description: z.string().optional(),
});

export const moviesUpdate = z.object({
  name: z.string().max(50).optional(),
  duration: z.number().int().positive().optional(),
  price: z.number().int().positive().optional(),
  description: z.string().optional(),
});
