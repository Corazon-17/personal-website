import { Ref, ValueSetter } from "@/types";
import { download } from "@/utils/helper";
import { useState } from "react";
import { preprocess } from "@/components/tools/editor/utils";
import { ContentType } from "./components";
import FrontMatter from "./FrontMatter";
import { Contents, FrontMatterValue, PortfolioFrontMatter } from "./types";
import { FaCopy, FaDownload } from "react-icons/fa";
import { TbLetterF } from "react-icons/tb";
import { tools, convertFM } from "./utils";

interface ToolbarProps {
  textAreaRef: Ref;
  setValue: ValueSetter;
}

export function Toolbar({ textAreaRef, setValue }: ToolbarProps) {
  const [fileName, setFileName] = useState<string>("readme");
  const [fileExtension, setFileExtension] = useState<string>(".mdx");
  const [editFrontMatter, setEditFrontMatter] = useState<boolean>(false);
  const [contentType, setContentType] = useState<Contents>("Portfolio");
  const [FMValue, setFMValue] = useState<FrontMatterValue | null>(null);

  const getFileName = (fileName: string, fileExtension: string) => {
    const name = fileName ? fileName.replaceAll(" ", "-") : "readme";
    const extension = fileExtension ? fileExtension : ".md";

    return (
      name.toLowerCase() +
      (extension.includes(".") ? extension : `.${extension}`)
    );
  };

  const getResult = (
    contentType: Contents,
    frontMatter: FrontMatterValue | null,
    content: string
  ) => {
    return `---\n${convertFM(contentType, frontMatter)}\n---\n\n${preprocess(
      content
    )}`;
  };

  const copyResult = async () => {
    const result = getResult(contentType, FMValue, textAreaRef.current.value)
    await navigator.clipboard.writeText(result)
  }

  const downloadFile = async () => {
    const name = getFileName(fileName, fileExtension);
    const markdown = getResult(contentType, FMValue, textAreaRef.current.value);

    download(name, markdown);
  };

  return (
    <>
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-4 p-2 bg-black">
        {/* Toolbar Button */}
        <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-4">
          {tools.map(({ label, Icon, handler }) => (
            <button
              key={label}
              onClick={(): void => handler(textAreaRef, setValue)}
            >
              <Icon />
            </button>
          ))}
        </div>

        <div className="grid justify-center md:justify-end items-center gap-2 md:gap-4">
          <div className="flex gap-2 justify-center md:justify-end">
            <ContentType value={contentType} setValue={setContentType} />

            {/* FrontMatter Edit Button */}
            <button onClick={(): void => setEditFrontMatter(!editFrontMatter)}>
              <TbLetterF className="bg-white text-black" />
            </button>
          </div>

          <div className="flex gap-2 justify-center md:justify-end">
            {/* Copy Button */}
            <button onClick={async () => copyResult()}>
              <FaCopy />
            </button>

            {/* Filename Input */}
            <div className="text-center text-black">
              <input
                value={fileName}
                onChange={(e): void => setFileName(e.target.value)}
                className="h-max px-2"
              />
              <input
                value={fileExtension}
                onChange={(e): void => setFileExtension(e.target.value)}
                className="w-12 px-1"
              />
            </div>

            {/* Download Button */}
            <button onClick={async () => downloadFile()}>
              <FaDownload />
            </button>
          </div>
        </div>
      </div>

      <FrontMatter
        show={editFrontMatter}
        type={contentType}
        setFMValue={setFMValue}
      />
    </>
  );
}
