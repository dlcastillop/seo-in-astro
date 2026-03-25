// @ts-check
import {defineConfig} from "astro/config";
import {seoInAstro} from "seo-in-astro";

// https://astro.build/config
export default defineConfig({
    integrations: [
        seoInAstro({
            baseUrl: "https://example.com",
            siteName: "Example",
        }),
    ],
});
