"use client";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Router } from "next/router";
import { usePathname, useRouter } from "next/navigation";

export const NavIcons = () => {
  const router = useRouter();
  const pathName = usePathname();

  const isLoggedIn = false;
  const handleProfile = () => {
    if (!isLoggedIn) {
      // router.push("/login");
    }
    setIsProfileOpen((prev) => !prev);
  };

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Image
            src="/profile.png"
            alt=""
            width={22}
            height={22}
            className="cursor-pointer"
            //   onClick={login}
            onClick={handleProfile}
          />
        </DropdownMenuTrigger>
        {isProfileOpen && (
          <DropdownMenuContent>
            <DropdownMenuLabel>Auth</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>LogMeOut</DropdownMenuItem>
          </DropdownMenuContent>
        )}
      </DropdownMenu>
      <Image
        src="/notification.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div className="relative cursor-pointer">
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-joel rounded-full text-white text-sm flex items-center justify-center">
          {/* {counter} */} 1
        </div>
      </div>
    </div>
  );
};
