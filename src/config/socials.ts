export interface Social {
  name: string;
  icon: Promise<any>;
  url: string;
}

const socials: Social[] = [
  {
    name: "Email",
    icon: import("../assets/32x32.svg"),
    url: "/mail"
  },
  {
    name: "GitHub",
    icon: import("../assets/32x32.svg"),
    url: "/github"
  },
  {
    name: "Discord",
    icon: import("../assets/32x32.svg"),
    url: "/discord"
  }
];

export default socials;