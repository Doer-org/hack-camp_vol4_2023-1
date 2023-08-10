import { Text } from "@/components/elements/Text";
import { Title } from "@/components/elements/Title";
import { RootLayout } from "@/components/layout/Layout";
import { ScheduleForm } from "@/components/pages/create/schedule/schedule-form";
import { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import React from "react";

const Schedule: NextPage = () => {
  return (
    <RootLayout meta="予定を登録する">
      <div className="schedule-bg p-10 py-20 h-screen">
        <div className="py-4">
          <Title>
            予定を
            <br />
            登録しましょう！
          </Title>
        </div>
        <div className="pt-20 py-4">
          <Text>ooさんはいつ遊びたいですか？</Text>
        </div>
        <div>
          <ScheduleForm />
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

  return {
    props: {
      id: user ? user.id : null,
    },
  };
};

export default Schedule;
