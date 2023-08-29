"use client";

import { NextPage } from "next";
import React from "react";
import { RootLayout } from "@/components/layout/Layout";
import { LoginMain } from "@/components/pages/login/login-main";

const Login: NextPage = () => {
  return (
    <RootLayout meta="ログイン">
      <LoginMain />
    </RootLayout>
  );
};

export default Login;
