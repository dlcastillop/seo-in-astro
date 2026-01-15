# `sitemap.xml`

Just copy and paste a file that will generate the `sitemap.xml` for an Astro site, including all routes and their last modified dates.

## Usage

### Install `@astrojs/sitemap`

Install the dependency `@astrojs/sitemap` using npm, yarn or pnpm.

```bash
npm install @astrojs/sitemap
```

```bash
yarn add @astrojs/sitemap
```

```bash
pnpm add @astrojs/sitemap
```

### Add the file to your project

Copy the `astro.config.mjs` file to your project's root folder.

### Edit the `sitemapConfig` object

Update the `sitemapConfig` object in the `astro.config.mjs` file with your site's base URL and its manual routes.

```typescript
const sitemapConfig: SitemapConfig = {
  baseUrl: "https://novajs.dev",
  manualRoutes: [
    {
      route: "/react-hook-array",
      lastModified: "2025-06-14",
    },
    {
      route: "/react-hook-async",
      lastModified: "2025-05-26",
    },
  ],
};
```
