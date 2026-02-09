import { bold, green, yellow, red, underline } from "picocolors";

const BOLD_PROMPT = bold(">");

export const GREEN_PROMPT = green(BOLD_PROMPT);

export const YELLOW_PROMPT = yellow(BOLD_PROMPT);

export const RED_PROMPT = red(BOLD_PROMPT);

export const scriptHeader = (name: string) => {
  console.log(`${GREEN_PROMPT} Running ${underline(name)} powered by seo-in-astro\n`);
};
