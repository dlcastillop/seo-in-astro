// @ts-check
import { defineConfig } from "astro/config";
import { seoInAstro } from "@dlcastillop/seo-in-astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    seoInAstro({
      baseUrl: "https://example.com",
      siteName: "Example",
      defaultOgImg: "/default-og.png",
      manualRoutes: [],
    }),
  ],
});
