import { RootLayout } from "@/components/layout/Layout";
import { ShareMain } from "@/components/pages/profile/share/share-main";
import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { parseCookies } from "nookies";

type Props = {
  user: any;
};

const Share: NextPage<Props> = ({ user }) => {
  return (
    <RootLayout meta="プロフィールを共有">
      <ShareMain user={user} />
    </RootLayout>
  );
};

export default Share;

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
      user: user ? user : null,
      id: user ? user.id : null,
    },
  };
};
