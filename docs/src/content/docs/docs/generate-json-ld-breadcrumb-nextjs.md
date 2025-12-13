---
title: Generate JSON-LD structured data for a breadcrumb page in Next.js
description: Use the JsonLdForBreadcrumb component to generate JSON-LD structured data for a breadcrumb page in Next.js.
lastUpdated: 2025-12-08
---

Use the `JsonLdForBreadcrumb` component to generate JSON-LD structured data for a breadcrumb page in Next.js.

## Requirements

Before using the file, make sure your project meets the following requirements:

- **Next.js 13.0.0 or higher**
- **Next.js App Router**

## Props

- `itemList` (`Array<Object>`, **required**): The list of breadcrumb items
- `itemList[].name` (`string`, **required**): The name of the breadcrumb item
- `itemList[].item` (`string`, **required**): The URL of the breadcrumb item

## Usage

### Add the file to your project

Copy the `JsonLdForBreadcrumb.tsx` or `JsonLdForBreadcrumb.jsx` file to your project.

### Import the `JsonLdForBreadcrumb` component

Import the `JsonLdForBreadcrumb` component into every page where you want to generate the JSON-LD structured data.

```tsx
//src/app/page.tsx
import { JsonLdForBreadcrumb } from "@/components/JsonLdForBreadcrumb";

export default function Page() {
  return (
    <JsonLdForBreadcrumb
      itemList={[
        { name: "useArray", item: "https://novajs.dev/react-hook-array" },
        { name: "useAsync", item: "https://novajs.dev/react-hook-async" },
      ]}
    />
  );
}
```
