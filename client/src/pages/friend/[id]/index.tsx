import { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import React from "react";
import { RootLayout } from "@/components/layout/Layout";
import { FriendMain } from "@/components/pages/friend/friend-main";

type Props = {
  user_id: string;
};

const Friend: NextPage<Props> = ({}) => {
  const friend = {
    id: "1",
    name: "hoge",
    image: "",
    description: "",
  };
  return (
    <RootLayout meta={`{"friend"}`}>
      <FriendMain friend={friend} hangouts={[]} schedules={[]} />
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
      user_id: user ? user.data.id : null,
    },
  };
};

export default Friend;
