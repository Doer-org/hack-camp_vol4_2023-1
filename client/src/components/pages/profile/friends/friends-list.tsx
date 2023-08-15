import React from "react";
import { Text } from "@/components/elements/Text";
import { Title } from "@/components/elements/Title";

export const FriendsList = () => {
  return (
    <div>
      <div className="py-5">
        <Title fontsize="text-[24px]">フレンド一覧</Title>
      </div>
      <div>
        <hr />
        <div className="flex gap-4 py-4">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <Text>Name</Text>
        </div>
      </div>
    </div>
  );
};
