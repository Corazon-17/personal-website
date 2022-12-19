import { Component } from "@/types";
import Footer from "./Footer";

export function Content({ children }: Component) {
  return (
    <div className="flex flex-col overflow-hidden justify-between 
      min-h-screen px-4 pt-4 sm:px-6 sm:pt-6 md:px-8 md:pt-8
      border-y-8 border-decor-primary
    ">
      <div>{children}</div>
      <Footer />
    </div>
  );
}
