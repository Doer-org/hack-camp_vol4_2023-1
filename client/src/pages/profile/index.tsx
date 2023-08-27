import { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import React from "react";
import { getHangoutsByUserId } from "@/api/hangout";
import { Hangout } from "@/api/hangout/type";
import { getSchedulesByUserId } from "@/api/schedule";
import { Schedule } from "@/api/schedule/type";
import { User } from "@/api/user/type";
import { RootLayout } from "@/components/layout/Layout";
import { ProfileMain } from "@/components/pages/profile/profile-main";

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
  const user_id = user.data.id;
  const { hangoutsData: hangouts } = await getHangoutsByUserId({
    user_id,
  });

  const { schedulesData: schedules } = await getSchedulesByUserId({
    user_id,
  });

  return {
    props: {
      user: user ? user.data : null,
      id: user ? user.data.id : null,
      hangouts: hangouts ? hangouts.data : [],
      schedules: schedules ? schedules.data : [],
    },
  };
};

export default Profile;
