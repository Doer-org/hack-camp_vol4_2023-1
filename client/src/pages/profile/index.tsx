import React from "react";
import { RootLayout } from "@/components/layout/Layout";
import { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import { ProfileMain } from "@/components/pages/profile/profile-main";
import { User } from "@/api/user/type";
import { Hangout } from "@/api/hangout/type";
import { Schedule } from "@/api/schedule/type";
import { getHangoutsByUserId } from "@/api/hangout";
import { getSchedulesByUserId } from "@/api/schedule";

type Props = {
  user: User;
  hangouts: Hangout[];
  schedules: Schedule[];
};

const Profile: NextPage<Props> = ({ user, hangouts, schedules }) => {
  return (
    <RootLayout meta="プロフィール">
      <ProfileMain user={user} hangouts={hangouts} schedules={schedules} />
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
  const user_id = user.id;
  const { hangoutsData: hangouts } = await getHangoutsByUserId({
    user_id,
  });

  const { schedulesData: schedules } = await getSchedulesByUserId({
    user_id,
  });

  return {
    props: {
      user: user ? user : null,
      id: user ? user.id : null,
      hangouts: hangouts ? hangouts : [],
      schedules: schedules ? schedules : [],
    },
  };
};

export default Profile;
