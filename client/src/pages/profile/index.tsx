import React from "react";
import { RootLayout } from "@/components/layout/Layout";
import { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import { GetHangoutsByUserId, GetSchedulesByUserId } from "@/api/query";
import { ProfileMain } from "@/components/pages/profile/profile-main";
import { User } from "@/api/user/type";
import { Hangout } from "@/api/hangout/type";
import { Schedule } from "@/api/schedule/type";

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
  const user_id = user.id;
  const { data: hangouts } = await GetHangoutsByUserId({
    user_id,
  });

  const { data: schedules } = await GetSchedulesByUserId({
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
