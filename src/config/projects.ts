import type { ImageLink } from "src/common/interface";

const projects: ImageLink[] = [
  {
    name: "SpelerLevels",
    //description: "A custom leveling system for Minecraft",
    image: import("../assets/projects/SpelerLevels.png"),
    url: "/projects/SpelerLevels",
  },
  {
    name: "SpelerWarps",
    //description: "A Player-managed warp plugin for Minecraft",
    image: import("../assets/368x207.svg"),
    url: "/projects/SpelerWarps",
  },
  {
    name: "PaidPortals",
    //description: "Unlock dimensions by donating to a money pool",
    image: import("../assets/368x207.svg"),
    url: "/projects/PaidPortals",
  },
  {
    name: "IdleWatch",
    //description: "Busy? Watch others play in the meantime",
    image: import("../assets/368x207.svg"),
    url: "/projects/IdleWatch",
  }
];

export default projects;