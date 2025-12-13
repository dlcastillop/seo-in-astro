# LayoutForProduct

Use the `LayoutForProduct` component to generate the metadata and the JSON-LD structured data for a product page in Astro, including the name, description, and image.

## Props

It receives an object with the following properties:

- **title** (string, required): The title of the page.
- **description** (string, required): The description of the page.
- **pageRoute** (string, required): The URL route for the page.
- **ogImg** (string, optional): The URL of the Open Graph image.
- **image** (string, required): The URL of an image representing the product.

## Usage

### Add the file to your project

Copy the `LayoutForProduct.astro` file to your project's layouts folder.

### Edit the `siteConfig` object

Update the `siteConfig` object in the `LayoutForProduct.astro` file with your site's base URL, name and default URL of the Open Graph image.

```typescript
const siteConfig: SiteConfig = {
  baseUrl: "https://novajs.dev",
  siteName: "Nova.js",
  defaultOgImg: "/og-default.png",
};
```

### Import the `LayoutForProduct` component

Import the `LayoutForProduct` component into every FAQ page where you want to generate metadata and the JSON-LD structured data.

```astro
---
import LayoutForProduct from "../layouts/LayoutForProduct.astro";
---

<LayoutForProduct
  title="Nova.js"
  description="A modern collection of dependency-free React hooks."
  pageRoute="/"
  ogImg="/og-landing.png"
  image="https://novajs.dev/logo.png"
>
  <h1>Nova.js</h1>
</LayoutForProduct>
```
