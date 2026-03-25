import { readdirSync, statSync, readFileSync, existsSync } from "fs";
import { join, relative } from "path";
import { GREEN_PROMPT, RED_PROMPT, YELLOW_PROMPT, scriptHeader } from "@/utils";
import { gray, bold, yellow, cyan } from "picocolors";

interface FileStatus {
  exists: boolean;
  location: string | null;
  type: "static" | "plugin" | null;
  usesPlugin: boolean;
  status: "plugin" | "missing" | "static";
}

interface Suggestion {
  title: string;
  description: string;
  action?: string;
}

interface CheckSeoFiles {
  baseDir?: string;
  file: "robots" | "sitemap";
}

const SEO_PACKAGE = "seo-in-astro";
const SEO_LAYOUTS = [
  "Layout",
  "LayoutForArticle",
  "LayoutForBreadcrumb",
  "LayoutForSoftwareApp",
  "LayoutForFaq",
];
const ACCEPTED_PAGE_FILES = [".astro"];
const CONFIG_FILES = ["astro.config.mjs", "astro.config.js", "astro.config.ts"];

const findFiles = (dir: string, fileList: string[] = []) => {
  const files = readdirSync(dir);

  files.forEach((file) => {
    const filePath = join(dir, file);
    const stat = statSync(filePath);

    if (stat.isDirectory()) {
      if (!file.startsWith(".") && file !== "node_modules") {
        findFiles(filePath, fileList);
      }
    } else if (ACCEPTED_PAGE_FILES.some((ext) => file.endsWith(ext))) {
      fileList.push(filePath);
    }
  });

  return fileList;
};

const checkFile = (filePath: string) => {
  const content = readFileSync(filePath, "utf-8");

  const usesSeoLayout = SEO_LAYOUTS.some((layout) => {
    const importRegex = new RegExp(
      `import\\s+${layout}\\s+from\\s+['"]${SEO_PACKAGE}/${layout}['"]`,
      "i",
    );
    return importRegex.test(content);
  });

  const frontMatterRegex = /^---\s*\n([\s\S]*?)\n---/;
  const frontMatterMatch = content.match(frontMatterRegex);
  let hasManualMetadata = false;

  if (frontMatterMatch) {
    const frontMatter = frontMatterMatch[1];
    hasManualMetadata =
      /title\s*:/i.test(frontMatter) ||
      /description\s*:/i.test(frontMatter) ||
      /image\s*:/i.test(frontMatter);
  }

  let status = "missing";

  if (usesSeoLayout) {
    status = "ok";
  } else if (hasManualMetadata) {
    status = "manual-seo";
  }

  return {
    file: relative(process.cwd(), filePath),
    usesSeoLayout,
    hasManualMetadata,
    status,
  };
};

const getAstroConfig = (baseDir?: string) => {
  const configData = CONFIG_FILES.map((file) => {
    return {
      configPath: join(process.cwd(), baseDir || "", file),
      configFileName: file,
    };
  });

  for (const _configData of configData) {
    if (existsSync(_configData.configPath)) {
      return _configData;
    }
  }

  console.log(`${RED_PROMPT} No config file found`);
  process.exit(1);
};

const checkAstroConfig = (configPath: string): boolean => {
  const content = readFileSync(configPath, "utf-8");
  const hasImport = new RegExp(`import\\s+.*seoInAstro.*from\\s+['"]${SEO_PACKAGE}['"]`, "i").test(
    content,
  );
  const usesPlugin = /seoInAstro\s*\(/i.test(content);

  return hasImport && usesPlugin;
};

const checkSeoFiles = ({
  baseDir = "",
  file,
}: CheckSeoFiles): { check: FileStatus; suggestions: Suggestion[] } => {
  let check: FileStatus;
  const isRobots = file === "robots";
  const publicFile = isRobots ? "robots.txt" : "sitemap.xml";
  const publicPath = join(process.cwd(), baseDir, "public", publicFile);
  const { configPath, configFileName } = getAstroConfig(baseDir);
  const usesPlugin = checkAstroConfig(configPath);
  const ACTION = `Add seoInAstro plugin to ${configFileName}`;
  const suggestions: Suggestion[] = [];

  if (existsSync(publicPath)) {
    check = {
      exists: true,
      location: isRobots ? "public/robots.txt" : "public/sitemap.xml",
      type: "static",
      usesPlugin: false,
      status: "static",
    };
  } else if (usesPlugin) {
    check = {
      exists: true,
      location: configFileName,
      type: "plugin",
      usesPlugin: true,
      status: "plugin",
    };
  } else {
    check = {
      exists: false,
      location: null,
      type: null,
      usesPlugin: false,
      status: "missing",
    };
  }

  console.log(`\n${GREEN_PROMPT} ${isRobots ? "robots.txt" : "sitemap.xml"}`);

  if (!check.exists) {
    console.log(`${RED_PROMPT} ${publicFile} not found`);
    suggestions.push({
      title: `Missing ${publicFile}`,
      description: `No ${publicFile} file detected in your project`,
      action: ACTION,
    });
  } else if (check.type === "static") {
    console.log(`${YELLOW_PROMPT} Static ${publicFile} found`);
    console.log(`  ${check.location}`);
    suggestions.push({
      title: `Static ${publicFile} detected`,
      description: `Consider migrating to plugin-based generation for better flexibility`,
      action: ACTION,
    });
  } else if (check.type === "plugin") {
    console.log(`${GREEN_PROMPT} Using seoInAstro plugin`);
    console.log(`  ${check.location}`);
  }

  return { check, suggestions };
};

const printSuggestions = (suggestions: Suggestion[]) => {
  if (suggestions.length === 0) return;

  console.log(`\n${bold(yellow("═══ Suggestions ═══"))}`);

  suggestions.forEach((suggestion) => {
    console.log(`\n${bold(suggestion.title)}`);
    console.log(`${gray(suggestion.description)}`);
    if (suggestion.action) {
      console.log(`${cyan("→")} ${suggestion.action}`);
    }
  });
};

export const checkSeo = async (baseDir?: string) => {
  scriptHeader("checkSeo");

  const suggestions: Suggestion[] = [];
  const pagesDir = join(process.cwd(), baseDir || "", "src/pages");

  if (!existsSync(pagesDir)) {
    console.log(`${RED_PROMPT} No pages directory found`);
    process.exit(1);
  }

  const allFiles = findFiles(pagesDir);
  const results = allFiles.map((file) => checkFile(file));

  const ok = results.filter((r) => r.status === "ok");
  const manualSeo = results.filter((r) => r.status === "manual-seo");
  const missing = results.filter((r) => r.status === "missing");

  console.log(`${GREEN_PROMPT} Pages`);
  console.log(`${GREEN_PROMPT} Using SEO layouts: ${gray(ok.length)}`);
  ok.forEach((r) => console.log(`  ${r.file}`));

  if (manualSeo.length > 0) {
    console.log(`${YELLOW_PROMPT} Using manual metadata: ${gray(manualSeo.length)}`);
    manualSeo.forEach((r) => console.log(`  ${r.file}`));

    suggestions.push({
      title: `${manualSeo.length} pages with manual metadata`,
      description: `These pages define metadata without using ${SEO_PACKAGE} layouts`,
      action: `Migrate to SEO layouts (Layout, LayoutForArticle, etc.) for consistent SEO management`,
    });
  }

  if (missing.length > 0) {
    console.log(`${RED_PROMPT} Without metadata: ${gray(missing.length)}`);
    missing.forEach((r) => console.log(`  ${r.file}`));

    suggestions.push({
      title: `${missing.length} pages missing metadata`,
      description: "These pages have no SEO metadata, which hurts SEO",
      action: `Add metadata using ${SEO_PACKAGE} layouts to improve search engine visibility`,
    });
  }

  const { check: robotsCheck, suggestions: robotsSuggestions } = checkSeoFiles({
    baseDir,
    file: "robots",
  });
  const { check: sitemapCheck, suggestions: sitemapSuggestions } = checkSeoFiles({
    baseDir,
    file: "sitemap",
  });
  suggestions.push(...robotsSuggestions, ...sitemapSuggestions);

  const hasIssues =
    missing.length > 0 ||
    manualSeo.length > 0 ||
    !robotsCheck.exists ||
    robotsCheck.status === "static" ||
    !sitemapCheck.exists ||
    sitemapCheck.status === "static";

  if (hasIssues) {
    printSuggestions(suggestions);
  } else {
    console.log(`\n${GREEN_PROMPT} All good!`);
  }

  return suggestions;
};
