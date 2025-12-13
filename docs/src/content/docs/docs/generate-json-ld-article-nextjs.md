---
title: Generate JSON-LD structured data for an article page in Next.js
description: Use the JsonLdForArticle component to generate JSON-LD structured data for an article page in Next.js, including the headline, description, author information, and more.
lastUpdated: 2025-12-08
---

Use the `JsonLdForArticle` component to generate JSON-LD structured data for an article page in Next.js, including the headline, description, author information, and more.

## Requirements

Before using the file, make sure your project meets the following requirements:

- **Next.js 13.0.0 or higher**
- **Next.js App Router**

## Props

- `url` (`string`, **required**): The URL of the page
- `headline` (`string`, **required**): The headline of the article
- `description` (`string`, **required**): The description of the article
- `image` (`string`, **required**): The image associated with the article
- `datePublished` (`string`, **required**): The publication date of the article
- `dateModified` (`string`, **required**): The last modification date of the article
- `author` (`Object`, **required**): The author information of the article
- `author.name` (`string`, **required**): The name of the author of the article
- `author.url` (`string`, **required**): The URL of the author of the article

## Usage

### Add the file to your project

Copy the `JsonLdForArticle.tsx` or `JsonLdForArticle.jsx` file to your project.

### Import the `JsonLdForArticle` component

Import the `JsonLdForArticle` component into every page where you want to generate the JSON-LD structured data.

```tsx
//src/app/page.tsx
import { JsonLdForArticle } from "@/components/JsonLdForArticle";

export default function Page() {
  return (
    <JsonLdForArticle
      url="https://novajs.dev/getting-started"
      headline="Getting started with Nova.js"
      description="Learn how to add dependency-free React hooks to your project in 3 easy steps."
      image="https://novajs.dev/getting-started.png"
      datePublished="2024-01-06"
      dateModified="2025-01-06"
      author={{ name: "Daniel Castillo", url: "https://dlcastillop.com" }}
    />
  );
}
```
