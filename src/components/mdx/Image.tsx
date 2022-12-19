import { Component } from "@/types";
import Image from "next/image";

interface MDXImageProps {
  src: string;
  alt: string;
}

export default function MDXImage({ src, alt }: MDXImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1280}
      height={720}
      className="my-auto"
    />
  );
}
