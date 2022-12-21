import { social, contact } from "@/data/link";
import { Component } from "@/types";
import { MotionInView } from "../animation";
import { ExternalLink, StackIcon } from "../utils";
import Footer from "./Footer";

export function Content({ children }: Component) {
  return (
    <div
      className="grid sm:grid-cols-[30px_1fr_30px] gap-6 overflow-hidden  
      min-h-screen px-4 pt-4 sm:px-6 sm:pt-6 md:px-8 md:pt-8
      border-y-8 border-decor-primary
    "
    >
      <div className="hidden sm:grid justify-items-center">
        <div className="flex flex-col gap-6 fixed bottom-0">
          {social.map(({ name, url }, idx) => (
            <MotionInView
              key={name}
              from="bottom"
              offset={30 * (social.length - idx) + contact.length * 30}
            >
              <ExternalLink url={url}>
                <StackIcon name={name} size={18} />
              </ExternalLink>
            </MotionInView>
          ))}
          {contact.map(({ name, url }, idx) => (
            <MotionInView
              key={name}
              from="bottom"
              offset={30 * (contact.length - idx)}
            >
              <ExternalLink key={name} url={url}>
                <StackIcon name={name} size={18} />
              </ExternalLink>
            </MotionInView>
          ))}
          <div className="grid grid-cols-2 mt-2">
            <div className="h-24 border-r border-decor-primary"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <div>{children}</div>
        <Footer />
      </div>

      <div className="hidden sm:grid justify-items-center">
        <div className="flex flex-col gap-4 fixed bottom-0">
          <MotionInView from="bottom" offset={100}>
            <ExternalLink url="mailto:mail.sofyan17@gmail.com">
              <p
                className="text-gray-400 hover:text-white tracking-wider"
                style={{ writingMode: "vertical-rl" }}
              >
                mail.sofyan17@gmail.com
              </p>
            </ExternalLink>
          </MotionInView>
          <div className="grid grid-cols-2 mt-2">
            <div className="h-24 border-r border-decor-primary"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
