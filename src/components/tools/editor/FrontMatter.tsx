import { ValueSetter } from "@/types";
import { Portfolio, Blog, Snippet } from "./frontmatter-form";
import { Contents } from "./types";

interface FrontMatterProps {
  show: boolean;
  type: Contents;
  setFMValue: ValueSetter;
}

export default function FrontMatter({ show, type, setFMValue }: FrontMatterProps) {
  return (
    <div
      className={`${
        show ? "grid" : "hidden"
      } bg-black border-t border-solid p-2 gap-2`}
    >
      {type === "Portfolio" ? (
        <Portfolio setFMValue={setFMValue} />
      ) : type === "Blog" ? (
        <Blog setFMValue={setFMValue} />
      ) : (
        <Snippet setFMValue={setFMValue} />
      )}
    </div>
  );
}
