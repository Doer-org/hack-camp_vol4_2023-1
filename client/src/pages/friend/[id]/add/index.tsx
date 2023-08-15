import { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import React from "react";
import { RootLayout } from "@/components/layout/Layout";
import { AcceptMain } from "@/components/pages/friend/accept/accept-main";

type Props = {
  user_id: string;
};

const FriendAdd: NextPage<Props> = ({ user_id }) => {
  return (
    <RootLayout meta="友達を追加する">
      <AcceptMain user_id={user_id} />
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

export default FriendAdd;
