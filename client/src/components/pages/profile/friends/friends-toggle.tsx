import React, { FC } from "react";
import { Button } from "@/components/elements/Button";

type FriendsToggleProps = {
  isFriends: boolean;
  setIsFriends: React.Dispatch<React.SetStateAction<boolean>>;
};

const FriendsToggle: FC<FriendsToggleProps> = ({ isFriends, setIsFriends }) => {
  return (
    <div className="flex justify-center py-8">
      <Button
        className={`${
          isFriends ? "bg-new-blue-700 text-new-white" : "opacity-60  hover:opacity-100"
        } ${"p-1 px-10 rounded-l-lg border-[1px]"}`}
        onClick={() => {
          setIsFriends(true);
        }}
      >
        Friends
      </Button>
      <Button
        className={`${
          !isFriends ? "bg-new-blue-700 text-new-white" : "opacity-60  hover:opacity-100"
        } ${"p-1 px-10 rounded-r-lg border-[1px]"}`}
        onClick={() => {
          setIsFriends(false);
        }}
      >
        Requests
      </Button>
    </div>
  );
};

export default FriendsToggle;
