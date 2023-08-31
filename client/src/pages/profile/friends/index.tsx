import { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import React from "react";
import { getRequestsByUserId, getFriendsbyUserId } from "@/api/friend";
import { resFriends } from "@/api/friend/type";
import { RootLayout } from "@/components/layout/Layout";
import { FriendsMain } from "@/components/pages/profile/friends/friends-main";

type Props = {
  user_id: string;
  friends: resFriends;
  requests: resFriends;
};

const Friends: NextPage<Props> = ({ user_id, friends, requests }) => {
  return (
    <RootLayout meta="友達を表示">
      <FriendsMain user_id={user_id} friends={friends.data} requests={requests.data} />
    </RootLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = parseCookies(context);
  if (!cookies.user) {
    return {
      redirect: {
        permanent: false,
        destination: `/login`,
      },
    };
  }
  const user_id = String(cookies.user);
  if (!user_id) {
    return {
      redirect: {
        permanent: false,
        destination: `/login`,
      },
    };
  }
  const { friendData: friends } = await getFriendsbyUserId({ user_id });
  const { friendData: requests } = await getRequestsByUserId({ user_id });

  return {
    props: {
      id: user_id ? user_id : null,
      friends: friends ? friends : null,
      requests: requests ? requests : null,
    },
  };
};

export default Friends;
