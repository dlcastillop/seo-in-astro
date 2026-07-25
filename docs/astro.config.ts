import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import starlightPageActions from "starlight-page-actions";
import starlightUiTweaks from "starlight-ui-tweaks";
import { seoInAstro } from "seo-in-astro";

const BASE_URL = "https://seo-in-astro.dlcastillop.com";
const SITE_NAME = "SEO in Astro";

export default defineConfig({
  site: BASE_URL,
  integrations: [
    seoInAstro({
      baseUrl: BASE_URL,
      siteName: SITE_NAME,
      defaultOgImg: "/og-image.png",
    }),
    starlight({
      title: SITE_NAME,
      logo: {
        src: "./src/assets/logo.svg",
        alt: "SEO in Astro Logo",
        replacesTitle: true,
      },
      social: [
        {
          icon: "email",
          href: "mailto:daniel@dlcastillop.com",
          label: "Email",
        },
        {
          icon: "github",
          href: "https://github.com/dlcastillop/seo-in-astro",
          label: "Github repo",
        },
        {
          icon: "linkedin",
          href: "https://linkedin.com/in/dlcastillop",
          label: "LinkedIn account",
        },
        {
          icon: "threads",
          href: "https://threads.com/@dlcastillop",
          label: "Threads account",
        },
      ],
      customCss: ["./src/styles/global.css"],
      sidebar: [
        {
          label: "Overview",
          items: [
            { label: "Introduction", slug: "docs/introduction" },
            {
              label: "Getting Started",
              slug: "docs/getting-started",
            },
            { label: "Changelog", slug: "docs/changelog" },
          ],
        },
        {
          label: "Guides",
          items: [
            {
              label: "Generate the metadata",
              slug: "docs/guides/generate-metadata",
            },
            {
              label: "Generate the sitemap.xml file",
              slug: "docs/guides/generate-sitemap",
            },
            {
              label: "Generate the robots.txt file",
              slug: "docs/guides/generate-robots",
            },
            {
              label: "Generate the llms.txt file",
              slug: "docs/guides/generate-llms-txt",
            },
            {
              label: "Add JSON-LD structured data",
              slug: "docs/guides/add-json-ld-structured-data",
            },
            {
              label: "Add Article JSON-LD structured data",
              slug: "docs/guides/add-article-json-ld-structured-data",
            },
            {
              label: "Add Breadcrumb JSON-LD structured data",
              slug: "docs/guides/add-breadcrumb-json-ld-structured-data",
            },
            {
              label: "Add FAQ JSON-LD structured data",
              slug: "docs/guides/add-faq-json-ld-structured-data",
            },
            {
              label: "Add Software Application JSON-LD structured data",
              slug: "docs/guides/add-software-app-json-ld-structured-data",
            },
          ],
        },
        {
          label: "Tooling",
          items: [
            {
              label: "SEO Check Tool",
              slug: "docs/tooling/seo-check",
            },
          ],
        },
        {
          label: "AI",
          items: [
            {
              label: "Agent Skills",
              slug: "docs/ai/agent-skills",
            },
          ],
        },
        {
          label: "Reference",
          items: [
            {
              label: "Configuration Reference",
              slug: "docs/reference/configuration",
            },
            {
              label: "Types Reference",
              slug: "docs/reference/types",
            },
            {
              label: "Layout Reference",
              slug: "docs/reference/layout",
            },
            {
              label: "LayoutForArticle Reference",
              slug: "docs/reference/layout-for-article",
            },
            {
              label: "LayoutForBreadcrumb Reference",
              slug: "docs/reference/layout-for-breadcrumb",
            },
            {
              label: "LayoutForFaq Reference",
              slug: "docs/reference/layout-for-faq",
            },
            {
              label: "LayoutForSoftwareApp Reference",
              slug: "docs/reference/layout-for-software-app",
            },
          ],
        },
      ],
      plugins: [
        starlightPageActions({
          baseUrl: BASE_URL,
          share: true,
        }),
        starlightUiTweaks({
          footer: {
            copyright: "Daniel Castillo. All rights reserved.",
            firstColumn: {
              title: "Developer Tools",
              links: [
                {
                  label: "SEO in Next.js",
                  href: "https://seo-in-nextjs.dlcastillop.com/",
                },
                {
                  label: "Nova.js",
                  href: "https://novajs.dev/",
                },
                {
                  label: "Skillit",
                  href: "https://skillit.dlcastillop.com/",
                },
                {
                  label: "Starlight Page Actions",
                  href: "https://starlight-page-actions.dlcastillop.com/",
                },
                {
                  label: "Starlight UI Tweaks",
                  href: "https://starlight-ui-tweaks.dlcastillop.com/",
                },
              ],
            },
            secondColumn: {
              title: "Resources",
              links: [
                {
                  label: "Guides",
                  href: "/docs/guides/generate-metadata",
                },
                {
                  label: "Tooling",
                  href: "/docs/tooling/seo-check/",
                },
                {
                  label: "AI",
                  href: "/docs/ai/agent-skills/",
                },
                {
                  label: "Reference",
                  href: "/docs/reference/configuration",
                },
              ],
            },
            thirdColumn: {
              title: "Support",
              links: [
                {
                  label: "Issues",
                  href: "https://github.com/dlcastillop/seo-in-astro/issues",
                },
                {
                  label: "Discussions",
                  href: "https://github.com/dlcastillop/seo-in-astro/discussions",
                },
              ],
            },
            fourthColumn: {
              title: "More",
              links: [
                {
                  label: "Contact",
                  href: "mailto:daniel@dlcastillop.com",
                },
                {
                  label: "Changelog",
                  href: "/docs/changelog",
                },
              ],
            },
          },
        }),
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
