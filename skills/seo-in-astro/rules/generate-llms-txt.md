---
title: Generate the llms.txt file for a site
description: Learn how to generate the llms.txt file for a site with seo-in-astro.
---

`seo-in-astro` can generate the `llms.txt` file for your Astro site with automatic route detection.

## Enabling llms.txt generation

1. Set to `true` the `llmsTxt` option in the integration configuration.

   ```js
   // astro.config.mjs
   import { defineConfig } from "astro/config";
   import { seoInAstro } from "seo-in-astro";

   export default defineConfig({
     integrations: [
       seoInAstro({
         baseUrl: "https://example.com",
         siteName: "Example",
         defaultOgImg: "/default-og.png",
         llmsTxt: true,
       }),
     ],
   });
   ```

2. Run a build for your Astro project.

   ```sh
   npm run build
   ```

   ```sh
   yarn build
   ```

   ```sh
   pnpm build
   ```

3. Start the preview server.

   ```sh
   npm run preview
   ```

   ```sh
   yarn preview
   ```

   ```sh
   pnpm preview
   ```

4. Open http://localhost:4321/llms.txt in your browser to see the generated file.