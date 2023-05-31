import { Button } from "@/components/elements/Button";
import React, { FC } from "react";
import { HiLockClosed, HiOutlineMail } from "react-icons/hi";

type HomeModalLoginProps = {
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HomeModalLogin:FC<HomeModalLoginProps> = ({setIsLogin}) => {
    const handleIsLogin = () => {
        setIsLogin(true);
    }
  return (
    <div className="relative bg-new-white w-screen h-screen">
      <div className="pt-32">
        <form action="">
          <div className="mb-20 w-80 mx-auto">
            <div className="flex gap-2 text-navy-3">
              <HiOutlineMail className="w-6 h-6" />
              <p>email</p>
            </div>
            <input
              type="text"
              className="border-b border-navy-3 w-80 h-10 px-2 bg-new-white"
              placeholder="example@email.com"
            />
          </div>
          <div className="mb-20 w-80 mx-auto">
            <div className="flex gap-2 text-navy-3">
              <HiLockClosed className="w-6 h-6" />
              <p>password</p>
            </div>
            <input
              type="password"
              className="border-b border-navy-3 w-80 h-10 px-2  bg-new-white"
            />
          </div>
          <div className="w-80 mx-auto">
            <Button
              className="bg-navy-3 text-new-white w-80 h-14 rounded-lg text-[32px] font-semibold"
              onClick={handleIsLogin}
            >
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
