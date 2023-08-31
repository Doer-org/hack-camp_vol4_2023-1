import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import { FriendsRequestsList } from "./friends-requests-list";
import FriendsToggle from "./friends-toggle";
import { Friend, resFriends } from "@/api/friend/type";
import { FriendsCloseButton } from "@/components/pages/profile/friends/friends-close-button";
import { FriendsList } from "@/components/pages/profile/friends/friends-list";

type FriendMainProps = {
  user_id: string;
  friends: Friend[];
  requests: Friend[];
};

export const FriendsMain: FC<FriendMainProps> = ({ user_id, friends, requests }) => {
  const [isFriends, setIsFriends] = useState(true);

  return (
    <div>
      <div className="p-10 h-screen">
        <FriendsCloseButton />
        <FriendsToggle isFriends={isFriends} setIsFriends={setIsFriends} />
        {isFriends ? <FriendsList friends={friends} /> : <FriendsRequestsList requests={requests} user_id={user_id} />}
      </div>
    </div>
  );
};
