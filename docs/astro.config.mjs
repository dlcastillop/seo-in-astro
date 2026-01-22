// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import starlightPageActions from "starlight-page-actions";
import starlightUiTweaks from "starlight-ui-tweaks";
import starlightSidebarTopics from "starlight-sidebar-topics";

// https://astro.build/config
export default defineConfig({
  site: "https://seo-in-astro.dlcastillop.com/",
  integrations: [
    starlight({
      title: "SEO in Astro",
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
          href: "https://github.com/dlcastillop",
          label: "Github account",
        },
        {
          icon: "linkedin",
          href: "https://linkedin.com/dlcastillop",
          label: "LinkedIn account",
        },
        {
          icon: "threads",
          href: "https://threads.com/@dlcastillop",
          label: "Threads account",
        },
        {
          icon: "patreon",
          href: "https://patreon.com/dlcastillop",
          label: "Patreon account",
        },
      ],
      customCss: ["./src/styles/global.css"],
      plugins: [
        starlightPageActions({
          baseUrl: "https://seo-in-astro.dlcastillop.com/",
        }),
        starlightUiTweaks({
          navbarLinks: [
            {
              label: "Pricing",
              href: "/#pricing",
            },
          ],
          footer: {
            showSocialIcons: true,
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
                  label: "SEO for the site",
                  href: "/docs/generate-sitemap-astro",
                },
                {
                  label: "SEO for the page",
                  href: "/docs/generate-metadata-astro",
                },
              ],
            },
            thirdColumn: {
              title: "Support",
              links: [
                {
                  label: "Issues",
                  href: "https://github.com/dlcastillop/shop-support/issues/new?template=bug_report.md",
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
        starlightSidebarTopics([
          {
            label: "Start",
            link: "docs/introduction",
            icon: "rocket",
            items: [
              {
                label: "Overview",
                items: [
                  { label: "Introduction", slug: "docs/introduction" },
                  { label: "Changelog", slug: "docs/changelog" },
                ],
              },
            ],
          },
          {
            label: "Utilities",
            link: "docs/generate-sitemap-astro",
            icon: "open-book",
            items: [
              {
                label: "SEO for the site",
                items: [
                  {
                    label: "Generate the sitemap.xml file",
                    slug: "docs/generate-sitemap-astro",
                  },
                  {
                    label: "Generate the robots.txt file",
                    slug: "docs/generate-robots-astro",
                  },
                ],
              },
              {
                label: "SEO for the page",
                items: [
                  {
                    label: "Generate the metadata",
                    slug: "docs/generate-metadata-astro",
                  },
                  {
                    label: "Generate JSON-LD for an article page",
                    slug: "docs/generate-json-ld-article-astro",
                  },
                  {
                    label: "Generate JSON-LD for an breadcrumb page",
                    slug: "docs/generate-json-ld-breadcrumb-astro",
                  },
                  {
                    label: "Generate JSON-LD for a FAQ page",
                    slug: "docs/generate-json-ld-faq-astro",
                  },
                  {
                    label: "Generate JSON-LD for a product page",
                    slug: "docs/generate-json-ld-product-astro",
                  },
                ],
              },
            ],
          },
          {
            label: "Astro Integration (Beta)",
            link: "docs/beta/getting-started",
            icon: "puzzle",
            items: [
              {
                label: "Overview",
                items: [
                  {
                    label: "Getting Started",
                    slug: "docs/beta/getting-started",
                  },
                ],
              },
              {
                label: "Guides",
                items: [
                  {
                    label: "Generate the sitemap.xml file",
                    slug: "docs/beta/guides/generate-sitemap",
                  },
                  {
                    label: "Generate the robots.txt file",
                    slug: "docs/beta/guides/generate-robots",
                  },
                  {
                    label: "Generate the llms.txt file",
                    slug: "docs/beta/guides/generate-llms-txt",
                  },
                ],
              },
            ],
          },
        ]),
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
