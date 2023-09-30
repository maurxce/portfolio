import type { ImageLink } from "src/common/interface";
// @TODO: add BitLib, BedrockManager?
// @TODO sort by tag?

const projects: ImageLink[] = [
  {
    name: "SpelerLevels",
    description: "A custom leveling system for Minecraft",
    image: import("@assets/projects/spelerlevels.png"),
    url: "/projects/SpelerLevels"
  },
  {
    name: "SpelerWarps",
    description: "A Player-managed warp plugin for Minecraft",
    image: import("@assets/projects/spelerwarps.png"),
    url: "/projects/SpelerWarps"
  },
  {
    name: "IdleWatch",
    description: "Busy? Watch others play in the meantime", // nice for afk streamers maybe
    image: import("@assets/projects/idlewatch.png"),
    url: "/projects/IdleWatch"
  },
  {
    name: "Boosters",
    description: "Boost xp gain and shop sell for everyone",
    image: import("@assets/projects/boosters.png"),
    url: "/projects/Boosters"
  },
  {
    name: "PaidPortals",
    description: "Unlock dimensions by donating to a money pool",
    image: import("@assets/projects/paidportals.png"),
    url: "/projects/PaidPortals"
  }
];

export default projects;