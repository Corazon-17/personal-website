import { contact, social } from "@/data/link";
import { ExternalLink, StackIcon } from "../utils";

export default function Footer() {
  return (
    <footer className="grid mt-12 place-content-center place-items-center py-4 border-t border-white gap-4">
      <p>Created by Corazon17</p>
      <div className="flex md:hidden gap-4">
        {social.map(({ name, url }) => (
          <ExternalLink key={name} url={url}>
            <StackIcon name={name} />
          </ExternalLink>
        ))}
        {contact.map(({ name, url }) => (
          <ExternalLink key={name} url={url}>
            <StackIcon name={name} />
          </ExternalLink>
        ))}
      </div>
    </footer>
  );
}
