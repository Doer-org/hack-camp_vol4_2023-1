import { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import React from "react";
import { getUserById } from "@/api/user";
import { resUser } from "@/api/user/type";
import { RootLayout } from "@/components/layout/Layout";
import { AddMain } from "@/components/pages/friend/add/add-main";

type Props = {
  user_id: string;
  friend: resUser;
};

const FriendAdd: NextPage<Props> = ({ user_id, friend }) => {
  return (
    <RootLayout meta="友達を追加する">
      <AddMain user_id={user_id} friend={friend.data} />
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
  console.log(user_id);
  if (!user_id) {
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
      user_id: user_id ? user_id : null,
      friend: friend ? friend : null,
    },
  };
};

export default FriendAdd;
