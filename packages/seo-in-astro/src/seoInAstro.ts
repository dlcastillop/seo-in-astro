import type { AstroIntegration } from "astro";
import * as z from "zod";
import sitemap, { ChangeFreqEnum } from "@astrojs/sitemap";

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
        error:
          "baseUrl must be a clean domain without paths, query parameters, or fragments (e.g., https://example.com). Please provide a valid base URL and restart the development server.",
      }
    ),
  siteName: z.string(),
  defaultOgImg: z.string(),
  manualRoutes: z.string().array(),
  sitemapConfig: z
    .array(
      z.object({
        route: z.string().startsWith("/", {
          error:
            "route must start with '/' (e.g., /about, /blog). Please provide a valid route and restart the development server.",
        }),
        lastModified: z.union([z.string(), z.date()]).optional(),
        changeFrequency: z
          .enum([
            "always",
            "hourly",
            "daily",
            "weekly",
            "monthly",
            "yearly",
            "never",
          ])
          .optional(),
        priority: z.number().min(0).max(1).optional(),
      })
    )
    .optional(),
});

type SeoInAstroConfig = z.infer<typeof configSchema>;

export const seoInAstro = (config: SeoInAstroConfig): AstroIntegration => {
  return {
    name: "seo-in-astro",
    hooks: {
      "astro:config:setup": ({ updateConfig }) => {
        updateConfig({
          site: config.baseUrl,
          integrations: [
            sitemap({
              serialize(item) {
                const { baseUrl, sitemapConfig } = config;

                if (!sitemapConfig) {
                  return item;
                }

                const routeConfig = sitemapConfig.find(
                  (config) => `${baseUrl}${config.route}` === item.url
                );

                if (routeConfig) {
                  if (routeConfig.changeFrequency) {
                    const freqMap: Record<string, ChangeFreqEnum> = {
                      always: ChangeFreqEnum.ALWAYS,
                      hourly: ChangeFreqEnum.HOURLY,
                      daily: ChangeFreqEnum.DAILY,
                      weekly: ChangeFreqEnum.WEEKLY,
                      monthly: ChangeFreqEnum.MONTHLY,
                      yearly: ChangeFreqEnum.YEARLY,
                      never: ChangeFreqEnum.NEVER,
                    };
                    item.changefreq = freqMap[routeConfig.changeFrequency];
                  }

                  if (routeConfig.lastModified) {
                    item.lastmod =
                      routeConfig.lastModified instanceof Date
                        ? routeConfig.lastModified.toISOString()
                        : routeConfig.lastModified;
                  }

                  if (routeConfig.priority !== undefined) {
                    item.priority = routeConfig.priority;
                  }
                }
                return item;
              },
            }),
          ],
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
