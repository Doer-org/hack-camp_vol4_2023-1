"use client";
import { initializeFirebase } from "@/firebase/firebase";
import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { Button } from "@/components/elements/Button";
import { RiGoogleFill } from "react-icons/ri";

export const LoginForm = () => {
  const router = useRouter();
  const login = async () => {
    initializeFirebase();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const cred = await signInWithPopup(auth, provider);
    const userData = {
      firebase_id: cred.user.uid,
      name: cred.user.displayName,
    };

    localStorage.setItem("user", JSON.stringify(userData));
    router.push("/");
  };
  return (
    <div className="w-40 mx-auto py-12">
      <Button className="bg-navy-3 text-new-white text-[24px] flex justify-center gap-3 items-center font-bold w-40 h-12 rounded-lg" onClick={login}>
        <RiGoogleFill className="w-7 h-7" />
        Log in
      </Button>
    </div>
  );
};
