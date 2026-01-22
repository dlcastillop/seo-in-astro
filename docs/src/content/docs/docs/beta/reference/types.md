---
title: Types Reference
description: The full reference documentation for seo-in-astro integration types.
lastUpdated: 2026-01-22
---

## `SitemapConfig`

Properties:

- `sitemap` (`Sitemap[]`): An array of route configuration objects to customize the sitemap
- `i18n` (`object`): Internationalization configuration for the sitemap
  - `defaultLocale` (`string`, required): The default locale for your site
  - `locales` (`Record<string, string>`, required): A map of locale codes to their corresponding language codes

## `Sitemap`

Properties:

- `route` (`string`, required): The route path for the page. Must start with `/` (e.g., `/about`, `/blog/post-1`)
- `lastModified` (`string | Date`): The date when the page was last modified
- `changeFrequency` (`'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'`): How frequently the page is likely to change
- `priority` (`number`): The priority of this URL relative to other URLs on your site. Value must be between 0.0 and 1.0
