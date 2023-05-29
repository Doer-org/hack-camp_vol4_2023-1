"use client";
import React, { useState } from "react";
import { HomeAfterLogin } from "./home-after-login";
import { HomeBeforeLogin } from "./home-before-login";

export const HomeComponent = () => {
  const [isLogin, setIsLogin] = useState(false);
  return isLogin ? (
    <HomeAfterLogin />
  ) : (
    <HomeBeforeLogin setIsLogin={setIsLogin} />
  );
};
