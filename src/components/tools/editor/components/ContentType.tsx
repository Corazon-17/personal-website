import { ValueSetter } from "@/types";
import { useState } from "react";

interface ContentTypeProps {
  value: string;
  setValue: ValueSetter;
}

export function ContentType({ value, setValue }: ContentTypeProps) {
  const [showOption, setShowOption] = useState<boolean>(false);
  const options = ["Portfolio", "Blog", "Snippet"];

  return (
    <div className="w-max overflow-hidden">
      <button
        onClick={(): void => setShowOption(!showOption)}
        className="px-2 border border-solid w-full"
      >
        {value}
      </button>
      <ul className={showOption ? "fixed bg-black p-2 border border-solid" : "hidden"}>
        {options.map((item) => (
          <li key={item}>
            <button
              onClick={(): void => {
                setValue(item);
                setShowOption(false);
              }}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
