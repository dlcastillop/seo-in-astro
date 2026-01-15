import type { AstroIntegration } from "astro";

export const seoInAstro = (): AstroIntegration => {
  return {
    name: "astro-format",
    hooks: {
      "astro:build:done": ({ logger }) => {
        // do something
        logger.info("SSSSSS");
      },
    },
  };
};
