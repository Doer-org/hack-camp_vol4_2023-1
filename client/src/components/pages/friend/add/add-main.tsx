import { useRouter } from "next/router";
import React, { FC } from "react";
import { createFriend } from "@/api/friend/index";
import { User } from "@/api/user/type";
import { AddButtons } from "@/components/pages/friend/add/add-buttons";
import { AddInfo } from "@/components/pages/friend/add/add-info";

type AddMainProps = {
  user_id: string;
  friend: User;
};

export const AddMain: FC<AddMainProps> = ({ user_id, friend }) => {
  const router = useRouter();
  const { id } = router.query;
  const friendAddData = {
    user_id: user_id,
    friend_id: id as string,
    accept: false,
  };

  const handleSubmit = async () => {
    const { friendData: friend, error: err } = await createFriend(friendAddData);
    if (err) {
      console.log("Error:", err);
    }
    console.log(friend);
    router.push(`/friend/${id}`);
  };
  return (
    <div className="addfriend-bg h-screen p-4">
      <div className="flex justify-center">
        <div className="h-80 w-60 absolute m-auto top-[calc(50%-220px)] text-center text-new-black">
          <AddInfo friend={friend} />
          <AddButtons handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};
