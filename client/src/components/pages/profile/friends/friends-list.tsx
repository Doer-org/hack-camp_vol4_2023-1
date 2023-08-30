import React from "react";
import { LinkButton } from "@/components/elements/Button";
import { Text } from "@/components/elements/Text";
import { Title } from "@/components/elements/Title";

export const FriendsList = () => {
  const friend = { id: "1" };
  return (
    <div>
      <div className="py-5">
        <Title fontsize="text-[24px]">フレンド一覧</Title>
      </div>
      <div>
        <hr />
        <LinkButton className="flex gap-4 py-4" href={`/friend/${friend.id}`}>
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <Text>Name</Text>
        </LinkButton>
      </div>
    </div>
  );
};
