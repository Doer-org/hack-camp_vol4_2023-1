import { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import React from "react";
import { RootLayout } from "@/components/layout/Layout";
import { FriendsCloseButton } from "@/components/pages/profile/friends/friends-close-button";
import { FriendsList } from "@/components/pages/profile/friends/friends-list";

const Friends: NextPage = () => {
  return (
    <RootLayout meta="友達を表示">
      <div className="p-10 h-screen">
        <div>
          <FriendsCloseButton />
        </div>
        <FriendsList />
      </div>
    </RootLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = parseCookies(context);
  const user = JSON.parse(cookies.user);
  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: `/login`,
      },
    };
  }

  return {
    props: {
      id: user ? user.data.id : null,
    },
  };
};

export default Friends;
