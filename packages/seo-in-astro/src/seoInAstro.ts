import type { AstroIntegration } from "astro";
import * as z from "zod";
import sitemap from "@astrojs/sitemap";

const configSchema = z.object({
  baseUrl: z
    .url({
      protocol: /^https?$/,
      hostname: z.regexes.domain,
      error:
        "Invalid baseUrl. Please provide a valid base URL (e.g., https://example.com) and restart the development server.",
      normalize: true,
    })
    .refine(
      (url) => {
        const parsed = new URL(url);
        return parsed.pathname === "/" && !parsed.search && !parsed.hash;
      },
      {
        message:
          "baseUrl must be a clean domain without paths, query parameters, or fragments (e.g., https://example.com). Please provide a valid base URL and restart the development server.",
      }
    ),
  siteName: z.string(),
  defaultOgImg: z.string(),
  manualRoutes: z.string().array(),
});

type SeoInAstroConfig = z.infer<typeof configSchema>;

export const seoInAstro = (config: SeoInAstroConfig): AstroIntegration => {
  return {
    name: "seo-in-astro",
    hooks: {
      "astro:config:setup": ({ updateConfig }) => {
        updateConfig({
          site: config.baseUrl,
          integrations: [sitemap()],
          vite: {
            plugins: [
              {
                name: "seo-in-astro-config",
                resolveId(id) {
                  if (id === "virtual:seo-in-astro/config") {
                    return "\0" + id;
                  }
                },
                load(id) {
                  if (id === "\0virtual:seo-in-astro/config") {
                    return `export default ${JSON.stringify(config)}`;
                  }
                },
              },
            ],
          },
        });
      },
      "astro:route:setup": ({ logger }) => {
        try {
          configSchema.parse(config);
        } catch (error) {
          if (error instanceof z.ZodError) {
            logger.error(error.issues[0].message);
          }
        }
      },
    },
  };
};
