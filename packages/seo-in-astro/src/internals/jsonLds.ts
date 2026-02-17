interface JsonLdForArticle {
  type: "Article" | "NewsArticle" | "BlogPosting";
  images: string[];
  datePublished: Date;
  dateModified: Date;
  authors: {
    name: string;
    url: string;
  }[];
  headline: string;
  baseUrl: string;
}

export const jsonLdForArticle = ({
  authors,
  dateModified,
  datePublished,
  headline,
  images,
  type,
  baseUrl,
}: JsonLdForArticle) => {
  let author;

  if (authors.length === 1) {
    author = {
      "@type": "Person",
      ...authors[0],
    };
  } else {
    author = authors.map((author) => {
      return {
        "@type": "Person",
        ...author,
      };
    });
  }

  const image = images.map((img) => {
    if (img.startsWith("/")) {
      return `${baseUrl}${img}`;
    } else {
      return img;
    }
  });

  return {
    "@context": "https://schema.org",
    "@type": type,
    headline,
    image,
    datePublished: datePublished.toISOString(),
    dateModified: dateModified.toISOString(),
    author,
  };
};
