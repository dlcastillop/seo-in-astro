---
title: Getting Started
description: Learn how to get started with seo-in-astro.
---

Learn how to get started with `seo-in-astro`.

## Prerequisites

You will need to have an Astro website set up. If you don't have one yet, you can follow the ["Install Astro"](https://docs.astro.build/en/install-and-setup/) guide in the Astro docs to create one.

Additionally, your Astro website must meet the following requirements:

- **Astro 4.14.0 or higher**

## Installation

1. Install it by running the following command in your terminal:

   ```sh
   npm install seo-in-astro
   ```

   ```sh
   yarn add seo-in-astro
   ```

   ```sh
   pnpm add seo-in-astro
   ```

2. Configure the integration in your Astro configuration in the `astro.config.mjs` file.

   ```diff lang="js"
   // astro.config.mjs
   import { defineConfig } from 'astro/config'
   +import { seoInAstro } from "seo-in-astro";

    export default defineConfig({
      integrations: [
   +     seoInAstro({
   +       baseUrl: "https://example.com",
   +       siteName: "Example",
   +     }),
      ],
    });
   ```

3. You're all set! Start using the integration in your Astro project.