// env.d.ts

declare module "virtual:seo-in-astro" {
  type SeoInAstroConfig = {
    baseUrl: string;
    siteName: string;
    defaultOgImg: string;
    favicon?: string;
  };

  const config: SeoInAstroConfig;
  export default config;
}
