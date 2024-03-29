import Image from "next/image";
import React, { FC } from "react";
import { User } from "@/api/user/type";
import { ExternalLinkButton, LinkButton } from "@/components/elements/Button";
import { Text } from "@/components/elements/Text";

type ProfileOverviewProps = {
  user: User;
  number_friends: number;
};

export const ProfileOverview: FC<ProfileOverviewProps> = ({ user, number_friends }) => {
  const url = `${process.env.NEXT_PUBLIC_CLIENT_URL}/friend/${user.id}/add`;
  return (
    <div>
      <div className="flex gap-x-6">
        <div className="rounded-full w-12 h-12 mt-1">
          <Image src={user.image} alt={"user image"} width={48} height={48} className="rounded-full"></Image>
        </div>
        <div>
          <Text fontsize="text-[32px]" style="font-bold text-new-white">
            {user.name}
          </Text>
          <Text fontsize="text-[18px]" style="text-new-white">
            {user.description !== "" && user.description}
          </Text>
          <LinkButton href="/profile/friends" className="py-1">
            <Text fontsize="text-[18px]" style="text-new-white">
              friends: {number_friends}
            </Text>
          </LinkButton>
        </div>
      </div>
      <div className="flex justify-between p-8 pt-28">
        <div className="w-28 h-9">
          <LinkButton className="bg-new-blue-700 text-new-white rounded-lg w-28 h-9" href="/profile/edit">
            Edit
          </LinkButton>
        </div>
        <div className="w-28 h-9">
          <ExternalLinkButton
            className="bg-new-blue-700 text-new-white rounded-lg"
            href={`https://social-plugins.line.me/lineit/share?url=${url}`}
            blank={true}
          >
            Share
          </ExternalLinkButton>
        </div>
      </div>
    </div>
  );
};
