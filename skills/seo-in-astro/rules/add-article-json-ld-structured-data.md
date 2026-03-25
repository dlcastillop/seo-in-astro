---
title: Add Article JSON-LD structured data to a page
description: Learn how to add Article JSON-LD structured data to a page using the LayoutForArticle component from seo-in-astro.
---

`seo-in-astro` provides the `LayoutForArticle` component to easily add Article-specific JSON-LD structured data to a page.

## Using the LayoutForArticle component

1. Import the `LayoutForArticle` component into every page where you want to generate the JSON-LD data.

   ```astro
   // pages/article/getting-started.astro
   ---
   import LayoutForArticle from "seo-in-astro/LayoutForArticle";
   ---

   <LayoutForArticle
     title="Getting Started with Next.js"
     description="Learn how to get started with Next.js."
     ogImg="/og-article.png"
     type="Article"
     headline="Getting Started with Next.js"
     images={["/article-image.jpg"]}
     datePublished={new Date("2024-01-15")}
     dateModified={new Date("2024-01-20")}
     authors={[
       {
         name: "John Doe",
         url: "https://example.com/authors/john-doe",
       },
     ]}
     scriptId="article-json-ld"
   >
     <article>
       <h1>Getting Started with Next.js</h1>
     </article>
   </LayoutForArticle>
   ```

2. Check the generated JSON-LD by inspecting the head element of your page.

## Related

View related API references.

[LayoutForArticle](layout-for-article.md)