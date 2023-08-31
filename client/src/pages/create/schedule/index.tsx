import { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import React from "react";
import { getSchedulesByUserId } from "@/api/schedule";
import { resSchedules } from "@/api/schedule/type";
import { getUserById } from "@/api/user";
import { User, resUser } from "@/api/user/type";
import { RootLayout } from "@/components/layout/Layout";
import { ScheduleMain } from "@/components/pages/create/schedule/schedule-main";

type Props = {
  user: resUser;
  schedules: resSchedules;
};

const Schedule: NextPage<Props> = ({ user, schedules }) => {
  return (
    <RootLayout meta="予定を登録する">
      <ScheduleMain user={user.data} schedules={schedules.data} />
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
  const { schedulesData: schedules } = await getSchedulesByUserId({ user_id });

  return {
    props: {
      user: user ? user : null,
      schedules: schedules ? schedules : null,
    },
  };
};

export default Schedule;
