import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/discord": "https://discordapp.com/users/398509167351955456/",
    "/github": "https://github.com/maurxce/",
    "/mail": "mailto:contact@schorn.md"
  }
});
