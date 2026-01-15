// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

/**
 * Sitemap configuration
 *
 * @property {string} url - The base URL of the site.
 * @property {{ route: string; lastModified: string }[]} manualRoutes - A list of manually defined routes with custom last modified dates.
 * @type {{ baseUrl: string; manualRoutes: { route: string; lastModified: string }[] }}
 */
const sitemapConfig = {
  baseUrl: "https://novajs.dev",
  manualRoutes: [],
};

// https://astro.build/config
export default defineConfig({
  site: sitemapConfig.baseUrl,
  integrations: [
    sitemap({
      serialize(item) {
        const now = new Date();
        const baseUrl = sitemapConfig.baseUrl;
        const manualRoutes = sitemapConfig.manualRoutes;
        const manualRoute = manualRoutes.find(
          (manualRoute) => `${baseUrl}${manualRoute.route}` === item.url
        );

        if (manualRoute) {
          item.lastmod = manualRoute.lastModified;
        } else {
          item.lastmod = now.toString();
        }

        return item;
      },
    }),
  ],
});
