import { serialize } from "next-mdx-remote/serialize";
import { ReactElement, useEffect, useRef, useState } from "react";
import rehypeHighlight from "rehype-highlight";
import { MDXRemote } from "next-mdx-remote";
import { preprocess, keyEvent } from "@/components/tools/editor/utils";
import { Toolbar } from "@/components/tools/editor";
import { useLocalStorage } from "@/hooks";
import CustomHead from "@/components/utils/CustomHead";

export default function Editor() {
  const [mdText, setMdText] = useLocalStorage("mdText", "");
  const [parsedHTML, setParsedHTML] = useState<ReactElement>();
  const textAreaRef = useRef<any>();

  const headProps = {
    title: "Markdown Editor",
    description: "Markdown editor",
    keywords: ["markdown editor"],
    type: "website",
  };

  useEffect(() => {
    const parseHTML = async () => {
      const mdxSource = await serialize(preprocess(mdText), {
        mdxOptions: { rehypePlugins: [rehypeHighlight] },
      });

      return mdxSource;
    };

    parseHTML().then((mdxSource) => {
      setParsedHTML(<MDXRemote {...mdxSource} />);
    });
  }, [mdText]);

  return (
    <div>
      <CustomHead {...headProps} />
      <Toolbar textAreaRef={textAreaRef} setValue={setMdText} />
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-1 min-h-screen">
        <textarea
          ref={textAreaRef}
          value={mdText}
          onChange={(e): void => setMdText(e.target.value)}
          onKeyDown={(e): void => keyEvent(e, textAreaRef, setMdText)}
          className="p-2 bg-zinc-800 outline-none min-h-screen"
        />
        <div className="max-w-none break-all prose prose-invert bg-zinc-800 p-2">
          {parsedHTML}
        </div>
      </div>
    </div>
  );
}
