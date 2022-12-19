import {
  addHeading,
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
} from "./eventHandler";

import {
  FaHeading,
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaListOl,
  FaListUl,
  FaTasks,
  FaImage,
  FaLink,
  FaCode,
  FaTable,
  FaKeyboard,
  FaDownload,
} from "react-icons/fa";
import { TbBlockquote, TbLetterF } from "react-icons/tb";
import { GoHorizontalRule } from "react-icons/go";

export const tools = [
  { label: "Heading", Icon: FaHeading, handler: addHeading },
  { label: "Bold", Icon: FaBold, handler: addBold },
  { label: "Italic", Icon: FaItalic, handler: addItalic },
  { label: "Image", Icon: FaImage, handler: addImage },
  { label: "Link", Icon: FaLink, handler: addLink },
  { label: "Ordered List", Icon: FaListOl, handler: addOrderedList },
  { label: "Unordered List", Icon: FaListUl, handler: addUnorderedList },
  // {
  //   label: "Strikethrough",
  //   Icon: FaStrikethrough,
  //   handler: addStrikethrough,
  // },
  // { label: "Table", Icon: FaTable, handler: addTable },
  { label: "Blockquote", Icon: TbBlockquote, handler: addBlockquote },
  {
    label: "Horizontal Rule",
    Icon: GoHorizontalRule,
    handler: addHorizontalRule,
  },
  { label: "Code", Icon: FaCode, handler: addCode },
  { label: "Keyboard Input", Icon: FaKeyboard, handler: addKeyboard },
  // { label: "Task List", Icon: FaTasks, handler: addTaskList },
];
