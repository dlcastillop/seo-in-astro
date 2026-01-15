# LayoutForArticle

Use the `LayoutForArticle` component to generate the metadata and JSON-LD structured data for an article page in Astro, including the headline, description, author information, and more.

## Props

It receives an object with the following properties:

- **title** (string, required): The title of the page.
- **description** (string, required): The description of the page.
- **pageRoute** (string, required): The URL route for the page.
- **ogImg** (string, optional): The URL of the Open Graph image.
- **image** (string, required): The image associated with the article.
- **datePublished** (string, required): The publication date of the article.
- **dateModified** (string, required): The last modification date of the article.
- **authorName** (string, required): The name of the author of the article.
- **authorUrl** (string, required): The URL of the author of the article.

## Usage

### Add the file to your project

Copy the `LayoutForArticle.astro` file to your project's layouts folder.

### Edit the `siteConfig` object

Update the `siteConfig` object in the `LayoutForArticle.astro` file with your site's base URL, name and default URL of the Open Graph image.

```typescript
const siteConfig: SiteConfig = {
  baseUrl: "https://novajs.dev",
  siteName: "Nova.js",
  defaultOgImg: "/og-default.png",
};
```

### Import the `LayoutForArticle` component

Import the `LayoutForArticle` component into every article page where you want to generate metadata and the JSON-LD structured data.

```astro
---
import LayoutForArticle from "../layouts/LayoutForArticle.astro";
---

<LayoutForArticle
  title="Nova.js - A collection of dependency-free React hooks"
  description="Carefully developed React hooks that you can copy and paste into your project."
  pageRoute="/"
  ogImg="/og-landing.png"
  datePublished="2024-01-06"
  dateModified="2025-01-06"
  authorName="Daniel Castillo"
  authorUrl="https://dlcastillop.com"
>
  <h1>Nova.js</h1>
</LayoutForArticle>
```
