import { MotionText, MotionButton, MotionInView } from "../animation";

export function Hero() {
  const textStyle = "text-3xl md:text-5xl xl:text-7xl font-bold";

  return (
    <section className="h-[95vh] sm:h-[97vh] md:h-screen pb-12">
      <div className="grid h-full content-center gap-2">
        <MotionText text="Hello There," textStyle={textStyle} />
        <MotionText text="I'm Corazon17," textStyle={textStyle} delay={1.2} />
        <MotionText
          text="A Man Who Loves Coding"
          textStyle={textStyle}
          delay={2.5}
        />
        <MotionInView from="left" offset={100}>
          <p className="my-4 text-xl md:text-2xl">
            Welcome to my personal website. I like to build useful things,
            especially web applications. Here, you can see what i&lsquo;ve built
            and what i&lsquo;ve learned.
          </p>
        </MotionInView>
        <MotionInView from="left" offset={100} delay={0.5}>
          <MotionButton className="w-max border-2 px-6 py-3 text-lg">
            Contact Me !
          </MotionButton>
        </MotionInView>
      </div>
    </section>
  );
}
