import type { ImageLink } from "src/common/interface";

const socials: ImageLink[] = [
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