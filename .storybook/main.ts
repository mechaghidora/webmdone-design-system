import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.tsx"],
  staticDirs: ["../public"],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
};

export default config;
