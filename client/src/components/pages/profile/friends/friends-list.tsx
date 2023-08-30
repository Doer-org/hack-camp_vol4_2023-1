import React, { FC } from "react";
import { Friend } from "@/api/friend/type";
import { LinkButton } from "@/components/elements/Button";
import { Text } from "@/components/elements/Text";

type FriendsListProps = {
  friends: Friend[];
};

export const FriendsList: FC<FriendsListProps> = ({ friends }) => {
  return (
    <div>
      {friends ? (
        <div>
          {friends.map((friend, index) => {
            return (
              <div key={index}>
                {index !== 0 && <hr />}
                <LinkButton className="flex gap-4 py-4" href={`/friend/${friend.friend_id}`}>
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <Text>{friend.friend_name}</Text>
                </LinkButton>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <Text>友達はまだいません</Text>
        </div>
      )}
    </div>
  );
};
