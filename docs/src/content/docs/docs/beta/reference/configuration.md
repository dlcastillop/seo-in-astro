---
title: Configuration Reference
description: The full reference documentation for seo-in-astro integration options.
lastUpdated: 2026-01-22
---

`seo-in-astro` exposes several options to control its behavior.

## Configure the integration

### `baseUrl` (required)

**type:** `string`

The base URL of the project.

### `siteName` (required)

**type:** `string`

The name of the site.

### `defaultOgImg` (required)

**type:** `string`

The URL of the default Open Graph image.

### `llmsTxt`

**type:** `boolean`

**default:** `false`

Enables the generation of the `llms.txt` file for your site.

### `sitemapXml`

**type:** `SitemapConfig`

Allows you to customize the sitemap by adding additional metadata to specific routes.

### `robotsTxt`

**type:** `RobotsConfig`

Allows you to customize the `robots.txt` file for your site.
