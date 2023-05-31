import { Text } from "@/components/elements/Text";
import { Title } from "@/components/elements/Title";
import { ScheduleForm } from "@/components/service/Create/Schedule/schedule-form";
import React from "react";

const Schedule = () => {
  return (
    <div className="p-10 py-20">
      <Title>
        予定を
        <br />
        登録しましょう！
      </Title>
      <div className="py-4">
        <Text>ooさんは何をして遊びたいですか？</Text>
      </div>
      <div>
        <ScheduleForm />
      </div>
    </div>
  );
};

export default Schedule;
