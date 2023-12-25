// tailwind config is required for editor support
import sharedConfig from "@palettify/tailwind-config/tailwind.config.ts";
import type { Config } from "tailwindcss";

const config: Pick<Config, "prefix" | "presets"> = {
  prefix: "ui-",
  presets: [sharedConfig],
};

export default config;
