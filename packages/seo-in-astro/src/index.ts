import type { AstroIntegration } from "astro";
import * as z from "zod";
import sitemap, { ChangeFreqEnum } from "@astrojs/sitemap";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import virtual from "vite-plugin-virtual";
import { generateLlmsTxt } from "@/utils";

const RESTART_MESSAGE = "Please provide a valid value and restart the development server.";

const configSchema = z.object({
  baseUrl: z
    .url({
      protocol: /^https?$/,
      hostname: z.regexes.domain,
      error: `Invalid baseUrl. ${RESTART_MESSAGE}`,
      normalize: true,
    })
    .refine(
      (url) => {
        const parsed = new URL(url);
        return parsed.pathname === "/" && !parsed.search && !parsed.hash;
      },
      {
        error: `baseUrl must be a clean domain without paths, query parameters, or fragments (e.g., https://example.com). ${RESTART_MESSAGE}`,
      },
    ),
  siteName: z.string().min(1, `siteName must not be empty. ${RESTART_MESSAGE}`),
  defaultOgImg: z.string().refine(
    (val) => {
      const isValidPath = z.string().startsWith("/").safeParse(val).success;
      const isValidUrl = z.url().safeParse(val).success;

      return isValidPath || isValidUrl;
    },
    {
      error: `defaultOgImg must be either a route starting with '/' (e.g., /image.jpg) or a valid URL (e.g., https://example.com/image.jpg). ${RESTART_MESSAGE}`,
    },
  ),
  sitemapXml: z
    .object({
      sitemap: z
        .array(
          z.object({
            route: z.string().startsWith("/", {
              error: `route must start with '/' (e.g., /about). ${RESTART_MESSAGE}`,
            }),
            lastModified: z.union([z.string(), z.date()]).optional(),
            changeFrequency: z
              .enum(["always", "hourly", "daily", "weekly", "monthly", "yearly", "never"])
              .optional(),
            priority: z.number().min(0).max(1).optional(),
          }),
        )
        .optional(),
      i18n: z
        .object({
          defaultLocale: z.string(),
          locales: z.record(z.string(), z.string()),
        })
        .optional(),
    })
    .optional(),
  llmsTxt: z.boolean().default(false).optional(),
  robotsTxt: z
    .object({
      rules: z.union([
        z.object({
          userAgent: z.union([z.string(), z.array(z.string())]).optional(),
          allow: z.union([z.string(), z.array(z.string())]).optional(),
          disallow: z.union([z.string(), z.array(z.string())]).optional(),
          crawlDelay: z.number().optional(),
        }),
        z.array(
          z.object({
            userAgent: z.union([z.string(), z.array(z.string())]),
            allow: z.union([z.string(), z.array(z.string())]).optional(),
            disallow: z.union([z.string(), z.array(z.string())]).optional(),
            crawlDelay: z.number().optional(),
          }),
        ),
      ]),
      sitemap: z.union([z.string(), z.array(z.string())]).optional(),
      host: z.string().optional(),
    })
    .optional(),
  favicon: z
    .string()
    .refine((val) => z.string().startsWith("/").safeParse(val).success, {
      error: "favicon must be a route starting with '/' (e.g., /favicon.svg).",
    })
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
                const { baseUrl, sitemapXml } = config;

                if (!sitemapXml || !sitemapXml.sitemap) {
                  return item;
                }

                const routeConfig = sitemapXml.sitemap.find(
                  (config) => `${baseUrl}${config.route}` === item.url,
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
              i18n: config?.sitemapXml?.i18n,
            }),
          ],
          vite: {
            plugins: [
              virtual({
                "virtual:module": `export default ${JSON.stringify(config)}`,
                "virtual:seo-in-astro": config,
              }),
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
      "astro:build:done": async ({ dir, pages, logger }) => {
        const { baseUrl, siteName, llmsTxt, robotsTxt } = config;
        const distPath = fileURLToPath(dir);

        generateLlmsTxt({
          distPath,
          baseUrl,
          llmsTxt,
          pages,
          siteName,
        });
        logger.info(`\`llms.txt\` created at \`${path.relative(process.cwd(), distPath)}\``);

        // Generate robots.txt
        const robotsTxtPath = path.join(distPath, "robots.txt");

        let robotsContent = "";

        if (robotsTxt) {
          // Custom robots configuration
          const rulesArray = Array.isArray(robotsTxt.rules) ? robotsTxt.rules : [robotsTxt.rules];

          for (const rule of rulesArray) {
            const agents = rule.userAgent
              ? Array.isArray(rule.userAgent)
                ? rule.userAgent
                : [rule.userAgent]
              : ["*"];

            for (const agent of agents) {
              robotsContent += `User-Agent: ${agent}\n`;

              // Allow
              if (rule.allow) {
                const allows = Array.isArray(rule.allow) ? rule.allow : [rule.allow];
                for (const allow of allows) {
                  robotsContent += `Allow: ${allow}\n`;
                }
              }

              // Disallow
              if (rule.disallow) {
                const disallows = Array.isArray(rule.disallow) ? rule.disallow : [rule.disallow];
                for (const disallow of disallows) {
                  robotsContent += `Disallow: ${disallow}\n`;
                }
              }

              // Crawl-delay
              if (rule.crawlDelay !== undefined) {
                robotsContent += `Crawl-delay: ${rule.crawlDelay}\n`;
              }

              robotsContent += "\n";
            }
          }

          // Host
          if (robotsTxt.host) {
            robotsContent += `Host: ${robotsTxt.host}\n`;
          }

          // Sitemap
          if (robotsTxt.sitemap) {
            const sitemaps = Array.isArray(robotsTxt.sitemap)
              ? robotsTxt.sitemap
              : [robotsTxt.sitemap];
            for (const sitemap of sitemaps) {
              robotsContent += `Sitemap: ${sitemap}\n`;
            }
          }
        } else {
          // Default robots.txt
          robotsContent = `User-Agent: *\nAllow: /\n\nSitemap: ${baseUrl}/sitemap-index.xml`;
        }

        fs.writeFileSync(robotsTxtPath, robotsContent.trim(), "utf-8");

        logger.info(`\`robots.txt\` created at \`${path.relative(process.cwd(), distPath)}\``);
      },
    },
  };
};
