---
title: LayoutForArticle Reference
description: API Reference for the LayoutForArticle component.
lastUpdated: 2026-01-30
---

The `LayoutForArticle` component generates the metadata for a page, including the title, description, canonical URL,
Open Graph and Twitter metadata, and Article-specific JSON-LD structured data.

## Props

### `title` (required)

**type:** `string`

The title of the page.

### `description` (required)

**type:** `string`

The description of the page.

### `ogImg`

**type:** `string`

The URL of the Open Graph image. If not specified, it defaults to the Open Graph defined in `seoInAstro` integration.

### `lang`

**type:** `string`

The language of the page (e.g., "es", "fr"). If not specified, it defaults to "en".

### `headline`

**type:** `string`

The headline or title of the article. If not specified, it defaults to `title`.

### `images` (required)

**type:** `string[]`

An array of image routes associated with the article.

### `datePublished` (required)

**type:** `Date`

The date when the article was first published.

### `dateModified` (required)

**type:** `Date`

The date when the article was last modified.

### `authors` (required)

**type:** `Array<{ name: string; url: string }>`

An array of author objects. Each author must have a `name` and a `url` property.

### `scriptId`

**type:** `string`

A custom ID for the script tag.