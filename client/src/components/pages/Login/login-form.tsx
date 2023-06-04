"use client";

import auth from "@/firebase/client";
import React, { FC } from "react";
import { signIn as signInByNextAuth } from "next-auth/react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Button } from "@/components/elements/Button";
import { RiGoogleFill } from "react-icons/ri";
import { CreateUser } from "@/api/mutation";

export const LoginForm: FC = () => {
  const login = async () => {
    const provider = new GoogleAuthProvider();
    const cred = await signInWithPopup(auth, provider);
    const userData = {
      id: cred.user.uid,
      name: cred.user.displayName ? cred.user.displayName : "",
      description: "",
    };

    const { data, err } = await CreateUser(userData);
    if (err) {
      console.log("Error:", err);
    }
    console.log(data);

    localStorage.setItem("user", JSON.stringify(userData));
  };
  
  return (
    <div className="w-60 mx-auto">
      <Button
        className="bg-new-blue-700 text-new-white text-[20px] flex justify-center gap-3 items-center w-60 h-16 rounded-lg px-10"
        onClick={login}
      >
        <RiGoogleFill className="w-7 h-7" />
        Log in
      </Button>
    </div>
  );
};
