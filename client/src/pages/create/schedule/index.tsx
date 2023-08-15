import { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import React from "react";
import { RootLayout } from "@/components/layout/Layout";
import { ScheduleMain } from "@/components/pages/create/schedule/schedule-main";

const Schedule: NextPage = () => {
  return (
    <RootLayout meta="予定を登録する">
      <ScheduleMain />
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

export default Schedule;
