import { describe, expect, it } from "vitest";
import { checkSeo } from "@/tooling";
import { writeFileSync, unlinkSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

describe("check seo", () => {
  const pathToDemo = "../../demo";
  const pathToDemoPublic = `${pathToDemo}/public`;
  const commonSuggestions = [
    {
      title: "1 pages missing metadata",
      description: "These pages have no SEO metadata, which hurts SEO",
      action:
        "Add metadata using @dlcastillop/seo-in-astro layouts to improve search engine visibility",
    },
  ];

  it("should check whether all pages use layouts or not and that the plugin is configured", async () => {
    const suggestions = await checkSeo(pathToDemo);
    expect(suggestions).toStrictEqual(commonSuggestions);
  });

  it("should check if there is a static robots.txt file", async () => {
    const robotsSuggestion = [
      {
        title: "Static robots.txt detected",
        description: "Consider migrating to plugin-based generation for better flexibility",
        action: "Add seoInAstro plugin to astro.config.mjs",
      },
    ];
    const pathToRobots = `${pathToDemoPublic}/robots.txt`;
    mkdirSync(dirname(pathToRobots), { recursive: true });
    writeFileSync(pathToRobots, "", "utf-8");

    const suggestions = await checkSeo(pathToDemo);

    unlinkSync(pathToRobots);
    expect(suggestions).toStrictEqual([...commonSuggestions, ...robotsSuggestion]);
  });

  it("should check if there is a static sitemap.xml file", async () => {
    const sitemapSuggestion = [
      {
        title: "Static sitemap.xml detected",
        description: "Consider migrating to plugin-based generation for better flexibility",
        action: "Add seoInAstro plugin to astro.config.mjs",
      },
    ];
    const pathToSitemap = `${pathToDemoPublic}/sitemap.xml`;
    mkdirSync(dirname(pathToSitemap), { recursive: true });
    writeFileSync(pathToSitemap, "", "utf-8");

    const suggestions = await checkSeo(pathToDemo);

    unlinkSync(pathToSitemap);
    expect(suggestions).toStrictEqual([...commonSuggestions, ...sitemapSuggestion]);
  });
});
