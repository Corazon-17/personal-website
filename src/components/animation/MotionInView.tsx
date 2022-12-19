import { HTMLMotionProps, motion } from "framer-motion";

interface MotionInViewProps extends HTMLMotionProps<"div"> {
  from: "top" | "bottom" | "left" | "right";
  offset: number;
  once?: boolean;
  duration?: number;
  delay?: number;
}

export function MotionInView({
  children,
  from,
  offset,
  once,
  duration,
  delay,
  ...props
}: MotionInViewProps) {
  const initVal =
    from === "top"
      ? { y: offset * -1 }
      : from === "bottom"
      ? { y: offset }
      : from === "left"
      ? { x: offset * -1 }
      : from === "right"
      ? { x: offset }
      : null;

  const inView = ["top", "bottom"].includes(from) ? { y: 0 } : { x: 0 };

  return (
    <motion.div
      initial={{ ...initVal, opacity: 0 }}
      whileInView={{ ...inView, opacity: 1 }}
      viewport={{ once: once ? once : true }}
      transition={{
        duration: duration ? duration : 0.5,
        delay: delay ? delay : 0,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
