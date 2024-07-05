import { ImageLoaderProps } from "next/image";

export const getImageUrl = (url?: string) =>
  url ? `${process.env.NEXT_PUBLIC_IMAGE_URL}/${url}` : "";

export const loader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${process.env.NEXT_PUBLIC_IMAGE_URL}/${src}?w=${width}&q=${quality || 75}`;
};
