import { ValueSetter } from "@/types";
import { useEffect, useState } from "react";
import { TextArea, TextInput, CheckBox } from "../components";
import { BlogFrontMatter } from "../types";

export function Blog({ setFMValue }: { setFMValue: ValueSetter }) {
  const [blogFM, setBlogFM] = useState<BlogFrontMatter>({
    title: "",
    description: "",
    date: "",
    tags: "",
    keywords: "",
    featured: false,
  });

  useEffect(() => {
    setFMValue(blogFM);
  }, [blogFM, setFMValue]);

  return (
    <div className="grid gap-4 overflow-hidden pb-2">
      <TextInput
        label="Title"
        value={blogFM["title"]}
        valueKey="title"
        stateValue={blogFM}
        setValue={setBlogFM}
      />
      <TextArea
        label="Description"
        value={blogFM["description"]}
        valueKey="description"
        stateValue={blogFM}
        setValue={setBlogFM}
      />
      <TextInput
        label="Date"
        value={blogFM["date"]}
        valueKey="date"
        stateValue={blogFM}
        setValue={setBlogFM}
      />
      <TextInput
        label="Tags"
        value={blogFM["tags"]}
        valueKey="tags"
        stateValue={blogFM}
        setValue={setBlogFM}
      />
      <TextInput
        label="Keywords"
        value={blogFM["keywords"]}
        valueKey="keywords"
        stateValue={blogFM}
        setValue={setBlogFM}
      />
      <div className="flex justify-center">
        <CheckBox
          label="Featured"
          value={blogFM["featured"]}
          valueKey="featured"
          stateValue={blogFM}
          setValue={setBlogFM}
        />
      </div>
    </div>
  );
}
