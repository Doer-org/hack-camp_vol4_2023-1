import { Text } from "@/components/elements/Text";
import React, { FC } from "react";
import { Button, LinkButton } from "../../elements/Button";

export const ProfileOverview:FC = () => {
  const description = "hogehogehogehoge";
  const number_friend = 2
  return (
    <div>
      <div className="flex gap-x-6">
        <div className="bg-navy-1 rounded-full w-12 h-12 mt-2"></div>
        <div>
          <Text fontsize="text-[32px]" style="font-bold">
            user
          </Text>
          <Text fontsize="text-[18px]">{description}</Text>
          <Text fontsize="text-[18px]">friend: {number_friend}</Text>
        </div>
      </div>
      <div className="flex justify-between p-8">
        <div className="w-28 h-9">
          <LinkButton className="bg-navy-3 text-new-white rounded-lg w-28 h-9" href="/profile/edit">
            Edit
          </LinkButton>
        </div>
        <div className="w-28 h-9">
          <Button className="bg-navy-3 text-new-white rounded-lg w-28 h-9">
            Share
          </Button>
        </div>
      </div>
    </div>
  );
};
