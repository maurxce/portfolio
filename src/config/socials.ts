export interface Social {
  name: string;
  image: Promise<any>;
  url: string;
}

const socials: Social[] = [
  {
    name: "Email",
    image: import("../assets/32x32.svg"),
    url: "/mail"
  },
  {
    name: "GitHub",
    image: import("../assets/32x32.svg"),
    url: "/github"
  },
  {
    name: "Discord",
    image: import("../assets/32x32.svg"),
    url: "/discord"
  }
];

export default socials;