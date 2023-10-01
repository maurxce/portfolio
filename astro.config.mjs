import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";

import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  site: "https://schorn.md",
  redirects: {
    "/discord": "https://discordapp.com/users/398509167351955456/",
    "/github": "https://github.com/maurxce/",
    "/mail": "mailto:contact@schorn.md"
  },
  integrations: [
    robotsTxt({
      sitemap: false,
      host: "schorn.md"
    }),
    purgecss()
  ]
});