import Link from "next/link";

export default function index() {
  return (
    <div className="grid items-center justify-center">
      <Link href="/tools/editor" className="w-max px-4 py-2 border border-white ">Markdown Editor</Link>
    </div>
  );
}
