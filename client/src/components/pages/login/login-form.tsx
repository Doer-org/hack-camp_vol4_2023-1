"use client";

import auth from "@/firebase/client";
import React, { FC } from "react";
import { signIn as signInByNextAuth } from "next-auth/react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Button } from "@/components/elements/Button";
import { RiGoogleFill } from "react-icons/ri";
import { parseCookies, setCookie } from "nookies";
import { createUser } from "@/api/user";
export const LoginForm: FC = () => {
  const login = async () => {
    const provider = new GoogleAuthProvider();
    const cred = await signInWithPopup(auth, provider);
    const inputData = {
      id: cred.user.uid,
      name: cred.user.displayName ? cred.user.displayName : "",
      description: "",
      image: "",
    };

    const { userData, error } = await createUser(inputData);
    if (error) {
      console.log("Error:", error);
    }
    console.log(userData);

    // localStorage.setItem("user", JSON.stringify(userData));

    const cookies = parseCookies();
    setCookie(null, "user", JSON.stringify(userData))
    const idToken = await cred.user.getIdToken();
    await signInByNextAuth("credentials", {
      idToken,
      callbackUrl: "/",
    });
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
