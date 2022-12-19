import { Component } from "@/types";

interface HeadingLinkProps extends Component {
  headingId: string;
}

export function HeadingLink({ children, headingId }: HeadingLinkProps) {
  return (
    <a href={`#${headingId}`} className="no-underline">
      {children}
    </a>
  );
}
