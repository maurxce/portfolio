import type { ImageMetadata } from "astro";

export interface Link {
  name: string;
  description?: string;
  url: string;
}

export interface ImageLink extends Link {
  image: ImageMetadata;
}