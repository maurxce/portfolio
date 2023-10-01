import type { ImageLink } from "@common/interface";
// @TODO: add BitLib, BedrockManager?
// @TODO sort by tag?
// @TODO url necessary? image?

const projects: ImageLink[] = [
  {
    name: "BitLib",
    description: "My own Spgiot library",
    // @ts-ignore
    image: import("@assets/projects/bitlib.png"),
    url: "/projects/bitlib"
  },
  {
    name: "SpelerLevels",
    description: "A custom leveling system for Minecraft",
    // @ts-ignore
    image: import("@assets/projects/spelerlevels.png"), 
    url: "/projects/spelerlevels"
  },
  {
    name: "SpelerWarps",
    description: "A Player-managed warp plugin for Minecraft",
    // @ts-ignore
    image: import("@assets/projects/spelerwarps.png"),
    url: "/projects/spelerwarps"
  },
  {
    name: "IdleWatch",
    description: "Busy? Watch others play in the meantime", // nice for afk streamers maybe
    // @ts-ignore
    image: import("@assets/projects/idlewatch.png"),
    url: "/projects/idlewatch"
  },
  {
    name: "Boosters",
    description: "Boost xp gain and shop sell for everyone",
    // @ts-ignore
    image: import("@assets/projects/boosters.png"),
    url: "/projects/boosters"
  },
  {
    name: "PaidPortals",
    description: "Unlock dimensions by donating to a money pool",
    // @ts-ignore
    image: import("@assets/projects/paidportals.png"),
    url: "/projects/paidportals"
  }
];

export default projects;