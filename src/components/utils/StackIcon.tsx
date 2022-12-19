import React from "react";
import { FaKaggle } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiStackoverflow,
  SiGmail,
  SiGithub,
  SiLinkedin,
  SiDiscord,
  SiPython,
  SiJupyter,
  SiStreamlit,
} from "react-icons/si";

interface StackIconProps {
  name: string;
  size?: number;
}

export function StackIcon({ name, size }: StackIconProps) {
  switch (name.toLowerCase()) {
    case "html":
      return (
        <div className="grid relative items-center justify-items-center">
          <div className="absolute bg-white w-[70%] h-[70%]"></div>
          <SiHtml5 className="text-orange-600 z-10" size={size} />
        </div>
      );
    case "css":
      return (
        <div className="grid relative items-center justify-items-center">
          <div className="absolute bg-white w-[70%] h-[70%]"></div>
          <SiCss3 className="text-blue-600 z-10" size={size} />
        </div>
      );
    case "javascript":
      return (
        <div className="grid relative items-center justify-items-center">
          <div className="absolute bg-black w-[90%] h-[90%]"></div>
          <SiJavascript className="text-yellow-500 z-10" size={size} />
        </div>
      );
    case "typescript":
      return (
        <div className="grid relative items-center justify-items-center">
          <div className="absolute bg-white w-[90%] h-[90%]"></div>
          <SiTypescript className="text-blue-600 z-10" size={size} />
        </div>
      );
    case "tailwindcss":
      return <SiTailwindcss className="text-sky-600" size={size} />;
    case "react":
      return <SiReact className="text-blue-500" size={size} />;
    case "nextjs":
      return (
        <div className="grid relative items-center justify-items-center">
          <div className="absolute bg-white w-[90%] h-[90%] rounded-full"></div>
          <SiNextdotjs className="text-black z-10" size={size} />
        </div>
      );
    case "vitejs":
      return <SiVite className="text-yellow-500 " size={size} />;
    case "gmail":
      return <SiGmail className="text-red-500" size={size} />;
    case "github":
      return (
        <div className="grid relative items-center justify-items-center">
          <div className="absolute bg-white w-[90%] h-[90%] rounded-full"></div>
          <SiGithub className="text-black z-10" size={size} />
        </div>
      );
    case "linkedin":
      return (
        <div className="grid relative items-center justify-items-center">
          <div className="absolute bg-white w-[90%] h-[90%]"></div>
          <SiLinkedin className="text-blue-600 z-10" size={size} />
        </div>
      );
    case "discord":
      return (
        <div className="grid relative items-center justify-items-center">
          <div className="absolute bg-white w-[60%] h-[40%]"></div>
          <SiDiscord className="text-blue-700 z-10" size={size} />
        </div>
      );
    case "kaggle":
      return <FaKaggle className="text-blue-700" size={size} />;
    case "python":
      return <SiPython className="text-blue-600" size={size} />
    case "jupyter":
      return <SiJupyter className="text-orange-500" size={size} />
    case "streamlit":
      return <SiStreamlit className="text-red-700" size={size} />
    default:
      return <SiStackoverflow size={size} />;
  }
}

interface CustomIconProps {
  icon: React.ReactNode;
  size: number;
  bgColor: "black" | "white";
}
