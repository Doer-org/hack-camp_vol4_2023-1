"use client";

import React, { FC, useState } from "react";
import { RiHomeLine } from "react-icons/ri";
import { Button, LinkButton } from "@/components/elements/Button";
import {
  HiOutlineCalendar,
  HiOutlinePlusCircle,
  HiOutlineUser,
} from "react-icons/hi";
import { LuHeartHandshake } from "react-icons/lu";
import { usePathname } from "next/navigation";

const Navbar:FC = () => {
  const pathname = usePathname();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const isHome = pathname === "/";
  const isCreate =
    pathname === "/service/create/hangout" ||
    pathname === "/service/create/schedule";
  const isProfile = pathname === "/service/profile";
  const handleCreateModalOpen = () => {
    if (isCreateModalOpen) {
      setIsCreateModalOpen(false);
    } else {
      setIsCreateModalOpen(true);
    }
  };

  return (
    <div>
      {isCreateModalOpen && (
        <div className="fixed -bottom-16 w-52 h-52 left-[calc(50%-104px)] bg-new-white rounded-full -z-10 p-8 animate-slide-fwd-top">
          <div className="flex justify-between text-navy-3 px-3">
            <LinkButton
              className=""
              href="/service/create/hangout"
              onClick={handleCreateModalOpen}
            >
              <LuHeartHandshake className="w-7 h-7" />
              <p>遊び</p>
            </LinkButton>
            <LinkButton
              className=""
              href="/service/create/schedule"
              onClick={handleCreateModalOpen}
            >
              <HiOutlineCalendar className="w-7 h-7" />
              <p>予定</p>
            </LinkButton>
          </div>
          <div className="w-7 h-7 mx-auto mt-3 bg-new-white">
            <Button
              className="w-7 h-7 text-navy-3 rotate-45"
              onClick={handleCreateModalOpen}
            >
              <HiOutlinePlusCircle className="w-7 h-7" />
            </Button>
          </div>
        </div>
      )}
      <div className={`${isCreateModalOpen&&"opacity-50"} ${"bg-new-white rounded-t-lg w-screen h-16 mx-auto flex items-center justify-between px-6 z-[1]"}`}>
        <LinkButton
          className={`${!isHome && "opacity-30"} ${"w-7 h-7 text-navy-3 disabled:opacity-30"}`}
          href="/"
          disabled={isCreateModalOpen}
        >
          <RiHomeLine className="w-7 h-7" />
          <div
            className="w-1 h-1 rounded-full bg-navy-3 mx-auto mt-1"
            hidden={!isHome}
          ></div>
        </LinkButton>
        <div className={isCreateModalOpen ? "opacity-0":""}>
          <Button
            className={`${!isCreate && "opacity-30"} ${"w-7 h-7 text-navy-3"}`}
            onClick={handleCreateModalOpen}
          >
            <HiOutlinePlusCircle className="w-7 h-7" />
          </Button>
          <div
            className="w-1 h-1 rounded-full bg-navy-3 mx-auto"
            hidden={!isCreate}
          ></div>
        </div>
        <LinkButton
          className={`${!isProfile && "opacity-30"} ${"w-7 h-7 text-navy-3 disabled:opacity-30"}`}
          href="/service/profile"
          disabled={isCreateModalOpen}
        >
          <HiOutlineUser className="w-7 h-7" />
          <div
            className="w-1 h-1 rounded-full bg-navy-3 mx-auto mt-1"
            hidden={!isProfile}
          ></div>
        </LinkButton>
      </div>
    </div>
  );
};

export default Navbar;
