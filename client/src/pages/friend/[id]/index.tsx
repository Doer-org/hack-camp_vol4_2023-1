import { RootLayout } from "@/components/layout/Layout";
import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import { FriendMain } from "@/components/pages/friend/friend-main";

type Props = {
  user_id: string;
};

const Friend: NextPage<Props> = ({}) => {
  return (
    <RootLayout meta={`{"friend"}`}>
      <FriendMain />
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
      user_id: user ? user.id : null,
    },
  };
};

export default Friend;
