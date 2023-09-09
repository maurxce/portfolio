export interface Link {
  name: string;
  url: string;
}

export interface ImageLink extends Link {
  image: Promise<any>;
}