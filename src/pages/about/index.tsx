import { MotionText } from "@/components/animation";
import CustomHead from "@/components/utils/CustomHead";
import Link from "next/link";

export default function About() {
  const headProps = {
    title: "About Me",
    description: "Everything you need to know about me",
    keywords: ["corazon about", "corazon17 about"],
    type: "website",
  };

  return (
    <div className="grid gap-8">
      <CustomHead {...headProps} />
      <Introduction />
      <Skill />
    </div>
  );
}

const Introduction = () => {
  const start = new Date("2022-10-23");
  const now = new Date();
  const diff =
    now.getMonth() -
    start.getMonth() +
    12 * (now.getFullYear() - start.getFullYear());

  return (
    <section className="grid md:grid-cols-2">
      <div className="grid gap-3">
        <Title>Introduction</Title>

        <Text>
          I&apos;m a man who have serious passion in programming field,
          especially in web development. I really enjoy creating things that
          actually useful for everyone (or at least for myself). Apart from
          coding, i also have some data science related skills.
        </Text>
        <Text>
          I started learning about web development on October 23, 2022. So
          it&apos;s been about {diff} months since i decided to change my focus
          from data science to web development. I&apos;m used to using Python as
          my main programming language before, so that makes my learning process
          easier (it&apos;s never been so difficult anyway).
        </Text>
        <Text>
          Well-organized person, fast learner, and problem solver. I can do
          anything independently, but i&apos;m also a good team player. Always
          curious about something new, and always wanted to be better. Looking
          for opportunities to work on wonderful projects with wonderful people.
        </Text>
      </div>
    </section>
  );
};

const Skill = () => {
  return (
    <section>
      <Title>Skills</Title>
      <div className="grid md:grid-cols-2 gap-4 md:gap-8">
        <div className="grid gap-2">
          <Text>
            Currently, I&apos;m just learning about frontend development because
            I think it is a very important part in web development to make the
            users feel comfortable while interacting with the applications we
            make. However, i don&apos;t have a plan to just stop there. I will
            continue to learn about other technologies that can make the
            application even better.
          </Text>
          <Text>
            These are the skills i&apos;ve learned so far. Check my
            <Link href="/portfolio" className="text-decor-primary">
              {" "}
              portfolio{" "}
            </Link>
            to see what i&apos;ve built.
          </Text>
        </div>

        <div className="">
          <Progress label="HTML" value={90} />
          <Progress label="CSS/Tailwind" value={80} />
          <Progress label="Javascript" value={85} />
          <Progress label="Typescript" value={80} />
          <Progress label="React/Next" value={80} />
        </div>
      </div>
    </section>
  );
};

const Title: React.FC<{ children: string }> = ({ children }) => {
  return (
    <div className="mb-4">
      <MotionText
        text={children}
        textStyle="text-2xl md:text-3xl xl:text-4xl font-bold"
      />
    </div>
  );
};

const Text: React.FC<{ children: React.ReactNode | React.ReactNode[] }> = ({
  children,
}) => {
  return <p className="h-max text-lg">{children}</p>;
};

interface ProgressProps {
  label: string;
  value: number;
}
const Progress: React.FC<ProgressProps> = ({ label, value }) => {
  return (
    <div className="grid gap-2 text-lg font-bold mb-4">
      <label>{label}</label>
      <div className="w-full bg-white rounded-full h-2.5">
        <div
          className={`bg-decor-primary h-2.5 rounded-full`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};
