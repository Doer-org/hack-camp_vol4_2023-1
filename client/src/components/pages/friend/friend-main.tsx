import React, { FC } from "react";
import { Hangout } from "@/api/hangout/type";
import { Schedule } from "@/api/schedule/type";
import { User } from "@/api/user/type";
import { FriendMylist } from "@/components/pages/friend/friend-mylist";
import { FriendOverview } from "@/components/pages/friend/friend-overview";

type FriendMainProps = {
  friend: User;
  hangouts: Hangout[];
  schedules: Schedule[];
};

export const FriendMain: FC<FriendMainProps> = ({ friend, hangouts, schedules }) => {
  return (
    <div className="user-bg py-16 h-screen">
      <div className="w-[320px] mx-auto">
        <FriendOverview friend={friend} />
        <FriendMylist hangouts={hangouts} schedules={schedules} />
      </div>
    </div>
  );
};
