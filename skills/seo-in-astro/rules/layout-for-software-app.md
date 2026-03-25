---
title: LayoutForSoftwareApp Reference
description: API Reference for the LayoutForSoftwareApp component.
---

The `LayoutForSoftwareApp` component generates the metadata for a page, including the title, description, canonical URL,
Open Graph and Twitter metadata, and Software Application JSON-LD structured data.

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

### `softwareName` (required)

**type:** `string`

**Added in:** `seo-in-astro@1.0.0`

The name of the software application.

### `operatingSystem` (required)

**type:** `string`

**Added in:** `seo-in-astro@1.0.0`

The operating system(s) the application runs on (e.g., `"Windows, macOS, Linux"`, `"iOS, Android"`).

### `category` (required)

**type:** `ApplicationCategory`

**Added in:** `seo-in-astro@1.0.0`

The category of the application. Valid values are:

- `"GameApplication"`
- `"SocialNetworkingApplication"`
- `"TravelApplication"`
- `"ShoppingApplication"`
- `"SportsApplication"`
- `"LifestyleApplication"`
- `"BusinessApplication"`
- `"DesignApplication"`
- `"DeveloperApplication"`
- `"DriverApplication"`
- `"EducationalApplication"`
- `"HealthApplication"`
- `"FinanceApplication"`
- `"SecurityApplication"`
- `"BrowserApplication"`
- `"CommunicationApplication"`
- `"DesktopEnhancementApplication"`
- `"EntertainmentApplication"`
- `"MultimediaApplication"`
- `"HomeApplication"`
- `"UtilitiesApplication"`
- `"ReferenceApplication"`

### `offer` (required)

**type:** `{ price: number; currency: string }`

**Added in:** `seo-in-astro@1.0.0`

The pricing information for the application:

- **price** (`number`): The price of the application (use `0` for free apps)
- **currency** (`string`): The currency code (e.g., `"USD"`, `"EUR"`, `"GBP"`)

### `rating` (required)

**type:** `{ value: number; count: number }`

**Added in:** `seo-in-astro@1.0.0`

The aggregate rating information:

- **value** (`number`): The average rating value (typically 0-5)
- **count** (`number`): The total number of ratings

### `softwareDescription`

**type:** `string`

**Added in:** `seo-in-astro@1.0.0`

A description of the software application.

### `scriptId`

**type:** `string`

**Added in:** `seo-in-astro@1.0.0`

A custom ID for the script tag.