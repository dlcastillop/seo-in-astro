---
title: Generate JSON-LD structured data for a FAQ page in Astro
description: Use the LayoutForFaq component to generate the metadata and the JSON-LD structured data for a FAQ page in Astro.
lastUpdated: 2025-12-13
---

Use the `LayoutForFaq` component to generate the metadata and the JSON-LD structured data for a FAQ page in Astro.

## Props

- `title` (`string`, **required**): The title of the page
- `description` (`string`, **required**): The description of the page
- `pageRoute` (`string`, **required**): The URL route for the page
- `ogImg` (`string`): The URL of the Open Graph image
- `faqs` (`Array<Object>`, **required**): The list of FAQ entries
- `faqs[].question` (`string`, **required**): The question being answered
- `faqs[].answer` (`string`, **required**): The corresponding answer to the question

## Usage

### Add the file to your project

Copy the `LayoutForFaq.astro` file to your project's layouts folder.

### Edit the `siteConfig` object

Update the `siteConfig` object in the `LayoutForFaq.astro` file with your site's base URL, name and default URL of the Open Graph image.

```ts
//LayoutForFaq.astro
const siteConfig: SiteConfig = {
  baseUrl: "https://novajs.dev",
  siteName: "Nova.js",
  defaultOgImg: "/og-default.png",
};
```

### Import the `LayoutForFaq` component

Import the `LayoutForFaq` component into every article page where you want to generate metadata and the JSON-LD structured data.

```astro
//src/pages/index.astro
---
import LayoutForFaq from "../layouts/LayoutForFaq.astro";
---

<LayoutForFaq
  title="Nova.js - A collection of dependency-free React hooks"
  description="Carefully developed React hooks that you can copy and paste into your project."
  pageRoute="/"
  ogImg="/og-landing.png"
  faqs={[
    {
      question: "What is Nova.js?",
      answer: "Nova.js is a collection of dependency-free React hooks.",
    },
    {
      question: "Is Nova.js free?",
      answer: "Yes, it's completely free and open-source.",
    },
  ]}
>
  <h1>Nova.js</h1>
</LayoutForFaq>
```
