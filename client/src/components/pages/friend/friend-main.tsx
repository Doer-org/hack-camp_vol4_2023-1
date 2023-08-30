import React, { FC } from "react";
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
};

export const FriendMain: FC<FriendMainProps> = ({ user, hangouts, schedules, number_friends }) => {
  return (
    <div className="user-bg py-16 h-screen">
      <div className="w-[320px] mx-auto">
        <FriendOverview friend={user} number_friends={number_friends} />
        <FriendMylist hangouts={hangouts} schedules={schedules} />
      </div>
    </div>
  );
};
