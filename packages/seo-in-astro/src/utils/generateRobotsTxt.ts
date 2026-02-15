import path from "node:path";
import fs from "node:fs";

interface GenerateRobotsTxt {
  robotsTxt?: {
    rules?:
      | {
          userAgent?: string | string[] | undefined;
          allow?: string | string[] | undefined;
          disallow?: string | string[] | undefined;
          crawlDelay?: number | undefined;
        }
      | {
          userAgent: string | string[];
          allow?: string | string[] | undefined;
          disallow?: string | string[] | undefined;
          crawlDelay?: number | undefined;
        }[];
    sitemap?: string | string[];
    host?: string;
  };
  baseUrl: string;
  distPath: string;
}

export const generateRobotsTxt = ({ baseUrl, distPath, robotsTxt }: GenerateRobotsTxt) => {
  const robotsTxtPath = path.join(distPath, "robots.txt");

  let robotsContent = "";

  if (robotsTxt) {
    // Custom robots configuration
    const rulesArray = Array.isArray(robotsTxt.rules) ? robotsTxt.rules : [robotsTxt.rules];

    for (const rule of rulesArray) {
      if (rule) {
        const agents = rule.userAgent
          ? Array.isArray(rule.userAgent)
            ? rule.userAgent
            : [rule.userAgent]
          : ["*"];

        for (const agent of agents) {
          robotsContent += `User-Agent: ${agent}\n`;

          // Allow
          if (rule.allow) {
            const allows = Array.isArray(rule.allow) ? rule.allow : [rule.allow];
            for (const allow of allows) {
              robotsContent += `Allow: ${allow}\n`;
            }
          }

          // Disallow
          if (rule.disallow) {
            const disallows = Array.isArray(rule.disallow) ? rule.disallow : [rule.disallow];
            for (const disallow of disallows) {
              robotsContent += `Disallow: ${disallow}\n`;
            }
          }

          // Crawl-delay
          if (rule.crawlDelay !== undefined) {
            robotsContent += `Crawl-delay: ${rule.crawlDelay}\n`;
          }

          robotsContent += "\n";
        }
      }
    }

    // Host
    if (robotsTxt.host) {
      robotsContent += `Host: ${robotsTxt.host}\n`;
    }

    // Sitemap
    if (robotsTxt.sitemap) {
      const sitemaps = Array.isArray(robotsTxt.sitemap) ? robotsTxt.sitemap : [robotsTxt.sitemap];
      for (const sitemap of sitemaps) {
        robotsContent += `Sitemap: ${sitemap}\n`;
      }
    }
  } else {
    // Default robots.txt
    robotsContent = `User-Agent: *\nAllow: /\n\nSitemap: ${baseUrl}/sitemap-index.xml`;
  }

  fs.writeFileSync(robotsTxtPath, robotsContent.trim(), "utf-8");
};
