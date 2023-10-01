import type { ImageLink } from "src/common/interface";
import type { ImageMetadata } from "astro";
// @TODO: add BitLib, BedrockManager?
// @TODO sort by tag?

const projects: ImageLink[] = [
  {
    name: "SpelerLevels",
    description: "A custom leveling system for Minecraft",
    // @ts-ignore
    image: import("@assets/projects/spelerlevels.png"), 
    url: "/projects/SpelerLevels"
  },
  {
    name: "SpelerWarps",
    description: "A Player-managed warp plugin for Minecraft",
    // @ts-ignore
    image: import("@assets/projects/spelerwarps.png"),
    url: "/projects/SpelerWarps"
  },
  {
    name: "IdleWatch",
    description: "Busy? Watch others play in the meantime", // nice for afk streamers maybe
    // @ts-ignore
    image: import("@assets/projects/idlewatch.png"),
    url: "/projects/IdleWatch"
  },
  {
    name: "Boosters",
    description: "Boost xp gain and shop sell for everyone",
    // @ts-ignore
    image: import("@assets/projects/boosters.png"),
    url: "/projects/Boosters"
  },
  {
    name: "PaidPortals",
    description: "Unlock dimensions by donating to a money pool",
    // @ts-ignore
    image: import("@assets/projects/paidportals.png"),
    url: "/projects/PaidPortals"
  }
];

export default projects;