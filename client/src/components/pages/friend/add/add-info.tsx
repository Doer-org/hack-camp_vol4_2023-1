import React, { FC } from "react";
import { User } from "@/api/user/type";
import { Text } from "@/components/elements/Text";

type AddInfoProps = {
  friend: User;
};

export const AddInfo: FC<AddInfoProps> = ({ friend }) => {
  console.log(friend);
  return (
    <div className="bg-white p-8 rounded-lg">
      <div className="">
        {/* insert an image of friend */}
        <div className="w-32 h-32 bg-gray-500 text-gray-500 rounded-full m-auto">hello</div>
      </div>
      <div className="mt-10">
        <Text style="font-bold" fontsize="text-[20px]">
          {friend.name}
        </Text>
        <Text fontsize="text-[14px]">{friend.description}</Text>
      </div>
    </div>
  );
};
