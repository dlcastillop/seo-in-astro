---
title: LayoutForFaq Reference
description: API Reference for the LayoutForFaq component.
---

The `LayoutForFaq` component generates the metadata for a page, including the title, description, canonical URL,
Open Graph and Twitter metadata, and FAQ-specific JSON-LD structured data.

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

### `faqs` (required)

**type:** `Array<{ question: string; answer: string }>`

**Added in:** `seo-in-astro@1.0.0`

An array of FAQ items. Each item must have:

- **question** (`string`): The question text
- **answer** (`string`): The answer text

### `scriptId`

**Added in:** `seo-in-astro@1.0.0`

**type:** `string`

A custom ID for the script tag.