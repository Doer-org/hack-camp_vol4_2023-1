import React, { FC } from "react";
import { User } from "@/api/user/type";
import { Text } from "@/components/elements/Text";
import { Title } from "@/components/elements/Title";

type HangoutDescriptionProps = {
  user: User;
};

export const HangoutDescription: FC<HangoutDescriptionProps> = ({ user }) => {
  return (
    <div>
      <div className="py-4">
        <Title fontsize="text-[24px]">
          したいことを
          <br />
          登録しましょう！
        </Title>
      </div>
      <div className="pt-20 ">
        <Text>{user.name}さんは何をして遊びたいですか？</Text>
      </div>
    </div>
  );
};
