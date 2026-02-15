import path from "node:path";
import fs from "node:fs";

interface GenerateLlmsTxt {
  llmsTxt?: boolean;
  pages: { pathname: string }[];
  baseUrl: string;
  distPath: string;
  siteName: string;
}

export const generateLlmsTxt = ({
  llmsTxt,
  pages,
  baseUrl,
  distPath,
  siteName,
}: GenerateLlmsTxt) => {
  if (llmsTxt) {
    const pageFiles = pages.filter((page) => page.pathname !== "404/");
    const urls = pageFiles.map((file) => `- ${baseUrl}/${file.pathname}`);
    const llmsTxtPath = path.join(distPath, "llms.txt");

    let llmsTxtContent = `# ${siteName}\n\n`;
    llmsTxtContent += urls.join("\n");

    fs.writeFileSync(llmsTxtPath, llmsTxtContent, "utf-8");
  }
};
