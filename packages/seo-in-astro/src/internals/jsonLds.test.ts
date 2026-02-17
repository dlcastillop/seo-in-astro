import { describe, expect, it } from "vitest";
import { jsonLdForArticle, type JsonLdForArticle } from "@/internals";

describe("generate JSON LDs", () => {
  const jsonLdForArticleProps: JsonLdForArticle = {
    type: "Article",
    baseUrl: "https://example.com",
    images: ["https://example.com/image.png", "/image-secondary.jpg"],
    headline: "This is a headline",
    datePublished: new Date("2026-02-17"),
    dateModified: new Date("2026-02-17"),
    authors: [{ name: "Daniel Castillo", url: "https://dlcastillop.com" }],
  };

  it("for article with one author", async () => {
    const jsonLd = jsonLdForArticle(jsonLdForArticleProps);
    const expectedJsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "This is a headline",
      image: ["https://example.com/image.png", "https://example.com/image-secondary.jpg"],
      datePublished: "2026-02-17T00:00:00.000Z",
      dateModified: "2026-02-17T00:00:00.000Z",
      author: {
        "@type": "Person",
        name: "Daniel Castillo",
        url: "https://dlcastillop.com",
      },
    };

    expect(jsonLd).toStrictEqual(expectedJsonLd);
  });

  it("for article with multiple author", async () => {
    const jsonLd = jsonLdForArticle({
      ...jsonLdForArticleProps,
      authors: [
        ...jsonLdForArticleProps.authors,
        { name: "Abraham Castillo", url: "https://adcastillop.com" },
      ],
    });
    const expectedJsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "This is a headline",
      image: ["https://example.com/image.png", "https://example.com/image-secondary.jpg"],
      datePublished: "2026-02-17T00:00:00.000Z",
      dateModified: "2026-02-17T00:00:00.000Z",
      author: {
        "@type": "Person",
        name: "Daniel Castillo",
        url: "https://dlcastillop.com",
      },
    };

    expect(jsonLd).toStrictEqual(expectedJsonLd);
  });
});
