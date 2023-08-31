import React, { FC } from "react";
import { HangoutDescription } from "./hangout-description";
import { Hangout } from "@/api/hangout/type";
import { User } from "@/api/user/type";
import { HangoutForm } from "@/components/pages/create/hangout/hangout-form";

type HangoutMainProps = {
  user: User;
  hangouts: Hangout[];
};

export const HangoutMain: FC<HangoutMainProps> = ({ user, hangouts }) => {
  return (
    <div className="hangout-bg p-10 py-20 h-screen">
      <HangoutDescription user={user} />
      <HangoutForm user={user} hangouts={hangouts} />
    </div>
  );
};
