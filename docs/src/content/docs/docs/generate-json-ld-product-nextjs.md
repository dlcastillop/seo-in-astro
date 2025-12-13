---
title: Generate JSON-LD structured data for a product page in Next.js
description: Use the JsonLdForProduct component to generate JSON-LD structured data for a product page in Next.js, including the name, description, and image.
lastUpdated: 2025-12-08
---

Use the `JsonLdForProduct` component to generate JSON-LD structured data for a product page in Next.js, including the name, description, and image.

## Requirements

Before using the file, make sure your project meets the following requirements:

- **Next.js 13.0.0 or higher**
- **Next.js App Router**

## Props

- `name` (`string`, **required**): The name of the product
- `description` (`string`, **required**): The description of the product
- `image` (`string`, **required**): The URL of an image representing the product

## Usage

### Add the file to your project

Copy the `JsonLdForProduct.tsx` or `JsonLdForProduct.jsx` file to your project.

### Import the `JsonLdForProduct` component

Import the `JsonLdForProduct` component into every page where you want to generate the JSON-LD structured data.

```tsx
//src/app/page.tsx
import { JsonLdForProduct } from "@/components/JsonLdForProduct";

export default function Page() {
  return (
    <JsonLdForProduct
      name="Nova.js"
      description="A modern collection of dependency-free React hooks."
      image="https://novajs.dev/logo.png"
    />
  );
}
```
