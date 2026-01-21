// env.d.ts

declare module "virtual:seo-in-astro/config" {
  type SeoInAstroConfig = {
    baseUrl: string;
    siteName: string;
    defaultOgImg: string;
    manualRoutes: string[];
    sitemapConfig?:
      | {
          sitemap?:
            | {
                route: string;
                lastModified?: string | Date | undefined;
                changeFrequency?:
                  | "never"
                  | "always"
                  | "hourly"
                  | "daily"
                  | "weekly"
                  | "monthly"
                  | "yearly"
                  | undefined;
                priority?: number | undefined;
              }[]
            | undefined;
          i18n?:
            | {
                defaultLocale: string;
                locales: Record<string, string>;
              }
            | undefined;
        }
      | undefined;
    llmsTxt?: boolean | undefined;
  };

  const config: SeoInAstroConfig;
  export default config;
}
