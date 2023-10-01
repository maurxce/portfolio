/// <reference types="astro/client" />

declare module '*.png' {
  const metadata: ImageMetadata;
  export default metadata;
}