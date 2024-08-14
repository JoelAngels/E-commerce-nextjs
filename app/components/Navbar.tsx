import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
// import SearchBar from "./SearchBar";
import dynamic from "next/dynamic";
import { links } from "../../constants";
import { NavIcons } from "./NavIcons";
// import NavIcons from "./NavIcons";

// const NavIcons = dynamic(() => import("./NavIcons"), { ssr: false });

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative bg-red-400">
      {/* Mobile View for the title OnlY*/}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">Jewellery</div>
        </Link>
        <Menu />
      </div>{" "}
      {/**End of Mobile View */}
      {/* BIGGER SCREENS */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center  gap-12">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/Platina.png" alt="" width={100} height={100} />
          </Link>
          <div className="hidden xl:flex gap-4">
            {links.map((link, idx) => (
              <div key={idx}>
                {link.href && <Link href={link.href}>{link.name}</Link>}
              </div>
            ))}
          </div>
        </div>
        {/* RIGHT */}
        <div className="flex items-center justify-between gap-8">
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
