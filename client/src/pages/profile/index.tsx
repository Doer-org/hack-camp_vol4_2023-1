import { ProfileMylist } from "@/components/pages/Profile/profile-mylist";
import { ProfileOverview } from "@/components/pages/Profile/profile-overview";
import React from "react";
import { RootLayout } from "@/components/layout/Layout";
import { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import { Hangout, Schedule, User } from "@/apollo/generated/graphql";
import { GetHangoutsByUserId, GetSchedulesByUserId } from "@/api/query";

type Props = {
  user: User;
  hangouts:Hangout[]
  schedules:Schedule[]
};

const Profile: NextPage<Props> = ({ user, hangouts, schedules }) => {
  return (
    <RootLayout meta="プロフィール">
      <div className="user-bg py-16 h-screen">
        <div className="w-[320px] mx-auto">
          <div className="">
            <ProfileOverview user={user} />
            <div>
              {/* <ProfileMylist hangouts={hangouts} schedules={schedules} /> */}
            </div>
          </div>
        </div>
      </div>
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
  const { data: hangouts, err: getHangoutError } = await GetHangoutsByUserId({
    user_id,
  });
  // if (getHangoutError) {
  //   return {
  //     redirect: {
  //       permanent: false,
  //       destination: `/login`,
  //     },
  //   };
  // }

  const { data: schedules, err: getScheduleError } = await GetSchedulesByUserId({
    user_id,
  });
  // if (getScheduleError) {
  //   return {
  //     redirect: {
  //       permanent: false,
  //       destination: `/login`,
  //     },
  //   };
  // }

  return {
    props: {
      user: user ? user : null,
      id: user ? user.id : null,
      hangouts : hangouts ? hangouts : [],
      schedules : schedules ? schedules : [],
    },
  };
};

export default Profile;
