import { Heading } from "@/types";
import { MotionInView, MotionText } from "../animation";

export function IndexHeading({ title, description }: Heading) {
  return (
    <div className="grid justify-center text-center mb-4">
      <div className="flex justify-center">
        <MotionText
          text={title}
          className="text-2xl md:text-3xl xl:text-4xl font-bold"
        />
      </div>
      <p className="mt-4 text-md">{description}</p>
    </div>
  );
}
