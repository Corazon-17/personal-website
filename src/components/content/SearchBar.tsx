import { FaSearch } from "react-icons/fa";
import { MotionInView } from "../animation";

interface SearchBarProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
}

export function SearchBar({ value, setValue, placeholder }: SearchBarProps) {
  const updateValue = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  return (
    <div className="flex w-full mb-4 p-2 border-4 border-decor-primary rounded-3xl">
      <FaSearch className="self-center w-8 mr-2 text-lg" />
      <input
        type="text"
        className="w-full bg-transparent focus:outline-none"
        value={value}
        placeholder={placeholder}
        onChange={updateValue}
      />
    </div>
  );
}
