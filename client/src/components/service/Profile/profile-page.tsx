"use client";
import React from "react";
import { ProfileMylist } from "./profile-mylist";

export const ProfileComponent = () => {
  return (
    <div className="">
      <div className="flex">
        <div className="bg-navy-1 rounded-full w-12 h-12"></div>
        <p className="text-[32px]">name</p>
      </div>
      <div>
        <ProfileMylist />
      </div>
    </div>
  );
};
