"use client";

import { Text } from "@/components/elements/Text";
import { RootLayout } from "@/components/layout/Layout";
import { LoginForm } from "@/components/pages/Login/login-form";
import { NextPage } from "next";
import React from "react";
import { Title } from "@/components/elements/Title";

const Login: NextPage = () => {
  return (
    <RootLayout meta="ログイン">
      <div className="login-bg h-screen w-screen p-8">
        <div className="pt-14">
          <Title>LOGIN</Title>
          <div className="py-16 pt-44">
            <Text fontsize="text-[20px]" style="text-center font-semibold">新たな世界へ飛び込みましょう！</Text>
          </div>
        </div>
        <LoginForm />
      </div>
    </RootLayout>
  );
};

export default Login;
