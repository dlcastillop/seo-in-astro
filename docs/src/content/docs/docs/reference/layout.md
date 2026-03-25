---
title: Layout Reference
description: API Reference for the Layout component.
lastUpdated: 2026-03-25
---

The `Layout` component generates the metadata for a page, including the title, description, canonical URL, Open Graph
and Twitter metadata, and any JSON-LD structured data.

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

### `jsonLd`

**type:** `any`

**Added in:** `seo-in-astro@1.0.0`

The JSON-LD structured data object to be rendered. This should be a valid JSON-LD object following the schema.org
specification.

### `scriptId`

**type:** `string`

**Added in:** `seo-in-astro@1.0.0`

A custom ID for the script tag.
