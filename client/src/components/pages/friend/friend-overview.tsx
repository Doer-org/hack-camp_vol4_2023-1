import React, { FC } from "react";
import { User } from "@/api/user/type";
import { Text } from "@/components/elements/Text";

type FriendOverviewProps = {
  friend: User;
  number_friends: number;
};
export const FriendOverview: FC<FriendOverviewProps> = ({ friend, number_friends }) => {
  return (
    <div>
      <div className="flex gap-x-6">
        <div className="bg-navy-1 rounded-full w-12 h-12 mt-1"></div>
        <div>
          <Text fontsize="text-[32px]" style="font-bold text-new-white">
            {friend.name}
          </Text>
          <Text fontsize="text-[18px]" style="text-new-white">
            {friend.description}
          </Text>
          <Text fontsize="text-[18px]" style="text-new-white">
            friend: {number_friends}
          </Text>
        </div>
      </div>
    </div>
  );
};
