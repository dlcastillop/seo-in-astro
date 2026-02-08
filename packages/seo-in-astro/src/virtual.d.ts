// env.d.ts

declare module "virtual:config" {
  type SeoInAstroConfig = {
    baseUrl: string;
    siteName: string;
    defaultOgImg: string;
  };

  const config: SeoInAstroConfig;
  export default config;
}
