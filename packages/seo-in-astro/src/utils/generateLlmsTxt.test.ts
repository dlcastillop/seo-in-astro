import { describe, it, expect, afterEach } from "vitest";
import { existsSync, readFileSync, unlinkSync } from "node:fs";
import { generateLlmsTxt } from "./generateLlmsTxt";

describe("generate llms.txt", () => {
  const path = "./llms.txt";

  afterEach(() => {
    if (existsSync(path)) {
      unlinkSync(path);
    }
  });

  it("should create a llms.txt file with correct content", () => {
    generateLlmsTxt({
      siteName: "Example",
      pages: [
        {
          pathname: "",
        },
        {
          pathname: "about/",
        },
        {
          pathname: "404/",
        },
      ],
      llmsTxt: true,
      baseUrl: "https://example.com",
      distPath: "",
    });

    expect(existsSync(path)).toBe(true);

    const content = readFileSync(path, "utf-8");
    expect(content).toBe(
      "# Example\n" + "\n- https://example.com/" + "\n- https://example.com/about/",
    );
  });
});
