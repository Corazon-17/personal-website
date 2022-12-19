import { Component } from "@/types";
import { ExternalLink } from "../utils";

interface LinkProps extends Component {
    href?: string | undefined;
}

export function Link({ href, children }: LinkProps) {
    return (
        <ExternalLink url={href}>
            {children}
        </ExternalLink>
    )
}