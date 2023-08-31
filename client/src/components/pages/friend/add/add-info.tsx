import Image from "next/image";
import React, { FC } from "react";
import { User } from "@/api/user/type";
import { Text } from "@/components/elements/Text";

type AddInfoProps = {
  friend: User;
};

export const AddInfo: FC<AddInfoProps> = ({ friend }) => {
  return (
    <div className="bg-white p-8 rounded-lg">
      <div className="rounded-full flex justify-center">
        <Image src={friend.image} alt={"user image"} width={128} height={128} className="rounded-full"></Image>
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
