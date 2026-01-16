// env.d.ts
declare module "virtual:seo-in-astro/config" {
  interface SeoInAstroConfig {
    baseUrl: string;
    siteName: string;
    defaultOgImg: string;
    manualRoutes: string[];
  }

  const config: SeoInAstroConfig;
  export default config;
}
