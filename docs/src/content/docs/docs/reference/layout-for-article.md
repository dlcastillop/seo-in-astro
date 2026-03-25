---
title: LayoutForArticle Reference
description: API Reference for the LayoutForArticle component.
lastUpdated: 2026-03-25
---

The `LayoutForArticle` component generates the metadata for a page, including the title, description, canonical URL,
Open Graph and Twitter metadata, and Article-specific JSON-LD structured data.

## Props

### `title` (required)

**type:** `string`

**Added in:** `seo-in-astro@1.0.0`

The title of the page.

### `description` (required)

**type:** `string`

**Added in:** `seo-in-astro@1.0.0`

The description of the page.

### `ogImg`

**type:** `string`

**Added in:** `seo-in-astro@1.0.0`

**default:** `defaultOgImg` (if specified)

The URL of the Open Graph image.

### `lang`

**type:** `string`

**Added in:** `seo-in-astro@1.0.0`

The language of the page (e.g., "es", "fr"). If not specified, it defaults to "en".

### `headline`

**type:** `string`

**Added in:** `seo-in-astro@1.0.0`

The headline or title of the article. If not specified, it defaults to `title`.

### `images` (required)

**type:** `string[]`

**Added in:** `seo-in-astro@1.0.0`

An array of image routes associated with the article.

### `datePublished` (required)

**type:** `Date`

**Added in:** `seo-in-astro@1.0.0`

The date when the article was first published.

### `dateModified` (required)

**type:** `Date`

**Added in:** `seo-in-astro@1.0.0`

The date when the article was last modified.

### `authors` (required)

**type:** `Array<{ name: string; url: string }>`

**Added in:** `seo-in-astro@1.0.0`

An array of author objects. Each author must have a `name` and a `url` property.

### `scriptId`

**Added in:** `seo-in-astro@1.0.0`

**type:** `string`

A custom ID for the script tag.
