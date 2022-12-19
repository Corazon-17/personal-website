import { Dispatch, RefObject } from "react";
import addText from "./addText";

type Ref = RefObject<any>;
type ValueSetter = Dispatch<React.SetStateAction<string>>;

const addTab = (ref: Ref, setValue: ValueSetter) => {
  addText(ref, setValue, "tab");
};

const addHeading = (ref: Ref, setValue: ValueSetter) => {
  addText(ref, setValue, "start", "#");
};

const addHeadingNum = (ref: Ref, setValue: ValueSetter, h: number) => {
  addText(ref, setValue, "start", "#".repeat(h));
};

const addBold = (ref: Ref, setValue: ValueSetter) => {
  addText(ref, setValue, "between", "**");
};

const addItalic = (ref: Ref, setValue: ValueSetter) => {
  addText(ref, setValue, "between", "*");
};

const addStrikethrough = (ref: Ref, setValue: ValueSetter) => {
  addText(ref, setValue, "between", "~~");
};

const addBlockquote = (ref: Ref, setValue: ValueSetter) => {
  addText(ref, setValue, "start", ">");
};

const addOrderedList = (ref: Ref, setValue: ValueSetter) => {
  addText(ref, setValue, "start", "1.");
};

const addUnorderedList = (ref: Ref, setValue: ValueSetter) => {
  addText(ref, setValue, "start", "-");
};

const addTaskList = (ref: Ref, setValue: ValueSetter) => {
  const taskList = `- [x] Task 1
- [ ] Task 2
- [ ] Task 3`;
  addText(ref, setValue, "block", taskList);
};

const addTable = (ref: Ref, setValue: ValueSetter) => {
  const table = `| Col1Header | Col2Header | Col3Header |       
| :--- | :----: | ---: |       
| Col1Value | Col2Value | Col3Value |       
| Col1Value | Col2Value | Col3Value |`;
  addText(ref, setValue, "block", table);
};

const addCode = (ref: Ref, setValue: ValueSetter) => {
  const code = `\`\`\`language
type code here...
\`\`\`
`;
  addText(ref, setValue, "block", code);
};

const addImage = (ref: Ref, setValue: ValueSetter) => {
  addText(ref, setValue, "image");
};

const addLink = (ref: Ref, setValue: ValueSetter) => {
  addText(ref, setValue, "link");
};

const addHorizontalRule = (ref: Ref, setValue: ValueSetter) => {
  addText(ref, setValue, "block", "---");
};

const addKeyboard = (ref: Ref, setValue: ValueSetter) => {
  addText(ref, setValue, "keyboard");
};

export {
  addTab,
  addHeading,
  addHeadingNum,
  addBold,
  addItalic,
  addStrikethrough,
  addBlockquote,
  addOrderedList,
  addUnorderedList,
  addTaskList,
  addTable,
  addCode,
  addImage,
  addLink,
  addHorizontalRule,
  addKeyboard,
};
