import Image from "next/image";
import React, { FC } from "react";
import { FriendsAcceptButtons } from "./friends-accept-buttons";
import { Friend } from "@/api/friend/type";
import { Text } from "@/components/elements/Text";

type FriendsRequestsListProps = {
  requests: Friend[];
  user_id: string;
};

export const FriendsRequestsList: FC<FriendsRequestsListProps> = ({ requests, user_id }) => {
  return (
    <div>
      {requests ? (
        <div>
          {requests.map((request, index) => {
            return (
              <div key={index}>
                {index !== 0 && <hr />}
                <div className="flex justify-between">
                  <div className="flex gap-4 py-4">
                    <div className="rounded-full w-10 h-10 mt-1">
                      <Image
                        src={request.friend_image}
                        alt={"user image"}
                        width={40}
                        height={40}
                        className="rounded-full"
                      ></Image>
                    </div>
                    <Text>{request.friend_name}</Text>
                  </div>
                  <FriendsAcceptButtons friend={request} />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <Text>友達申請はまだありません</Text>
        </div>
      )}
    </div>
  );
};
