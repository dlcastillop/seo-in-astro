---
title: LayoutForBreadcrumb Reference
description: API Reference for the LayoutForBreadcrumb component.
lastUpdated: 2026-03-25
---

The `LayoutForBreadcrumb` component generates the metadata for a page, including the title, description, canonical URL,
Open Graph and Twitter metadata, and Breadcrumb-specific JSON-LD structured data.

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

### `itemList` (required)

**type:** `Array<{ name: string; route: string }>`

**Added in:** `seo-in-astro@1.0.0`

An array of breadcrumb items representing the navigation hierarchy. Each item must have:

- **name** (`string`): The display name for the breadcrumb item
- **route** (`string`): The route path for the breadcrumb item (e.g., `/products`, `/blog/post-1`)

The items should be ordered from the highest level (typically "Home") to the current page.

### `scriptId`

**Added in:** `seo-in-astro@1.0.0`

**type:** `string`

A custom ID for the script tag.
