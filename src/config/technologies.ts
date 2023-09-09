export interface Technology {
  name: string;
  icon: Promise<any>;
  url: string
}

const technologies: Technology[] = [
  {
    name: "JavaScript",
    icon: import("../assets/56x56.svg"),
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    name: "TypeScript",
    icon: import("../assets/56x56.svg"),
    url: "https://www.typescriptlang.org/"
  },
  {
    name: "Java",
    icon: import("../assets/56x56.svg"),
    url: "https://www.java.com/en/download/help/whatis_java.html"
  },
  {
    name: "Docker",
    icon: import("../assets/56x56.svg"),
    url: "https://www.docker.com/"
  },
  {
    name: "MySQL",
    icon: import("../assets/56x56.svg"),
    url: "https://www.mysql.com/"
  },
  {
    name: "Node.js",
    icon: import("../assets/56x56.svg"),
    url: "https://nodejs.org/en"
  },
  {
    name: "Astro",
    icon: import("../assets/56x56.svg"),
    url: "https://astro.build/"
  },
  {
    name: "Spigot",
    icon: import("../assets/56x56.svg"),
    url: "https://www.spigotmc.org/wiki/about-spigot/"
  },
];

export default technologies;