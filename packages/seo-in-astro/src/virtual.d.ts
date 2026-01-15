// env.d.ts
declare module "virtual:seo-in-astro/config" {
  export interface SeoInAstroConfig {
    prompt: string;
  }

  const config: SeoInAstroConfig;
  export default config;
}
