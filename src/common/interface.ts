import type { ImageMetadata } from "astro";

export interface Navigation {
  name: string;
  url: string;
}

export interface Icon {
  name: string;
  image: ImageMetadata;
  url: string;
}

export interface Card extends Icon {
  description: string;
  icon: ImageMetadata;
}