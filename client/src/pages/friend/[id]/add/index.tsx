import { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import React from "react";
import { getUserById } from "@/api/user";
import { resUser } from "@/api/user/type";
import { RootLayout } from "@/components/layout/Layout";
import { AddMain } from "@/components/pages/friend/add/add-main";

type Props = {
  userId: string;
  friend: resUser;
};

const FriendAdd: NextPage<Props> = ({ userId, friend }) => {
  return (
    <RootLayout meta="友達を追加する">
      <AddMain user_id={userId} friend={friend.data} />
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

  const query = context.query;
  const id = String(query.id);
  const { userData: friend } = await getUserById({ id });

  return {
    props: {
      userId: user ? user.data.id : null,
      friend: friend ? friend : null,
    },
  };
};

export default FriendAdd;
