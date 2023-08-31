import { useRouter } from "next/router";
import React, { FC } from "react";
import { RiCheckLine, RiCloseLine } from "react-icons/ri";
import { createFriend, deleteFriend, updateFriend } from "@/api/friend";
import { Friend } from "@/api/friend/type";
import { Button } from "@/components/elements/Button";

type FriendsAcceptButtonsProps = {
  friend: Friend;
};

export const FriendsAcceptButtons: FC<FriendsAcceptButtonsProps> = ({ friend }) => {
  const router = useRouter();
  const handleAdd = async () => {
    const acceptData = {
      accept: true,
      friend_id: friend.friend_id,
      id: friend.id,
      user_id: friend.user_id,
    };
    const { error: acceptError } = await updateFriend(acceptData);
    if (acceptError) {
      console.log("error from accept: ", acceptError);
    }

    const friendData = {
      accept: true,
      friend_id: friend.user_id,
      user_id: friend.friend_id,
    };
    const { error: createError } = await createFriend(friendData);
    if (createError) {
      console.log("error from create: ", createError);
    }
    router.reload();
  };

  const handleReject = async () => {
    const { error } = await deleteFriend({ id: friend.id });
    if (error) {
      console.log("error from rejection: ", error);
    }
  };

  return (
    <div className="flex justify-end gap-3">
      <Button className="h-6 my-auto" onClick={handleAdd}>
        <div className="w-6 h-6">
          <RiCheckLine className="w-full h-full" />
        </div>
      </Button>
      <Button className="h-6 my-auto" onClick={handleReject}>
        <div className="w-6 h-6">
          <RiCloseLine className="w-full h-full" />
        </div>
      </Button>
    </div>
  );
};
