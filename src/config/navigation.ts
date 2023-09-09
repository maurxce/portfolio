interface NavItem {
  name: string;
  path: string;
}

const items: NavItem[] = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Projects",
    path: "/#projects"
  },
  {
    name: "Technologies",
    path: "/#technologies"
  },
  {
    name: "Socials",
    path: "/#socials"
  }
];

export default items;