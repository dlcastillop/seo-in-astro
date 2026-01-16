import type { AstroIntegration } from "astro";

interface SeoInAstroConfig {
  baseUrl: string;
  siteName: string;
  defaultOgImg: string;
  manualRoutes: string[];
}

export const seoInAstro = (config: SeoInAstroConfig): AstroIntegration => {
  return {
    name: "seo-in-astro",
    hooks: {
      "astro:config:setup": ({ updateConfig }) => {
        updateConfig({
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
    },
  };
};
