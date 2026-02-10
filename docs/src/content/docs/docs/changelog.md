---
title: Changelog
description: New features, bug fixes, and improvements made to SEO in Astro.
lastUpdated: 2026-02-10
---

New features, bug fixes, and improvements made to SEO in Astro.

## v1.0.0-beta.2

### Features

- Built-in tooling to audit and validate your SEO implementation, including metadata, robots.txt, and sitemap.xml
  generation
- Added `favicon` prop to `seoInAstro` integration for custom favicon configuration

## Bug Fixes

- Removed `jsonLd` prop from `LayoutForBreadcrumb` component

### Improvements

- Updated virtual module name to avoid duplicates

## v1.0.0-beta.1

### Features

- Added `Layout` component for metadata and any JSON-LD generation
- Added `LayoutForArticle`, `LayoutForArticle`, `LayoutForBreadcrumb`, `LayoutForFaq` and `LayoutForSoftwareApp`
  components for metadata and specific JSON-LD generation

### Improvements

- Validations on `seoInAstro` integration configuration

## v1.0.0-beta.0

### Features

- SEO in Astro is now a formal library instead of a collection of files
- New `seoInAstro` integration to consolidate all SEO configuration in a single location
- `robotsTxt` integration option to programmatically generate the `robots.txt` file for your project
- `sitemapXml` integration option to programmatically generate the `sitemap.xml` file for your project
- `llms.txt` integration option to generate `llms.txt` file for your project

## v0.1.0

### Add components

- `Layout`
- `LayoutForArticle`
- `LayoutForBreadcrumb`
- `LayoutForFaq`
- `LayoutForProduct`

### Add files

- `astro.config.mjs`
- `robots.txt.ts`
