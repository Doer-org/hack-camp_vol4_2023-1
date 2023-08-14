import { Text } from "@/components/elements/Text";
import React, { FC } from "react";
import { LinkButton } from "@/components/elements/Button";
import { User } from "@/apollo/generated/graphql";

type ProfileOverviewProps = {
  user:User
}

export const ProfileOverview:FC<ProfileOverviewProps> = ({user}) => {
  const number_friend = 2;
  return (
    <div>
      <div className="flex gap-x-6">
        <div className="bg-navy-1 rounded-full w-12 h-12 mt-1"></div>
        <div>
          <Text fontsize="text-[32px]" style="font-bold text-new-white">
            {user.name}
          </Text>
          <Text fontsize="text-[18px]" style="text-new-white">{user.description!==""&& user.description}</Text>
          <LinkButton href="/profile/friends" className="py-1">
            <Text fontsize="text-[18px]" style="text-new-white">friend: {number_friend}</Text>
          </LinkButton>
        </div>
      </div>
      <div className="flex justify-between p-8 pt-24">
        <div className="w-28 h-9">
          <LinkButton
            className="bg-new-blue-700 text-new-white rounded-lg w-28 h-9"
            href="/profile/edit"
          >
            Edit
          </LinkButton>
        </div>
        <div className="w-28 h-9">
          <LinkButton className="bg-new-blue-700 text-new-white rounded-lg w-28 h-9" href={`/profile/share`}>
            Share
          </LinkButton>
        </div>
      </div>
    </div>
  );
};
