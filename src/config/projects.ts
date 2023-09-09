export interface Project {
  title: string;
  description?: string; // @Deprecated
  image: Promise<any>
  url: string;
}

const projects: Project[] = [
  {
    title: "SpelerLevels",
    description: "A custom leveling system for Minecraft",
    image: import("../assets/projects/SpelerLevels.png"),
    url: "/projects/SpelerLevels",
  },
  {
    title: "SpelerWarps",
    description: "A Player-managed warp plugin for Minecraft",
    image: import("../assets/368x207.svg"),
    url: "/projects/SpelerWarps",
  },
  {
    title: "PaidPortals",
    description: "Unlock dimensions by donating to a money pool",
    image: import("../assets/368x207.svg"),
    url: "/projects/PaidPortals",
  },
  {
    title: "IdleWatch",
    description: "Busy? Watch others play in the meantime",
    image: import("../assets/368x207.svg"),
    url: "/projects/IdleWatch",
  }
];

export default projects;