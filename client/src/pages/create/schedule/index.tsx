import { Text } from "@/components/elements/Text";
import { Title } from "@/components/elements/Title";
import { RootLayout } from "@/components/layout/Layout";
import { ScheduleForm } from "@/components/pages/Create/Schedule/schedule-form";
import React from "react";

const Schedule = () => {
  return (
    <RootLayout　meta="予定を登録する">
      <div className="p-10 py-20 h-screen">
        <Title>
          予定を
          <br />
          登録しましょう！
        </Title>
        <div className="py-4">
          <Text>ooさんはいつ遊びたいですか？</Text>
        </div>
        <div>
          <ScheduleForm />
        </div>
      </div>
    </RootLayout>
  );
};

export default Schedule;
