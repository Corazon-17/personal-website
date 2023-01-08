import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import { Navbar, Content } from "@/components/layout/";
import MDXComponents from "@/components/mdx";
import {
  AnimatePresence,
  m,
  LazyMotion,
  domAnimation,
  Variants,
} from "framer-motion";

const transition = {
  type: "tween",
  duration: 0.3,
};

const variants: Variants = {
  hidden: {
    opacity: 0,
    clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
  },
  visible: {
    opacity: 1,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: transition
  },
  exit: {
    opacity: 0,
    clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
    transition: transition
  },
};

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <LazyMotion features={domAnimation}>
      <Navbar />
      <AnimatePresence initial={true} mode="wait">
        <m.div
          key={router.route}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          className="mt-16 sm:mt-0 ml-0 sm:ml-40 bg-content-primary text-text-primary min-h-screen"
        >
          <Content>
            <MDXProvider components={MDXComponents}>
              <Component {...pageProps} />
            </MDXProvider>
          </Content>
        </m.div>
      </AnimatePresence>
    </LazyMotion>
  );
}
