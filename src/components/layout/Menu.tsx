import { menu, social } from "@/data/link";
import Link from "next/link";
import { ExternalLink, StackIcon } from "@/components/utils";
import { useRouter } from "next/router";
import Image from "next/image";

interface MenuProps {
  withHome?: boolean;
  onClick?: VoidFunction;
}

export default function Menu({ withHome, onClick }: MenuProps) {
  const { pathname } = useRouter();

  return (
    <div className="flex flex-col justify-between items-center h-full font-bold">
      <nav className="flex flex-col w-full" onClick={onClick}>
        {withHome && (
          <div className="flex mb-4 h-20 self-center items-center">
            <Link href="/">
              <Image
                src="https://ik.imagekit.io/corazon17/website/logo_64x64.png"
                alt="logo"
                width={64}
                height={64}
                className="animate-pulse"
              />
            </Link>
          </div>
        )}

        {menu.map(({ name, path }) => (
          <Link
            key={name}
            href={path}
            className={`w-full text-center text-lg border-b-2 border-b-gray-400 py-3 ${
              pathname.split("/")[1] === path.slice(1) &&
              "text-decor-primary border-b-decor-primary"
            }`}
          >
            {name}
          </Link>
        ))}
      </nav>

      <div className="flex gap-4 mt-4 pb-2">
        {social.map(({ name, url }) => (
          <ExternalLink key={name} url={url}>
            <StackIcon name={name} />
          </ExternalLink>
        ))}
      </div>
    </div>
  );
}
