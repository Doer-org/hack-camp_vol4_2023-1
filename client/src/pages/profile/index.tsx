import { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import React from "react";
import { getFriendsbyUserId } from "@/api/friend";
import { resFriends } from "@/api/friend/type";
import { getHangoutsByUserId } from "@/api/hangout";
import { resHangouts } from "@/api/hangout/type";
import { getSchedulesByUserId } from "@/api/schedule";
import { resSchedules } from "@/api/schedule/type";
import { User } from "@/api/user/type";
import { RootLayout } from "@/components/layout/Layout";
import { ProfileMain } from "@/components/pages/profile/profile-main";

type Props = {
  user: User;
  hangouts: resHangouts;
  schedules: resSchedules;
  friends: resFriends;
};

const Profile: NextPage<Props> = ({ user, hangouts, schedules, friends }) => {
  return (
    <RootLayout meta="プロフィール">
      <ProfileMain user={user} hangouts={hangouts.data} schedules={schedules.data} friends={friends.data} />
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
  const { friendData: friends } = await getFriendsbyUserId({ user_id });
  return {
    props: {
      user: user ? user.data : null,
      id: user ? user.data.id : null,
      hangouts: hangouts ? hangouts : null,
      schedules: schedules ? schedules : null,
      friends: friends ? friends : null,
    },
  };
};

export default Profile;
