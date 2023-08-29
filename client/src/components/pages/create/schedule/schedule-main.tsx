import React, { FC } from "react";
import { User } from "@/api/user/type";
import { Text } from "@/components/elements/Text";
import { Title } from "@/components/elements/Title";
import { ScheduleForm } from "@/components/pages/create/schedule/schedule-form";

type ScheduleMainProps = {
  user:User
}

export const ScheduleMain: FC<ScheduleMainProps> = ({user}) => {
  return (
    <div className="schedule-bg p-10 py-20 h-screen">
      <div className="py-4">
        <Title>
          予定を
          <br />
          登録しましょう！
        </Title>
      </div>
      <div className="pt-20 py-4">
        <Text>{user.name}さんはいつ遊びたいですか？</Text>
      </div>
      <div>
        <ScheduleForm user={user} />
      </div>
    </div>
  );
};
