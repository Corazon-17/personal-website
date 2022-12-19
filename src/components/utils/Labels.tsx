import { BsTags } from "react-icons/bs";
import { IconText, StackIcon } from "@/components/utils";

interface LabelProps {
  data: Array<string>;
  type?: "text" | "icon";
  label?: string;
}

export function Labels({ data, label, type = "text" }: LabelProps) {
  return (
    <div className={`flex ${type === "icon" ? "items-end" : ""}`}>
      {label && (
        <div className="mr-2">
          <IconText icon={<BsTags size={24} />} text={label} />{" "}
        </div>
      )}

      <ul className="flex flex-wrap">
        {type === "text"
          ? data.map((item, i) => (
              <li
                key={i}
                className="h-max px-1.5 mr-1 my-1 border-2 border-decor-primary"
              >
                {item}
              </li>
            ))
          : data.map((item, i) => (
              <li
                key={i}
                title={item}
                className="mr-2 my-1 text-xl group/label"
              >
                {<StackIcon name={item} size={24} />}
                <span className="absolute group/label text-sm invisible group-hover/label:visible">
                  {item}
                </span>
              </li>
            ))}
      </ul>
    </div>
  );
}
