---
title: Add JSON-LD structured data to a page
description: Learn how to add JSON-LD structured data to a page using the Layout component in seo-in-astro.
---

`seo-in-astro` provides the `Layout` component to easily add any JSON-LD structured data to a page.

## Using the Layout component

1. Import the `JsonLdScript` component into every page where you want to generate the JSON-LD data.

   ```astro
   // pages/article/getting-started.astro
   ---
   import Layout from "seo-in-astro/Layout";

   const jsonLd = {
     "@context": "https://schema.org",
     "@type": "Article",
     headline: "Getting Started with Next.js",
     author: {
       "@type": "Person",
       name: "John Doe",
     },
     datePublished: "2024-01-15",
   };
   ---

   <Layout
     title="Getting Started with Next.js"
     description="Learn how to get started with Next.js."
     ogImg="/og-article.png"
     jsonLd={jsonLd}
   >
     <article>
       <h1>Getting Started with Next.js</h1>
     </article>
   </Layout>
   ```

2. Check the generated JSON-LD by inspecting the head element of your page.

## Related

View related API references.

[Layout](layout.md)