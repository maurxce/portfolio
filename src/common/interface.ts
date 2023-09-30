export interface Link {
  name: string;
  description?: string;
  url: string;
}

export interface ImageLink extends Link {
  image: Promise<any> | string;
}