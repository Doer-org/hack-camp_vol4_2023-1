import { Text } from "@/components/elements/Text";
import { ProfileMylist } from "@/components/service/Profile/profile-mylist";
import { ProfileOverview } from "@/components/service/Profile/profile-overview";
import React from "react";

const Profile = () => {
  return (
    <div className="w-[320px] mx-auto py-16">
      <div className="">
        <ProfileOverview />
        <div>
          <ProfileMylist />
        </div>
      </div>
    </div>
  );
};

export default Profile;
