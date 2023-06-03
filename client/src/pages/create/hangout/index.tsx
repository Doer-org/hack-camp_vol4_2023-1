import { Text } from "@/components/elements/Text";
import { Title } from "@/components/elements/Title";
import { RootLayout } from "@/components/layout/Layout";
import { HangoutForm } from "@/components/pages/Create/Hangout/hangout-form";
import { NextPage } from "next";
import React from "react";

const Hangout: NextPage = () => {
  return (
    <RootLayout meta="遊びを登録する">
      <div className="hangout-bg p-10 py-20 h-screen">
        <div className="py-4">
          <Title fontsize="text-[24px]">
            したいことを
            <br />
            登録しましょう！
          </Title>
        </div>
        <div className="pt-20 ">
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
