import { describe, expect, it } from "vitest";
import { jsonLdForArticle, jsonLdForBreadcrumb, type JsonLdForArticle } from "@/internals";

describe("generate JSON LDs", () => {
  const baseJsonLdForArticleProps: JsonLdForArticle = {
    type: "Article",
    baseUrl: "https://example.com",
    images: ["https://example.com/image.png", "/image-secondary.jpg"],
    headline: "This is a headline",
    datePublished: new Date("2026-02-17"),
    dateModified: new Date("2026-02-17"),
    authors: [{ name: "Daniel Castillo", url: "https://dlcastillop.com" }],
  };
  const baseExpectedJsonLdForArticle = {
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

  it("for article with one author", () => {
    const jsonLd = jsonLdForArticle(baseJsonLdForArticleProps);
    expect(jsonLd).toStrictEqual(baseExpectedJsonLdForArticle);
  });

  it("for article with multiple authors", () => {
    const jsonLd = jsonLdForArticle({
      ...baseJsonLdForArticleProps,
      authors: [
        ...baseJsonLdForArticleProps.authors,
        { name: "Abraham Castillo", url: "https://adcastillop.com" },
      ],
    });
    expect(jsonLd).toStrictEqual({
      ...baseExpectedJsonLdForArticle,
      author: [
        baseExpectedJsonLdForArticle.author,
        {
          "@type": "Person",
          name: "Abraham Castillo",
          url: "https://adcastillop.com",
        },
      ],
    });
  });

  it("for breadcrumb", () => {
    const jsonLd = jsonLdForBreadcrumb({
      baseUrl: "https://example.com",
      itemList: [
        { name: "Home", route: "/home" },
        { name: "Laptop", route: "/home/laptop" },
        { name: "CPU", route: "/home/laptop/cpu" },
      ],
    });
    const expectedJsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://example.com/home",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Laptop",
          item: "https://example.com/home/laptop",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "CPU",
          item: "https://example.com/home/laptop/cpu",
        },
      ],
    };

    expect(jsonLd).toStrictEqual(expectedJsonLd);
  });
});
