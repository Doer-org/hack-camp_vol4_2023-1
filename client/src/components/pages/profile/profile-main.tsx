import React, { FC } from "react";
import { Friend } from "@/api/friend/type";
import { Hangout } from "@/api/hangout/type";
import { Schedule } from "@/api/schedule/type";
import { User } from "@/api/user/type";
import { ProfileMylist } from "@/components/pages/profile/profile-mylist";
import { ProfileOverview } from "@/components/pages/profile/profile-overview";

type ProfileMainProps = {
  user: User;
  hangouts: Hangout[];
  schedules: Schedule[];
  friends: Friend[];
};

export const ProfileMain: FC<ProfileMainProps> = ({ user, hangouts, schedules, friends }) => {
  const number_friends = friends ? friends.length : 0;
  return (
    <div className="user-bg py-16 h-screen">
      <div className="w-[320px] mx-auto">
        <ProfileOverview user={user} number_friends={number_friends} />
        <ProfileMylist hangouts={hangouts} schedules={schedules} />
      </div>
    </div>
  );
};
