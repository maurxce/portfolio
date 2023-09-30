import type { ImageLink } from "src/common/interface";
// @TODO: add BitLib, BedrockManager?
// @TODO sort by tag?

const projects: ImageLink[] = [
  {
    name: "SpelerLevels",
    description: "A custom leveling system for Minecraft",
    image: import("@assets/projects/SpelerLevels.png"),
    url: "/projects/SpelerLevels"
  },
  {
    name: "SpelerWarps",
    description: "A Player-managed warp plugin for Minecraft",
    image: import("../assets/368x207.svg"),
    url: "/projects/SpelerWarps"
  },
  {
    name: "IdleWatch",
    description: "Busy? Watch others play in the meantime", // nice for afk streamers maybe
    image: import("../assets/368x207.svg"),
    url: "/projects/IdleWatch"
  },
  {
    name: "Boosters",
    description: "Boost xp gain and shop sell for everyone",
    image: import("../assets/368x207.svg"),
    url: "/projects/Boosters"
  },
  {
    name: "PaidPortals",
    description: "Unlock dimensions by donating to a money pool",
    image: import("../assets/368x207.svg"),
    url: "/projects/PaidPortals"
  }
];

export default projects;