---
title: Generate the sitemap.xml file for a site
description: Learn how to generate the sitemap.xml file for a site with seo-in-astro.
lastUpdated: 2026-01-21
---

`seo-in-astro` can generate the `sitemap.xml` file for your Astro site with automatic route detection.

## Enabling sitemap.xml generation

## Advanced sitemap configuration

By default, `seo-in-astro` generates a basic sitemap with all detected routes. However, you can customize each route's metadata by using the sitemapXml option in the integration configuration.

This option allows you to specify additional properties for each route, such as modification date, priority, change frequency, and more.

```ts
// app/sitemap.ts
import type { MetadataRoute } from "next";
import { sitemapXml } from "@dlcastillop/seo-in-nextjs";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return sitemapXml([
    {
      route: "/",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      route: "/about",
      lastModified: new Date("2024-01-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]);
}
```
