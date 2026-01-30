---
title: Layout Reference
description: API Reference for the Layout component.
lastUpdated: 2026-01-30
---

The `Layout` component generates the metadata for a page, including the title, description, canonical URL, and
Open Graph and Twitter metadata.

## Props

### `title` (required)

**type:** `string`

The title of the page.

### `description` (required)

**type:** `string`

The description of the page.

### `ogImg`

**type:** `string`

The URL of the Open Graph image. If not specified, defaults to the Open Graph defined in `seoInAstro` integration.

### `lang`

**type:** `string`

The language of the page (e.g., "es", "fr"). If not specified, defaults to "en".

### `jsonLd`

**type:** `any`

The JSON-LD structured data object to be rendered. This should be a valid JSON-LD object following the schema.org
specification.

### `scriptId`

**type:** `string`

A custom ID for the script tag.