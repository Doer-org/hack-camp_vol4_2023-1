import React, { FC } from "react";
import { HangoutDescription } from "./hangout-description";
import { User } from "@/api/user/type";
import { Text } from "@/components/elements/Text";
import { Title } from "@/components/elements/Title";
import { HangoutForm } from "@/components/pages/create/hangout/hangout-form";

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
