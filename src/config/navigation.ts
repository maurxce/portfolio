interface NavItem {
  name: string;
  url: string;
}

const items: NavItem[] = [
  {
    name: "Home",
    url: "/"
  },
  {
    name: "Projects",
    url: "/#projects"
  },
  {
    name: "Technologies",
    url: "/#technologies"
  },
  {
    name: "Socials",
    url: "/#socials"
  }
];

export default items;