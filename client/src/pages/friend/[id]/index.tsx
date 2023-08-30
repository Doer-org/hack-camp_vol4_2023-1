import { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import React from "react";
import { getFriendsbyUserId } from "@/api/friend";
import { resFriends } from "@/api/friend/type";
import { getHangoutsByUserId } from "@/api/hangout";
import { resHangouts } from "@/api/hangout/type";
import { getSchedulesByUserId } from "@/api/schedule";
import { resSchedules } from "@/api/schedule/type";
import { getUserById } from "@/api/user";
import { resUser } from "@/api/user/type";
import { RootLayout } from "@/components/layout/Layout";
import { FriendMain } from "@/components/pages/friend/friend-main";

type Props = {
  user: resUser;
  hangouts: resHangouts;
  schedules: resSchedules;
  friends: resFriends;
};

const Friend: NextPage<Props> = ({ user, hangouts, schedules, friends }) => {
  const number_friends = friends.data.length;
  return (
    <RootLayout meta={`${user.data.name}のprofile`}>
      <FriendMain
        user={user.data}
        hangouts={hangouts.data}
        schedules={schedules.data}
        number_friends={number_friends}
      />
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
  const query = context.query;
  const id = String(query.id);
  const { userData: friendinfo } = await getUserById({ id });
  const user_id = id;
  const { hangoutsData: hangouts } = await getHangoutsByUserId({
    user_id,
  });
  const { schedulesData: schedules } = await getSchedulesByUserId({
    user_id,
  });
  const { friendData: friends } = await getFriendsbyUserId({ user_id });
  return {
    props: {
      user: friendinfo ? friendinfo : null,
      hangouts: hangouts ? hangouts : null,
      schedules: schedules ? schedules : null,
      friends: friends ? friends : [],
    },
  };
};

export default Friend;
