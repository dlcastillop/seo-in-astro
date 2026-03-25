---
title: SEO Check Tool
description: Learn how to audit your Next.js project
---

`seo-in-astro` includes a built-in tool to audit your project's SEO implementation.

## Setup

1. Add the following script to your `package.json`:

   ```json
   //package.json
   {
     "scripts": {
       "check-seo": "node --input-type=module -e \"import('seo-in-astro/tooling').then(m => m.checkSeo())\""
     }
   }
   ```

2. Run the check from your terminal:

   ```sh
   npm run check-seo
   ```

   ```sh
   yarn check-seo
   ```

   ```sh
   pnpm check-seo
   ```

   ## What it checks

The SEO check tool analyzes four areas of your project:

### 1. Page Metadata

Identifies the metadata status for each page in your application:

- **Pages without metadata**: Routes that are missing SEO metadata configuration
- **Pages with manual metadata**: Routes using frontmatter metadata directly in `.astro` files
- **Pages using SEO layouts**: Routes leveraging the library's layout components (`Layout`, `LayoutForArticle`, `LayoutForBreadcrumb`, `LayoutForSoftwareApp`, `LayoutForFaq`)

### 2. Robots Configuration

Verifies how your site handles robot crawling rules:

- **Static file**: Checks if `robots.txt` exists in the `public` folder
- **Plugin-based**: Identifies if the `seoInAstro` plugin is configured in `astro.config.*`

### 3. Sitemap Configuration

Examines your sitemap implementation:

- **Static file**: Checks if `sitemap.xml` exists in the `public` folder
- **Plugin-based**: Identifies if the `seoInAstro` plugin is configured in `astro.config.*`

### 4. Improvement Suggestions

Based on the analysis, the tool provides actionable recommendations to enhance your SEO setup, such as:

- Adding metadata to pages that are missing it
- Migrating from static files to the `seoInAstro` plugin for better flexibility
- Using SEO layouts from `seo-in-astro` for consistent metadata management
- Ensuring proper sitemap and robots configuration for better crawlability**Tip:** Run this check regularly during development and before deployment to ensure your SEO configuration
  is complete and up to date.