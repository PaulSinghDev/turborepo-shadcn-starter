import sharedConfig from "@repo/ui/tailwind.config";
import { Config } from "tailwindcss";

const config: Pick<Config, "content" | "presets"> = {
  presets: [sharedConfig],
  content: [
    "./app/**/*.tsx",
    "../../packages/ui/src/**/*.tsx",
    "./components/**/*.tsx",
  ],
};

export default config;
