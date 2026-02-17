import { describe, expect, it } from "vitest";
import { checkSeo } from "@/tooling";

describe("check seo", () => {
  const pathToDemo = "../../demo";
  const expectedSuggestions = [
    {
      title: "1 pages missing metadata",
      description: "These pages have no SEO metadata, which hurts SEO",
      action:
        "Add metadata using @dlcastillop/seo-in-astro layouts to improve search engine visibility",
    },
  ];

  it("should check whether all pages use layouts or not", async () => {
    const suggestions = await checkSeo(pathToDemo);

    expect(suggestions).toStrictEqual(expectedSuggestions);
  });
});
