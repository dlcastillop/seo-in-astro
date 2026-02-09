---
title: LayoutForBreadcrumb Reference
description: API Reference for the LayoutForBreadcrumb component.
lastUpdated: 2026-01-30
---

The `LayoutForBreadcrumb` component generates the metadata for a page, including the title, description, canonical URL,
Open Graph and Twitter metadata, and Breadcrumb-specific JSON-LD structured data.

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

### `itemList` (required)

**type:** `Array<{ name: string; route: string }>`

An array of breadcrumb items representing the navigation hierarchy. Each item must have:

- **name** (`string`): The display name for the breadcrumb item
- **route** (`string`): The route path for the breadcrumb item (e.g., `/products`, `/blog/post-1`)

The items should be ordered from the highest level (typically "Home") to the current page.

### `scriptId`

**type:** `string`

A custom ID for the script tag.
