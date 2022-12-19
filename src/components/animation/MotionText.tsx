// reference: https://dev.to/harshhhdev/create-a-satisfying-wavy-text-animation-with-framer-motion-3hb5

import { HTMLMotionProps, motion, Variants } from "framer-motion";

interface TextProps extends HTMLMotionProps<"div"> {
  text: string;
  delay?: number;
  duration?: number;
  textStyle?: string;
}

const MotionText: React.FC<TextProps> = ({ text, className, delay, duration, textStyle, ...props }) => {
  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: (duration ? duration : 0.1), delayChildren: i * (delay ? delay : 0) },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      className={`flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      {...props}
    >
      {text.split("").map((letter, i) => (
        <motion.span
          key={i}
          variants={child}
          whileHover={{ scale: 1.5, originY: 1, color: "#2563eb" }}
          className={textStyle}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export { MotionText };
