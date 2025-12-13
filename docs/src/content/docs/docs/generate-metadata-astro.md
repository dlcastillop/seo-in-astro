---
title: Generate the metadata for a page in Astro
description: Use the Layout component to generate the metadata for a page in Astro, including the title, description, canonical URL, and Open Graph and Twitter metadata.
lastUpdated: 2025-12-13
---

Use the `Layout` component to generate the metadata for a page in Astro, including the title, description, canonical URL, and Open Graph and Twitter metadata.

## Props

It receives an object with the following properties:

- `title` (`string`, **required**): The title of the page
- `description` (`string`, **required**): The description of the page
- `pageRoute` (`string`, **required**): The URL route for the page
- `ogImg` (`string`): The URL of the Open Graph image

## Usage

### Add the file to your project

Copy the `Layout.astro` file to your project's layouts folder.

### Edit the `siteConfig` object

Update the `siteConfig` object in the `Layout.astro` file with your site's base URL, name and default URL of the Open Graph image.

```ts
//Layout.astro
const siteConfig: SiteConfig = {
  baseUrl: "https://novajs.dev",
  siteName: "Nova.js",
  defaultOgImg: "/og-default.png",
};
```

### Import the `Layout` component

Import the `Layout` component into every page where you want to generate metadata.

```astro
//src/pages/index.astro
---
import Layout from "../layouts/Layout.astro";
---

<Layout
  title="Nova.js - A collection of dependency-free React hooks"
  description="Carefully developed React hooks that you can copy and paste into your project."
  pageRoute="/"
  ogImg="/og-landing.png"
>
  <h1>Nova.js</h1>
</Layout>
```
