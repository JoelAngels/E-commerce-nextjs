"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { links, mobileLinks } from "../../constants/index";
import Logo from ".././../public/Platina.png";
import { Button } from "@/components/ui/button";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <div>
      <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
        <AiOutlineMenu size={25} />
      </div>

      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen  p-10 ease-in duration-500 bg-black text-white"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500 "
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>

        <div className="flex-col">
          <ul className="mt-8">
            {mobileLinks.map((link, idx) => (
              <div
                key={idx}
                className="py-4"
                onClick={() => setMenuOpen(false)}
              >
                <div key={idx}>
                  <Link href={link.href}>{link.name}</Link>
                </div>
              </div>
            ))}

            <div>
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              ></li>
            </div>

            {/* ============Book Now button ================== */}

            <Link href="/book">
              <Button
                className="gap-2 bg-gradient-to-r from-purple-500 via-violet-700 to-purple-500 text-white "
                size="lg"
              >
                Sign In
              </Button>
            </Link>
          </ul>
        </div>

        {/*  Mobile Screen*/}
        <div className="flex flex-row justify-around pt-10 items-center">
          <Link href="https://twitter.com/Mountainslayers" target="_blank">
            <BsTwitter size={30} className="cursor-pointer" />
          </Link>
          <Link href="https://twitter.com/Mountainslayers" target="_blank">
            <BsYoutube size={30} className="cursor-pointer" />
          </Link>
          <Link
            href="https://www.instagram.com/mountainslayerske"
            target="_blank"
          >
            <FaInstagram size={30} className="cursor-pointer" />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=100063530744880"
            target="_blank"
          >
            <FaFacebook size={30} className="cursor-pointer" />
          </Link>
        </div>

        <Link href="/">
          <Image
            src={Logo}
            alt="logo"
            width={90}
            height={10}
            className="cursor-pointer pt-8 w-auto h-auto"
            priority
          />
        </Link>
      </div>
    </div>
  );
};

export default Menu;
