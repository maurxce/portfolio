export interface Project {
  title: string;
  description?: string; // TODO: implement Title + description in Thumbnail? Or just regular thumbnail tbh
  thumbnail: string;
  path: string;
}

const projects: Project[] = [
  {
    title: "SpelerLevels",
    description: "A custom leveling system for Minecraft",
    thumbnail: "/img/SpelerLevels.png",
    path: "/projects/SpelerLevels",
  },
  {
    title: "SpelerWarps",
    description: "A Player-managed warp plugin for Minecraft",
    thumbnail: "https://placehold.co/368x207",
    path: "/projects/SpelerWarps",
  },
  {
    title: "PaidPortals",
    description: "Unlock dimensions by donating to a money pool",
    thumbnail: "https://placehold.co/368x207",
    path: "/projects/PaidPortals",
  },
  {
    title: "IdleWatch",
    description: "Busy? Watch others play in the meantime",
    thumbnail: "https://placehold.co/368x207",
    path: "/projects/IdleWatch",
  }
];

export default projects;