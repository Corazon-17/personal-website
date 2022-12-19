import { Component } from "@/types";
import { useRef } from "react";
import { FaCopy } from "react-icons/fa";

export function Pre({ children }: Component) {
  const preRef = useRef<HTMLPreElement>(null)
  const getLang = (children: React.ReactNode) => {
    try {
      return children?.props.className.split("-")[1].toUpperCase()
    } catch {
      return false
    }
  }

  const language = getLang(children)
  
  return (
    <div>
      <div className="flex justify-between items-center px-0 bg-slate-900">
        <div className="py-1.5 px-3 bg-decor-primary text-lg font-bold">
          {language}
        </div>
        <div
          className="cursor-pointer py-1.5 px-3 border-l-2 border-solid border-slate-800 hover:border-2 hover:border-decor-primary hover:border-solid"
          onClick={async () => await navigator.clipboard.writeText(preRef.current?.textContent as string)}
        >
          <FaCopy size={20} />
        </div>
      </div>
      <pre ref={preRef} className="[&>code]:border-0 [&>code]:p-0 mt-0">{children}</pre>
    </div>
  );
}

export function Code({ children }: Component) {
  return (
    <code className="p-1 border border-solid border-white before:content-[] after:content-[]">
      {children}
    </code>
  );
}
