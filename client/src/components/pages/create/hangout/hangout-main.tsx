import { Text } from "@/components/elements/Text";
import { Title } from "@/components/elements/Title";
import React, { FC } from "react";
import { HangoutForm } from "@/components/pages/create/hangout/hangout-form";
import { User } from "@/api/user/type";
import { HangoutDescription } from "./hangout-description";

type HangoutMainProps = {
  user: User;
};

export const HangoutMain: FC<HangoutMainProps> = ({ user }) => {
  console.log(user);
  return (
    <div className="hangout-bg p-10 py-20 h-screen">
      <HangoutDescription user={user} />
      <HangoutForm user={user} />
    </div>
  );
};
