"use client";

import { Text } from "@/components/elements/Text";
import { RootLayout } from "@/components/layout/Layout";
import { LoginForm } from "@/components/pages/Login/login-form";
import { NextPage } from "next";
import React from "react";

const Login:NextPage = () => {
  return (
    <RootLayout meta="ログイン">
      <div className="h-screen w-screen p-8 py-32">
        <div className="text-center">
          <Text fontsize="text-[32px]">
            <span className="font-bold text-[36px]">Google</span>で<br />
            ログインする
          </Text>
          <Text style="py-8">新たな世界へ飛び込みましょう！</Text>
        </div>
        <LoginForm />
      </div>
    </RootLayout>
  );
};

export default Login;
