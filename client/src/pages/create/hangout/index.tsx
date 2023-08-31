import { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import React from "react";
import { getHangoutsByUserId } from "@/api/hangout";
import { resHangouts } from "@/api/hangout/type";
import { getUserById } from "@/api/user";
import { User, resUser } from "@/api/user/type";
import { RootLayout } from "@/components/layout/Layout";
import { HangoutMain } from "@/components/pages/create/hangout/hangout-main";

type Props = {
  user: resUser;
  hangouts: resHangouts;
};

const Hangout: NextPage<Props> = ({ user, hangouts }) => {
  return (
    <RootLayout meta="遊びを登録する">
      <HangoutMain user={user.data} hangouts={hangouts.data} />
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
  const { userData: user } = await getUserById({ id: user_id });
  const { hangoutsData: hangouts } = await getHangoutsByUserId({ user_id });

  return {
    props: {
      user: user ? user : null,
      hangouts: hangouts ? hangouts : null,
    },
  };
};

export default Hangout;
