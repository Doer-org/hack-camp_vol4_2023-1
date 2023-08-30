import { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import React from "react";
import { getHangoutsByUserId } from "@/api/hangout";
import { resHangouts } from "@/api/hangout/type";
import { getSchedulesByUserId } from "@/api/schedule";
import { resSchedules } from "@/api/schedule/type";
import { getUserById } from "@/api/user";
import { resUser } from "@/api/user/type";
import { RootLayout } from "@/components/layout/Layout";
import { FriendMain } from "@/components/pages/friend/friend-main";

type Props = {
  user_id: string;
  friend: resUser;
  hangouts: resHangouts;
  schedules: resSchedules;
};

const Friend: NextPage<Props> = ({ user_id, friend, hangouts, schedules }) => {
  return (
    <RootLayout meta={`${friend.data.name}のprofile`}>
      <FriendMain friend={friend.data} hangouts={hangouts.data} schedules={schedules.data} />
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
  const { userData: friend } = await getUserById({ id });
  const user_id = id;
  const { hangoutsData: hangouts } = await getHangoutsByUserId({
    user_id,
  });
  const { schedulesData: schedules } = await getSchedulesByUserId({
    user_id,
  });
  return {
    props: {
      user_id: user ? user.data.id : null,
      friend: friend ? friend : null,
      hangouts: hangouts ? hangouts : null,
      schedules: schedules ? schedules : null,
    },
  };
};

export default Friend;
