import CustomHead from "@/components/utils/CustomHead";
import Link from "next/link";

export default function index() {
  const headProps = {
    title: "Tools",
    description: "Some tools to help me manage this website.",
    keywords: ["corazon tools", "corazon17 tools", "tools"],
    type: "website",
  };

  return (
    <div className="grid items-center justify-center">
      <CustomHead {...headProps} />
      <Link
        href="/tools/editor"
        className="w-max px-4 py-2 border border-white "
      >
        Markdown Editor
      </Link>
    </div>
  );
}
