import { Component } from "@/types";

interface ExternalLinkProps extends Component {
  url: string | undefined;
}

export function ExternalLink({ url, className, children }: ExternalLinkProps) {
  const validLink = url?.includes("http") ? url : `https://${url}`;

  return (
    <a href={validLink} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}
