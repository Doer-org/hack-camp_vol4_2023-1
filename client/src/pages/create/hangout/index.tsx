import { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import React from "react";
import { User } from "@/api/user/type";
import { RootLayout } from "@/components/layout/Layout";
import { HangoutMain } from "@/components/pages/create/hangout/hangout-main";

type Props = {
  user: User;
};

const Hangout: NextPage<Props> = ({ user }) => {
  return (
    <RootLayout meta="遊びを登録する">
      <HangoutMain user={user} />
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
      user: user ? user : null,
    },
  };
};

export default Hangout;
