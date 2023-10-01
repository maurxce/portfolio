import type { Icon } from "@common/interface";

const socials: Icon[] = [
  {
    name: "Discord",
    // @ts-ignore
    image: import("../assets/socials/discord.png"),
    url: "/discord"
  },
  {
    name: "GitHub",
    // @ts-ignore
    image: import("../assets/socials/github.png"),
    url: "/github"
  },
  {
    name: "Email",
    // @ts-ignore
    image: import("../assets/socials/email.png"),
    url: "/mail"
  }
];

export default socials;