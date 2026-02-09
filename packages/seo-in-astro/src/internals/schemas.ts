import * as z from "zod";

export const defaultPropsSchema = z.object({
  title: z.string().min(1, "title must not be empty."),
  description: z.string().min(1, "description must not be empty."),
  lang: z
    .string()
    .min(2, "lang must be at least 2 characters long (e.g., 'es').")
    .default("en")
    .optional(),
  jsonLd: z.any().optional(),
  favicon: z
    .string()
    .refine((val) => z.string().startsWith("/").safeParse(val).success, {
      error: "favicon must be a route starting with '/' (e.g., /favicon.svg).",
    })
    .default("/favicon.svg")
    .optional(),
});
