import React, { FC } from "react";
import { User } from "@/api/user/type";
import { Text } from "@/components/elements/Text";
import { Title } from "@/components/elements/Title";

type ScheduleDescriptionProps = {
  user: User;
};

export const ScheduleDescription: FC<ScheduleDescriptionProps> = ({ user }) => {
  return (
    <div>
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
    </div>
  );
};
