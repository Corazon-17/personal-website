import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import Menu from "./Menu";

export function Navbar() {
  const [show, setShow] = useState(false);
  const handleClick: VoidFunction = () => setShow(!show);
  const closeMenu: VoidFunction = () => setShow(false);

  const TopNav: React.FC = () => {
    return (
      <header className={`fixed grid sm:hidden top-0 w-full py-4 z-[100] backdrop-blur-sm ${show ? "bg-inherit": "bg-transparent"}`}>
        <div className="flex justify-between self-center px-4 font-bold">
          <Link href="/" onClick={closeMenu}>
            <Image
              src="https://ik.imagekit.io/corazon17/website/logo_64x64.png"
              alt="logo"
              width={32}
              height={32}
              className="animate-pulse"
            />
          </Link>
          <button onClick={handleClick} className="text-3xl">
            {show ? <IoMdClose /> : <BiMenu />}
          </button>
        </div>
        {show && <Menu onClick={closeMenu} />}
      </header>
    );
  };

  const SideNav: React.FC = () => {
    return (
      <aside className="fixed hidden sm:block h-screen w-40 py-4 bg-inherit border-y-8 border-decor-primary">
        <Menu withHome />
      </aside>
    );
  };

  return (
    <div className="text-white bg-nav-primary">
      <TopNav />
      <SideNav />
    </div>
  );
}
