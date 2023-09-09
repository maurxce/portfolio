import type { ImageLink } from "src/common/interface";

const technologies: ImageLink[] = [
  {
    name: "JavaScript",
    image: import("../assets/56x56.svg"),
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    name: "TypeScript",
    image: import("../assets/56x56.svg"),
    url: "https://www.typescriptlang.org/"
  },
  {
    name: "Java",
    image: import("../assets/56x56.svg"),
    url: "https://www.java.com/en/download/help/whatis_java.html"
  },
  {
    name: "Docker",
    image: import("../assets/56x56.svg"),
    url: "https://www.docker.com/"
  },
  {
    name: "MySQL",
    image: import("../assets/56x56.svg"),
    url: "https://www.mysql.com/"
  },
  {
    name: "Node.js",
    image: import("../assets/56x56.svg"),
    url: "https://nodejs.org/en"
  },
  {
    name: "Astro",
    image: import("../assets/56x56.svg"),
    url: "https://astro.build/"
  },
  {
    name: "Spigot",
    image: import("../assets/56x56.svg"),
    url: "https://www.spigotmc.org/wiki/about-spigot/"
  },
];

export default technologies;