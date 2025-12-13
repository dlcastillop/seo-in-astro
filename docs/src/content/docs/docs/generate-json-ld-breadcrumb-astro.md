---
title: Generate JSON-LD structured data for a breadcrumb page in Astro
description: Use the LayoutForBreadcrumb component to generate JSON-LD structured data for a breadcrumb navigation list in Astro.
lastUpdated: 2025-12-13
---

Use the `LayoutForBreadcrumb` component to generate JSON-LD structured data for a breadcrumb navigation list in Astro.

## Props

- `title` (`string`, **required**): The title of the page
- `description` (`string`, **required**): The description of the page
- `pageRoute` (`string`, **required**): The URL route for the page
- `ogImg` (`string`): The URL of the Open Graph image
- `itemList` (`Array<Object>`, **required**): The list of breadcrumb items
- `itemList[].name` (`string`, **required**): The name of the breadcrumb item
- `itemList[].item` (`string`, **required**): The URL of the breadcrumb item

## Usage

### Add the file to your project

Copy the `LayoutForBreadcrumb.astro` file to your project's layouts folder.

### Edit the `siteConfig` object

Update the `siteConfig` object in the `LayoutForBreadcrumb.astro` file with your site's base URL, name and default URL of the Open Graph image.

```ts
//LayoutForBreadcrumb.astro
const siteConfig: SiteConfig = {
  baseUrl: "https://novajs.dev",
  siteName: "Nova.js",
  defaultOgImg: "/og-default.png",
};
```

### Import the `LayoutForBreadcrumb` component

Import the `LayoutForBreadcrumb` component into every article page where you want to generate metadata and the JSON-LD structured data.

```astro
//src/pages/index.astro
---
import LayoutForBreadcrumb from "../layouts/LayoutForBreadcrumb.astro";
---

<LayoutForBreadcrumb
  title="Nova.js - A collection of dependency-free React hooks"
  description="Carefully developed React hooks that you can copy and paste into your project."
  pageRoute="/"
  ogImg="/og-landing.png"
  itemList={[
    { name: "useArray", item: "https://novajs.dev/react-hook-array" },
    { name: "useAsync", item: "https://novajs.dev/react-hook-async" },
  ]}
>
  <h1>Nova.js</h1>
</LayoutForBreadcrumb>
```
