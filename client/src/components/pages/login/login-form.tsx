"use client";
import { auth } from "@/firebase/client";
import React, { FC } from "react";
import { signIn as signInByNextAuth } from "next-auth/react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { Button } from "@/components/elements/Button";
import { RiGoogleFill } from "react-icons/ri";
import { CreateUser } from "@/api/mutation";

export const LoginForm:FC = () => {
  const router = useRouter();
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
    const idToken = await cred.user.getIdToken();
    await signInByNextAuth("credentials", {
      idToken,
      callbackUrl: "/",
    });
  };
  return (
    <div className="w-40 mx-auto py-12">
      <Button
        className="bg-navy-3 text-new-white text-[20px] flex justify-center gap-3 items-center w-40 h-12 rounded-lg"
        onClick={login}
      >
        <RiGoogleFill className="w-7 h-7" />
        Log in
      </Button>
    </div>
  );
};
