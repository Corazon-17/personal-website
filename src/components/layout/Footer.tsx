import { contact, other } from "@/data/link";
import Link from "next/link";
import { ExternalLink, StackIcon } from "../utils";

export default function Footer() {
  return (
    <footer className="grid mt-20 place-content-center place-items-center md:flex md:justify-between py-4 border-t border-white gap-4">
      <p>Created by Corazon17</p>
      <div className="flex gap-4">
        {contact.map(({ name, url }) => (
          <ExternalLink key={name} url={url}>
            <StackIcon name={name} />
          </ExternalLink>
        ))}
      </div>
      <div>
        {other.map(({ name, path }) => (
          <Link key={name} href={path}>
            {name}
          </Link>
        ))}
      </div>
    </footer>
  );
}
