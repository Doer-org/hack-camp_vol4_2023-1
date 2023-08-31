import React, { FC } from "react";
import { ScheduleDescription } from "./schedule-description";
import { Schedule } from "@/api/schedule/type";
import { User } from "@/api/user/type";
import { Text } from "@/components/elements/Text";
import { Title } from "@/components/elements/Title";
import { ScheduleForm } from "@/components/pages/create/schedule/schedule-form";

type ScheduleMainProps = {
  user: User;
  schedules: Schedule[];
};

export const ScheduleMain: FC<ScheduleMainProps> = ({ user, schedules }) => {
  return (
    <div className="schedule-bg p-10 py-20 h-screen">
      <ScheduleDescription user={user} />
      <ScheduleForm user={user} schedules={schedules} />
    </div>
  );
};
