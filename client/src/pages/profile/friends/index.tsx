import { RootLayout } from "@/components/layout/Layout";
import { FriendsCloseButton } from "@/components/pages/profile/friends/friends-close-button";
import React from "react";
import { FriendsList } from "@/components/pages/profile/friends/friends-list";
import { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";

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
  console.log(cookies.user);
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
      id: user ? user.id : null,
    },
  };
};

export default Friends;
