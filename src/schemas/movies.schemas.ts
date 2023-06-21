import { z } from "zod";

export const movies = z.object({
  id: z.number().positive(),
  name: z.string().max(50).nonempty(),
  duration: z.number().positive(),
  price: z.number().positive(),
  description: z.string().optional(),
});

export const moviesCreate = z.object({
  name: z.string().max(50).nonempty(),
  duration: z.number().positive(),
  price: z.number().positive(),
  description: z.string().optional(),
});

export const moviesUpdate = z.object({
  name: z.string().max(50).optional(),
  duration: z.number().positive().optional(),
  price: z.number().positive().optional(),
  description: z.string().optional(),
});
