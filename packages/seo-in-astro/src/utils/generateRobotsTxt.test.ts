import { describe, it, expect, afterEach } from "vitest";
import { existsSync, readFileSync, unlinkSync } from "node:fs";
import { generateRobotsTxt } from "./generateRobotsTxt";

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
});
