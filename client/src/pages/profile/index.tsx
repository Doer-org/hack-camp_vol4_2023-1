import { ProfileMylist } from "@/components/pages/Profile/profile-mylist";
import { ProfileOverview } from "@/components/pages/Profile/profile-overview";
import React from "react";
import { RootLayout } from "../../components/layout/Layout";

const Profile = () => {
  return (
    <RootLayout>
      <div className="w-[320px] mx-auto py-16 h-screen">
        <div className="">
          <ProfileOverview />
          <div>
            <ProfileMylist />
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default Profile;
