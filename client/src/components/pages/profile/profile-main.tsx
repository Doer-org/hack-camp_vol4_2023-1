import React, { FC } from "react";
import { ProfileOverview } from "@/components/pages/profile/profile-overview";
import { ProfileMylist } from "@/components/pages/profile/profile-mylist";
import { User } from "@/api/user/type";
import { Hangout } from "@/api/hangout/type";
import { Schedule } from "@/api/schedule/type";

type ProfileMainProps = {
  user: User;
  hangouts: Hangout[];
  schedules: Schedule[];
};

export const ProfileMain: FC<ProfileMainProps> = ({
  user,
  hangouts,
  schedules,
}) => {
  return (
    <div className="user-bg py-16 h-screen">
      <div className="w-[320px] mx-auto">
        <ProfileOverview user={user} />
        <ProfileMylist hangouts={hangouts} schedules={schedules} />
      </div>
    </div>
  );
};
