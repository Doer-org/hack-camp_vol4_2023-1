"use client";
import { Button } from "@/components/elements/Button";
import React, { FC, useState } from "react";
import { HomeModalLogin } from "./home-modal-login";

type HomeBeforeLoginProps = {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

export const HomeBeforeLogin: FC<HomeBeforeLoginProps> = ({ setIsLogin }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleIsOpenModal = () => {
    setIsOpenModal(true);
  };
  return isOpenModal ? (
   <HomeModalLogin setIsLogin={setIsLogin} />
  ) : (
    <div className="w-80 mx-auto pt-32">
      <Button
        className="bg-navy-3 text-new-white w-80 h-14 rounded-lg text-[32px] font-semibold"
        onClick={handleIsOpenModal}
      >
        Sign In
      </Button>
    </div>
  );
};
