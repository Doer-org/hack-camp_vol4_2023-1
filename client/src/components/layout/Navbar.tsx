"use client";

import React from "react";
import { RiHomeLine } from "react-icons/ri";
import { LinkButton } from "@/components/elements/Button";
import {
  HiOutlineCalendar,
  HiOutlinePlusCircle,
  HiOutlineUser,
} from "react-icons/hi";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isMatching = pathname === "/service/matchings";
  const isCreate = pathname === "/service/create";
  const isSetting = pathname === "/service/setting";

  return (
    <div className="bg-ivory rounded-lg w-[360px] h-16 mx-auto flex items-center justify-between px-6">
      <LinkButton
        className={`${!isHome && "opacity-30"} ${"w-7 h-7 text-navy-3"}`}
        href="/"
      >
        <RiHomeLine className="w-7 h-7" />
        <div
          className="w-1 h-1 rounded-full bg-navy-3 mx-auto mt-1"
          hidden={!isHome}
        ></div>
      </LinkButton>
      <LinkButton
        className={`${!isMatching && "opacity-30"} ${"w-7 h-7 text-navy-3"}`}
        href="/service/matchings"
      >
        <HiOutlineCalendar className="w-7 h-7" />
        <div
          className="w-1 h-1 rounded-full bg-navy-3 mx-auto mt-1"
          hidden={!isMatching}
        ></div>
      </LinkButton>
      <LinkButton
        className={`${!isCreate && "opacity-30"} ${"w-7 h-7 text-navy-3"}`}
        href="/service/create"
      >
        <HiOutlinePlusCircle className="w-7 h-7" />
        <div
          className="w-1 h-1 rounded-full bg-navy-3 mx-auto mt-1"
          hidden={!isCreate}
        ></div>
      </LinkButton>
      <LinkButton
        className={`${!isSetting && "opacity-30"} ${"w-7 h-7 text-navy-3"}`}
        href="/service/setting"
      >
        <HiOutlineUser className="w-7 h-7" />
        <div
          className="w-1 h-1 rounded-full bg-navy-3 mx-auto mt-1"
          hidden={!isSetting}
        ></div>
      </LinkButton>
    </div>
  );
};

export default Navbar;
