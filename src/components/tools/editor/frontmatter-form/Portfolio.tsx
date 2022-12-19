import { ValueSetter } from "@/types";
import { useEffect, useState } from "react";
import { TextArea, TextInput, CheckBox } from "../components";
import { PortfolioFrontMatter } from "../types";

export function Portfolio({ setFMValue }: { setFMValue: ValueSetter }) {
  const [portoFM, setPortoFM] = useState<PortfolioFrontMatter>({
    title: "",
    description: "",
    image: "",
    stack: "",
    link_repo: "",
    link_live: "",
    featured: false,
  });

  useEffect(() => {
    setFMValue(portoFM);
  }, [portoFM, setFMValue]);

  return (
    <div className="grid gap-4 overflow-hidden pb-2">
      <TextInput
        label="Title"
        value={portoFM["title"]}
        valueKey="title"
        stateValue={portoFM}
        setValue={setPortoFM}
      />
      <TextArea
        label="Description"
        value={portoFM["description"]}
        valueKey="description"
        stateValue={portoFM}
        setValue={setPortoFM}
      />
      <TextInput
        label="Image"
        value={portoFM["image"]}
        valueKey="image"
        stateValue={portoFM}
        setValue={setPortoFM}
      />
      <TextInput
        label="Stack"
        value={portoFM["stack"]}
        valueKey="stack"
        stateValue={portoFM}
        setValue={setPortoFM}
      />
      <TextInput
        label="Repository URL"
        value={portoFM["link_repo"]}
        valueKey="link_repo"
        stateValue={portoFM}
        setValue={setPortoFM}
      />
      <TextInput
        label="Live URL"
        value={portoFM["link_live"]}
        valueKey="link_live"
        stateValue={portoFM}
        setValue={setPortoFM}
      />
      <div className="flex justify-center">
        <CheckBox
          label="Featured"
          value={portoFM["featured"]}
          valueKey="featured"
          stateValue={portoFM}
          setValue={setPortoFM}
        />
      </div>
    </div>
  );
}
