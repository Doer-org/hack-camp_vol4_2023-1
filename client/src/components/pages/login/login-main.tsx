import React, { FC } from "react";
import { Text } from "@/components/elements/Text";
import { Title } from "@/components/elements/Title";
import { LoginForm } from "@/components/pages/login/login-form";

export const LoginMain: FC = () => {
  return (
    <div className="login-bg h-screen w-screen p-8">
      <div className="pt-14">
        <Title>LOGIN</Title>
        <div className="py-16 pt-44">
          <Text fontsize="text-[20px]" style="text-center font-semibold">
            新たな世界へ飛び込みましょう！
          </Text>
        </div>
      </div>
      <LoginForm />
    </div>
  );
};
