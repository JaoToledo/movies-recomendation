import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface movieImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export function MovieImage({
  src, 
  alt, 
  width = 250, 
  height = 350,
  className}:
  movieImageProps) {
  return (
    <Image 
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={twMerge("rounded-2xl", className)}
    />
  )
}