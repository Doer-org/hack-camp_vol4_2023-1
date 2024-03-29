"use client";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { signIn as signInByNextAuth } from "next-auth/react";
import { parseCookies, setCookie } from "nookies";
import React, { FC } from "react";
import { RiGoogleFill } from "react-icons/ri";
import { createUser } from "@/api/user";
import { resUser } from "@/api/user/type";
import { Button } from "@/components/elements/Button";
import auth from "@/firebase/client";

export const LoginForm: FC = () => {
  const login = async () => {
    const provider = new GoogleAuthProvider();
    const cred = await signInWithPopup(auth, provider);
    const inputData = {
      id: cred.user.uid,
      name: cred.user.displayName ? cred.user.displayName : "",
      description: "",
      image: cred.user.photoURL ? cred.user.photoURL : "",
    };

    const { userData, error } = await createUser(inputData);
    if (error) {
      setCookie(null, "user", cred.user.uid);
    } else {
      const user: resUser = userData ? userData : { data: { id: "", name: "", image: "", description: "" } };
      setCookie(null, "user", user.data.id);
    }
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
