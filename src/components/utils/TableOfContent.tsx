import { getId } from "@/utils/helper";
import { RiListCheck } from "react-icons/ri";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { HeadingLink } from "@/components/utils";
import { HeadingTOC } from "@/types";

interface TableOfContent {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  heading: HeadingTOC;
}

export function TableOfContent({ show, setShow, heading }: TableOfContent) {
  const handleTOC = (): void => {
    setShow(!show);
  };

  return (
    <div
      className="
        block fixed h-full top-20 justify-self-end max-w-[60%]
        sm:absolute sm:top-0 sm:max-w-[30%] z-50"
    >
      {show ? (
        <ul className="px-2 sticky top-20 h-full bg-zinc-800 sm:bg-transparent sm:top-4 sm:h-fit">
          <button
            className="flex w-full text-left justify-between items-center text-lg font-bold mb-2 pb-1 border-b"
            onClick={handleTOC}
          >
            <span className="mr-2">Table of Contents</span>
            <IoIosArrowForward size={24} />
          </button>
          {heading?.map(({ level, text }) => (
            <li key={getId(text)} className="mb-1">
              <HeadingLink headingId={getId(text)}>{text}</HeadingLink>
            </li>
          ))}
        </ul>
      ) : (
        <div className="sticky top-20 text-end sm:top-4">
          <button className="flex" onClick={handleTOC}>
            <IoIosArrowBack size={24} />
            <RiListCheck size={24} />
          </button>
        </div>
      )}
    </div>
  );
}
