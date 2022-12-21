import Image from "next/image";
import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

interface MDXImageProps {
  src: string;
  alt: string;
}

export default function MDXImage({ src, alt }: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) {
  return (
    <Image
      src={src as string}
      alt={alt as string}
      width={1280}
      height={720}
      className="my-auto"
    />
  );
}
