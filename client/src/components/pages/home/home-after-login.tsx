"use client";
import React, { FC } from "react";
import { Matching } from "@/api/matching/type";
import { User } from "@/api/user/type";
import { Text } from "@/components/elements/Text";
import { Title } from "@/components/elements/Title";
import { MatchingList } from "@/components/pages/home/matching-list";

type HomeAfterLoginProps = {
  matchings: Matching[];
  user: User;
};

export const HomeAfterLogin: FC<HomeAfterLoginProps> = ({ matchings, user }) => {
  return (
    <div className="home-bg text-navy-3 px-[15px] h-screen pt-32">
      <div className="pl-[15px]">
        <div className=" pb-[100px]">
          <Title fontsize="text-[32px]">マッチング一覧</Title>
        </div>
        <div className="py-7">
          <Text>
            {user && user.name}さん、今日は{matchings ? matchings.length : 0}件マッチングしました！
          </Text>
        </div>
      </div>
      <div className="pt-6">
        <MatchingList matchings={matchings} />
      </div>
    </div>
  );
};
