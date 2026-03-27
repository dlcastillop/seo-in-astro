---
title: Add Breadcrumb JSON-LD structured data to a page
description: Learn how to add Breadcrumb JSON-LD structured data to a page using the LayoutForBreadcrumb component from seo-in-astro.
---

`seo-in-astro` provides the `LayoutForBreadcrumb` component to easily add Breadcrumb JSON-LD structured data to a page.

## Using the LayoutForBreadcrumb component

1. Import the `LayoutForBreadcrumb` component into every page where you want to generate the JSON-LD data.

   ```astro
   // app/products/electronics/laptops.astro
   ---
   import LayoutForBreadcrumb from "seo-in-astro/LayoutForBreadcrumb";
   ---

   <LayoutForBreadcrumb
     title="Laptops"
     description="All our laptops."
     ogImg="/og-laptops.png"
     itemList={[
       { name: "Home", route: "/" },
       { name: "Products", route: "/products" },
       { name: "Electronics", route: "/products/electronics" },
       { name: "Laptops", route: "/products/electronics/laptops" },
     ]}
     scriptId="breadcrumb-json-ld"
   >
     <main>
       <h1>Laptops</h1>
     </main>
   </LayoutForBreadcrumb>
   ```**Note:** The component automatically converts relative routes to absolute URLs using the `baseUrl` from
     your `seoInAstro` integration configuration.

2. Check the generated JSON-LD by inspecting the head element of your page.

## Related

View related API references.

[LayoutForBreadcrumb](layout-for-breadcrumb.md)