import { Text } from "@/components/elements/Text";
import { Title } from "@/components/elements/Title";
import { RootLayout } from "@/components/layout/Layout";
import { HangoutForm } from "@/components/pages/Create/Hangout/hangout-form";
import React from "react";

const Hangout = () => {
  return (
    <RootLayout>
      <div className="p-10 py-20 h-screen">
        <Title fontsize="text-[24px]">
          したいことを
          <br />
          登録しましょう！
        </Title>
        <div className="py-4">
          <Text>ooさんは何をして遊びたいですか？</Text>
        </div>
        <div>
          <HangoutForm />
        </div>
      </div>
    </RootLayout>
  );
};

export default Hangout;
