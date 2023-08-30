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
                <div className="flex jus">
                  <div className="flex gap-4 py-4">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
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
