import type { ImageLink } from "src/common/interface";

const technologies: ImageLink[] = [
  {
    name: "JavaScript",
    image: import("../assets/technologies/JavaScript.png"),
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    name: "TypeScript",
    image: import("../assets/technologies/TypeScript.png"),
    url: "https://www.typescriptlang.org/"
  },
  {
    name: "Java",
    image: import("../assets/technologies/Java.png"),
    url: "https://www.java.com/en/download/help/whatis_java.html"
  },
  {
    name: "Docker",
    image: import("../assets/technologies/Docker.png"),
    url: "https://www.docker.com/"
  },
  {
    name: "MySQL",
    image: import("../assets/technologies/MySQL.png"),
    url: "https://www.mysql.com/"
  },
  {
    name: "Node.js",
    image: import("../assets/technologies/NodeJS.png"),
    url: "https://nodejs.org/en"
  },
  {
    name: "Astro",
    image: import("../assets/technologies/Astro.png"),
    url: "https://astro.build/"
  },
  {
    name: "Spigot",
    image: import("../assets/technologies/Spigot.png"),
    url: "https://www.spigotmc.org/wiki/about-spigot/"
  },
];

export default technologies;