---
title: LayoutForFaq Reference
description: API Reference for the LayoutForFaq component.
lastUpdated: 2026-03-01
---

The `LayoutForFaq` component generates the metadata for a page, including the title, description, canonical URL,
Open Graph and Twitter metadata, and FAQ-specific JSON-LD structured data.

## Props

### `title` (required)

**type:** `string`

The title of the page.

### `description` (required)

**type:** `string`

The description of the page.

### `ogImg`

**type:** `string`

**default:** `defaultOgImg` (if specified)

The URL of the Open Graph image.

### `lang`

**type:** `string`

The language of the page (e.g., "es", "fr"). If not specified, it defaults to "en".

### `faqs` (required)

**type:** `Array<{ question: string; answer: string }>`

An array of FAQ items. Each item must have:

- **question** (`string`): The question text
- **answer** (`string`): The answer text

### `scriptId`

**type:** `string`

A custom ID for the script tag.
