---
title: Configuration Reference
description: The full reference documentation for seo-in-astro integration options.
---

`seo-in-astro` exposes several options to control its behavior.

## Configure the integration

### `baseUrl` (required)

**type:** `string`

**Added in:** `seo-in-astro@1.0.0`

The base URL of the project.

### `siteName` (required)

**type:** `string`

**Added in:** `seo-in-astro@1.0.0`

The name of the site.

### `defaultOgImg`

**type:** `string`

**Added in:** `seo-in-astro@1.0.0`

The URL of the default Open Graph image.

### `llmsTxt`

**type:** `boolean`

**Added in:** `seo-in-astro@1.0.0`

**default:** `false`

Enables the generation of the `llms.txt` file for your site.

### `sitemapXml`

**type:** [`SitemapConfig`](#sitemapconfig.md)

**Added in:** `seo-in-astro@1.0.0`

Allows you to customize the sitemap by adding additional metadata to specific routes.

### `robotsTxt`

**type:** [`RobotsConfig`](#robotsconfig.md)

**Added in:** `seo-in-astro@1.0.0`

Allows you to customize the `robots.txt` file for your site.

### `favicon`

**type:** `string`

**Added in:** `seo-in-astro@1.0.0`

**default**: `/favicon.svg`

Path to the favicon file.