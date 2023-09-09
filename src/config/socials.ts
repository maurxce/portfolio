import type { ImageLink } from "src/common/interface";

const socials: ImageLink[] = [
  {
    name: "Email",
    image: import("../assets/socials/Email.png"),
    url: "/mail"
  },
  {
    name: "GitHub",
    image: import("../assets/socials/GitHub.png"),
    url: "/github"
  },
  {
    name: "Discord",
    image: import("../assets/socials/Discord.png"),
    url: "/discord"
  }
];

export default socials;