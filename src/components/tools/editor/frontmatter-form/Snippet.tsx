import { ValueSetter } from "@/types";
import { useEffect, useState } from "react";
import { TextArea, TextInput } from "../components";
import { SnippetFrontMatter } from "../types";

export function Snippet({ setFMValue }: { setFMValue: ValueSetter }) {
  const [snippetFM, setSnippetFM] = useState<SnippetFrontMatter>({
    title: "",
    description: "",
    topic: "",
  });

  useEffect(() => {
    setFMValue(snippetFM);
  }, [snippetFM, setFMValue]);

  return (
    <div className="grid gap-4 overflow-hidden pb-2">
      <TextInput
        label="Title"
        value={snippetFM["title"]}
        valueKey="title"
        stateValue={snippetFM}
        setValue={setSnippetFM}
      />
      <TextArea
        label="Description"
        value={snippetFM["description"]}
        valueKey="description"
        stateValue={snippetFM}
        setValue={setSnippetFM}
      />
      <TextInput
        label="Topic"
        value={snippetFM["topic"]}
        valueKey="topic"
        stateValue={snippetFM}
        setValue={setSnippetFM}
      />
    </div>
  );
}
