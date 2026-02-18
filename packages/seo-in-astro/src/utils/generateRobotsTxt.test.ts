import { describe, it, expect, afterEach } from "vitest";
import { existsSync, readFileSync, unlinkSync } from "node:fs";
import { generateRobotsTxt } from "@/utils";

describe("generate robots.txt", () => {
  const path = "./robots.txt";

  afterEach(() => {
    if (existsSync(path)) {
      unlinkSync(path);
    }
  });

  it("should create a robots.txt file with default content", () => {
    generateRobotsTxt({
      baseUrl: "https://example.com",
      distPath: "",
    });

    expect(existsSync(path)).toBe(true);

    const content = readFileSync(path, "utf-8");
    expect(content).toBe(
      "User-Agent: *\n" + "Allow: /\n\n" + "Sitemap: https://example.com/sitemap-index.xml",
    );
  });

  it("should create a robots.txt file with custom content", () => {
    generateRobotsTxt({
      baseUrl: "https://example.com",
      distPath: "",
      robotsTxt: {
        rules: [
          {
            allow: ["/", "/about"],
            crawlDelay: 50,
            disallow: "/admin",
            userAgent: "googlebot",
          },
          {
            allow: "/about",
            disallow: ["/admin"],
            userAgent: ["ferna", "bing"],
          },
        ],
        sitemap: "https://example.com/sitemap.xml",
      },
    });

    expect(existsSync(path)).toBe(true);

    const content = readFileSync(path, "utf-8");
    expect(content).toBe(
      "User-Agent: googlebot\n" +
        "Allow: /\n" +
        "Allow: /about\n" +
        "Disallow: /admin\n" +
        "Crawl-delay: 50\n\n" +
        "User-Agent: ferna\n" +
        "Allow: /about\n" +
        "Disallow: /admin\n\n" +
        "User-Agent: bing\n" +
        "Allow: /about\n" +
        "Disallow: /admin\n\n" +
        "Sitemap: https://example.com/sitemap.xml",
    );
  });
});
