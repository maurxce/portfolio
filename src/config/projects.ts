export interface Project {
  title: string;
  description?: string; // TODO: implement Title + description in Thumbnail? Or just regular thumbnail tbh
  thumbnail: Promise<any>
  path: string;
}

const projects: Project[] = [
  {
    title: "SpelerLevels",
    description: "A custom leveling system for Minecraft",
    thumbnail: import("../assets/projects/SpelerLevels.png"),
    path: "/projects/SpelerLevels",
  },
  {
    title: "SpelerWarps",
    description: "A Player-managed warp plugin for Minecraft",
    thumbnail: import("../assets/368x207.svg"),
    path: "/projects/SpelerWarps",
  },
  {
    title: "PaidPortals",
    description: "Unlock dimensions by donating to a money pool",
    thumbnail: import("../assets/368x207.svg"),
    path: "/projects/PaidPortals",
  },
  {
    title: "IdleWatch",
    description: "Busy? Watch others play in the meantime",
    thumbnail: import("../assets/368x207.svg"),
    path: "/projects/IdleWatch",
  }
];

export default projects;