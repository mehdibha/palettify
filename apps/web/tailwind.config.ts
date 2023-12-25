// tailwind config is required for editor support
import sharedConfig from "@palettify/tailwind-config/tailwind.config.ts";
import type { Config } from "tailwindcss";

const config: Pick<Config, "presets"> = {
  presets: [
    {
      ...sharedConfig,
      content: [
        "./**/*.{js,ts,jsx,tsx}",
        "../../packages/ui/src/**/*{.js,.ts,.jsx,.tsx}",
      ],
    },
  ],
};

export default config;
