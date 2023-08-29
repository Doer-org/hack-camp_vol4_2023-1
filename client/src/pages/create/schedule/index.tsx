import { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import React from "react";
import { User } from "@/api/user/type";
import { RootLayout } from "@/components/layout/Layout";
import { ScheduleMain } from "@/components/pages/create/schedule/schedule-main";

type Props = {
  user:User
}

const Schedule: NextPage<Props> = ({user}) => {
  return (
    <RootLayout meta="予定を登録する">
      <ScheduleMain user={user} />
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
      user: user ? user.data : null,
    },
  };
};

export default Schedule;
