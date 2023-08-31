import Image from "next/image";
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
                <LinkButton className="flex gap-4 py-4 w-full" href={`/friend/${friend.friend_id}`}>
                  <div className="rounded-full w-10 h-10 mt-1">
                    <Image
                      src={friend.friend_image}
                      alt={"user image"}
                      width={40}
                      height={40}
                      className="rounded-full"
                    ></Image>
                  </div>
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
