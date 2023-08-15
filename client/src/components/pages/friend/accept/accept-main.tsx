import { useRouter } from "next/router";
import React, { FC } from "react";
import { CreateFriend } from "@/api/mutation";
import { AcceptButtons } from "@/components/pages/friend/accept/accept-buttons";
import { AcceptInfo } from "@/components/pages/friend/accept/accept-info";

type AcceptMainProps = {
  user_id: string;
};

export const AcceptMain: FC<AcceptMainProps> = ({ user_id }) => {
  const router = useRouter();
  const { id } = router.query;
  const userData = {
    user_id: user_id,
    friend_id: id as string,
  };

  const handleSubmit = async () => {
    const { data: friend, err } = await CreateFriend(userData);
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
          <AcceptInfo />
          <AcceptButtons handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};
