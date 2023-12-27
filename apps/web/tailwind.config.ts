// tailwind config is required for editor support
import type { Config } from "tailwindcss";
import sharedConfig from "@palettify/tailwind-config/tailwind.config.ts";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./**/*.{js,ts,jsx,tsx}", "../../packages/ui/src/**/*{.js,.ts,.jsx,.tsx}"],
  presets: [sharedConfig],
};

export default config;
