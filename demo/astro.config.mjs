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
      sitemapXml: {
        sitemap: [
          {
            route: "/",
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
          },
          {
            route: "/about",
            lastModified: new Date("2024-01-15"),
            changeFrequency: "monthly",
            priority: 0.8,
          },
        ],
      },
    }),
  ],
});
