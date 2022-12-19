// reference: https://codepen.io/lovasoa/pen/pMqNZJ

import { Component } from "@/types";

export function MotionButton({ children, className }: Component) {
  return (
    <button
      className={`group relative leading-none overflow-hidden border-1 border-decor-primary text-decor-primary hover:text-black font-bold ${className}`}
    >
      <span className="absolute inset-0 bg-decor-primary -translate-x-[101%] transition-transform duration-500 group-hover:translate-x-0"></span>
      <span className="absolute inset-0 flex justify-center items-center group-hover:translate-x-0">
        {children}
      </span>
      {children}
    </button>
  );
}
