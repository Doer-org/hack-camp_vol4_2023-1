"use client";

import { usePathname } from "next/navigation";
import React, { FC, useState } from "react";
import { HiOutlineCalendar, HiOutlinePlusCircle, HiOutlineUser } from "react-icons/hi";
import { LuHeartHandshake } from "react-icons/lu";
import { RiHomeLine } from "react-icons/ri";
import { Button, LinkButton } from "@/components/elements/Button";

const Navbar: FC = () => {
  const pathname = usePathname();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const isHome = pathname === "/";
  const isCreate = pathname === "/create/hangout" || pathname === "/create/schedule";
  const isProfile = pathname === "/profile";
  const isLogin = pathname === "/login";
  const handleCreateModalOpen = () => {
    if (isCreateModalOpen) {
      setIsCreateModalOpen(false);
    } else {
      setIsCreateModalOpen(true);
    }
  };

  return isLogin ? (
    <></>
  ) : (
    <div>
      {isCreateModalOpen && (
        <div className="fixed -bottom-16 w-52 h-52 left-[calc(50%-104px)] bg-new-white rounded-full p-8 animate-slide-fwd-top">
          <div className="flex justify-between text-new-yellow-700 px-3">
            <LinkButton className="" href="/create/hangout" onClick={handleCreateModalOpen}>
              <LuHeartHandshake className="w-7 h-7" />
              <p>遊び</p>
            </LinkButton>
            <LinkButton className="" href="/create/schedule" onClick={handleCreateModalOpen}>
              <HiOutlineCalendar className="w-7 h-7" />
              <p>予定</p>
            </LinkButton>
          </div>
          <div className="w-7 h-7 mx-auto mt-3 bg-new-white">
            <Button className="w-7 h-7 text-new-black rotate-45 -z-20" onClick={handleCreateModalOpen}>
              <HiOutlinePlusCircle className="w-7 h-7" />
            </Button>
          </div>
        </div>
      )}
      <div className={`${"bg-new-white rounded-t-lg w-screen h-16 mx-auto flex items-center justify-between px-6"}`}>
        <LinkButton
          className={`${!isHome ? "opacity-30 text-new-black" : "text-new-red-700"} ${"w-7 h-7  disabled:opacity-30"}`}
          href="/"
          disabled={isCreateModalOpen}
        >
          <RiHomeLine className="w-7 h-7" />
          <div className="w-1 h-1 rounded-full bg-new-red-700 mx-auto mt-1" hidden={!isHome}></div>
        </LinkButton>
        <div className={isCreateModalOpen ? "opacity-0" : ""}>
          <Button
            className={`${!isCreate ? "opacity-30 text-new-black" : "text-new-yellow-700"} ${"w-7 h-7"}`}
            onClick={handleCreateModalOpen}
          >
            <HiOutlinePlusCircle className="w-7 h-7" />
          </Button>
          <div className="w-1 h-1 rounded-full bg-new-yellow-700 mx-auto" hidden={!isCreate}></div>
        </div>
        <LinkButton
          className={`${
            !isProfile ? "opacity-30 text-new-black" : "text-new-blue-700"
          } ${"w-7 h-7 disabled:opacity-30"}`}
          href="/profile"
          disabled={isCreateModalOpen}
        >
          <HiOutlineUser className="w-7 h-7" />
          <div className="w-1 h-1 rounded-full bg-new-blue-700 mx-auto mt-1" hidden={!isProfile}></div>
        </LinkButton>
      </div>
    </div>
  );
};

export default Navbar;
