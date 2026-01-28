import config from "virtual:config";
import * as z from "zod";

const {defaultOgImg} = config;

export const defaultPropsSchema = z.object({
    title: z.string().min(1, "title must not be empty."),
    description: z.string().min(1, "description must not be empty."),
    ogImg: z.string().refine(
        (val) => {
            const isValidPath = z.string().startsWith("/").safeParse(val).success;
            const isValidUrl = z.url().safeParse(val).success;

            return isValidPath || isValidUrl;
        },
        {
            error: "ogImg must be either a route starting with '/' (e.g., /image.jpg) or a valid URL (e.g., https://example.com/image.jpg).",
        }
    ).default(defaultOgImg).optional(),
    lang: z.string().min(2, "lang must be at least 2 characters long (e.g., 'es').").default("en").optional(),
    jsonLd: z.any().optional(),
    scriptId: z.string().optional(),
});