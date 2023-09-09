export interface Technology {
  name: string;
  icon: string;
  url: string
}

const technologies: Technology[] = [
  {
    name: "JavaScript",
    icon: "https://placehold.co/56x56",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    name: "TypeScript",
    icon: "https://placehold.co/56x56",
    url: "https://www.typescriptlang.org/"
  },
  {
    name: "Java",
    icon: "https://placehold.co/56x56",
    url: "https://www.java.com/en/download/help/whatis_java.html"
  },
  {
    name: "Docker",
    icon: "https://placehold.co/56x56",
    url: "https://www.docker.com/"
  },
  {
    name: "MySQL",
    icon: "https://placehold.co/56x56",
    url: "https://www.mysql.com/"
  },
  {
    name: "Node.js",
    icon: "https://placehold.co/56x56",
    url: "https://nodejs.org/en"
  },
  {
    name: "Astro",
    icon: "https://placehold.co/56x56",
    url: "https://astro.build/"
  },
  {
    name: "Spigot",
    icon: "https://placehold.co/56x56",
    url: "https://www.spigotmc.org/wiki/about-spigot/"
  },
];

export default technologies;