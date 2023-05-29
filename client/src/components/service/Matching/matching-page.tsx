"use client";
import React from "react";
import { MatchingList } from "./matching-list";

export const MatchingPage = () => {
  const matchingList = [
    {
      name: "hoge",
      event: "hoge",
      date: "2/10",
    },
  ];
  return (
    <div className="text-navy-3 pt-20 px-[15px]">
      <div className="pl-[15px]">
        <h1 className="font-bold text-[32px]">マッチング一覧</h1>
        <p className="py-4">OOさん、今日はx件マッチングしました！</p>
      </div>
      <div className="pt-6">
        <MatchingList matchingList={matchingList} />
      </div>
    </div>
  );
};
