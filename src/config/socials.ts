export interface Social {
  name: string;
  icon: string;
  url: string;
}

const socials: Social[] = [
  {
    name: "GitHub",
    icon: "https://placehold.co/32x32",
    url: "/github"
  },
  {
    name: "Discord",
    icon: "https://placehold.co/32x32",
    url: "/discord"
  },
  {
    name: "Instagram",
    icon: "https://placehold.co/32x32",
    url: "/instagram"
  },
  {
    name: "Email",
    icon: "https://placehold.co/32x32",
    url: "/mail"
  }
];

export default socials;