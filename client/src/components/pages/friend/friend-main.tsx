import { useRouter } from "next/router";
import React, { FC } from "react";
import { FriendShareButton } from "./friend-share-button";
import { Hangout } from "@/api/hangout/type";
import { Schedule } from "@/api/schedule/type";
import { User } from "@/api/user/type";
import { FriendMylist } from "@/components/pages/friend/friend-mylist";
import { FriendOverview } from "@/components/pages/friend/friend-overview";

type FriendMainProps = {
  user: User;
  hangouts: Hangout[];
  schedules: Schedule[];
  number_friends: number;
  access_user_id: string;
};

export const FriendMain: FC<FriendMainProps> = ({ user, hangouts, schedules, number_friends, access_user_id }) => {
  const router = useRouter();
  const isMatching = router.query.from === "matching";
  const url = `${process.env.NEXT_PUBLIC_CLIENT_URL}/friend/${access_user_id}/add`;
  return (
    <div className="user-bg py-16 h-screen">
      <div className="w-[320px] mx-auto">
        <FriendOverview friend={user} number_friends={number_friends} />
        <FriendMylist hangouts={hangouts} schedules={schedules} />
        {isMatching && <FriendShareButton url={url} />}
      </div>
    </div>
  );
};
