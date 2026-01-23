import { defineConfig } from "tsdown";

export default defineConfig({
  exports: {
    customExports(exports) {
      exports["./*"] = "./src/components/*.astro";

      return exports;
    },
  },
  entry: ["./src/index.ts", "./src/internals/index.ts"],
});
