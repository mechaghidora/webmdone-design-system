import fs from "node:fs";
import path from "node:path";

import { defineConfig } from "tsup";

const componentsDir = path.join(__dirname, "src/components");
const componentNames = fs.readdirSync(componentsDir).filter((name) => {
  if (name === "mui-demos") return false;
  return fs.statSync(path.join(componentsDir, name)).isDirectory();
});

const entry: Record<string, string> = {
  index: "src/components/index.ts",
  "styles/index": "styles/index.ts",
};

for (const name of componentNames) {
  entry[`components/${name}/index`] = `src/components/${name}/index.ts`;
}

export default defineConfig({
  entry,
  format: ["esm"],
  dts: {
    resolve: true,
  },
  tsconfig: "tsconfig.build.json",
  sourcemap: true,
  clean: true,
  splitting: false,
  treeshake: true,
  outDir: "dist",
  external: [
    "react",
    "react-dom",
    "react/jsx-runtime",
    "next",
    "next/link",
    "@mui/material",
    "@mui/icons-material",
    "@emotion/react",
    "@emotion/styled",
  ],
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
});
