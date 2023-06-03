import { RootLayout } from "@/components/layout/Layout";
import { FriendsCloseButton } from "@/components/pages/Profile/Friends/friends-close-button";
import { NextPage } from "next";
import React from "react";
import { FriendsList } from "@/components/pages/Profile/Friends/friends-list";

const Friends: NextPage = () => {
  return (
    <RootLayout meta="友達を表示">
      <div className="p-10 h-screen">
        <div>
          <FriendsCloseButton />
        </div>
        <FriendsList />
      </div>
    </RootLayout>
  );

};

export default Friends;
