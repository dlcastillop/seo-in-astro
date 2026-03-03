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

## `RobotsConfig`

Properties:

- `rules` (`RobotRule | RobotRule[]`, required): Rules for web crawlers. Can be a single rule object or an array of rule objects
- `sitemap` (`string | string[]`): The URL(s) of your sitemap file(s)
- `host` (`string`): The preferred domain for your site (e.g., `"https://example.com"`)

## `RobotRule`

Properties:

- `userAgent` (`string | string[]`, optional for single rule, required for array): The user agent(s) the rule applies to (e.g., `"*"`, `"Googlebot"`)
- `allow` (`string | string[]`): Path(s) that are allowed to be crawled
- `disallow` (`string | string[]`): Path(s) that are not allowed to be crawled
- `crawlDelay` (`number`): Time (in seconds) the crawler should wait between requests
