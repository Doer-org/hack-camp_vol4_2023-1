"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { createSchedule, deleteSchedule } from "@/api/schedule/index";
import { Schedule } from "@/api/schedule/type";
import { User } from "@/api/user/type";
import { Text } from "@/components/elements/Text";

type ScheduleFormProps = {
  user: User;
  schedules: Schedule[];
};

type Inputs = {
  schedule1: string;
  schedule2: string;
  schedule3: string;
};

const schema = z.object({
  schedule1: z.string().min(1, { message: "1つ以上設定してください" }),
  schedule2: z.string(),
  schedule3: z.string(),
});

export const ScheduleForm: FC<ScheduleFormProps> = ({ user, schedules }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
    defaultValues: {},
  });
  const router = useRouter();
  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    if (schedules) {
      schedules.map(async (schedule: Schedule) => {
        const id = schedule.id;
        const { scheduleData: delSchedule } = await deleteSchedule({ id });
        console.log(delSchedule);
      });
    }
    const userData1 = {
      user_id: user.id,
      date: data.schedule1,
    };

    const { scheduleData: schedule1, error: err1 } = await createSchedule(userData1);
    if (err1) {
      console.log("Error1:", err1);
    }

    if (data.schedule2) {
      const userData2 = {
        user_id: user.id,
        date: data.schedule2,
      };
      const { scheduleData: schedule2, error: err2 } = await createSchedule(userData2);
      if (err2) {
        console.log("Error2:", err2);
      }
    }

    if (data.schedule3) {
      const userData3 = {
        user_id: user.id,
        date: data.schedule3,
      };
      const { scheduleData: schedule3, error: err3 } = await createSchedule(userData3);
      if (err3) {
        console.log("Error:", err3);
      }
    }
    router.push("/profile");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-y-3 py-5">
          <div className="">
            <input type="date" className="w-full h-10 text-xl px-2 rounded-lg shadow-md" {...register("schedule1")} />
          </div>
          <div className="">
            <input type="date" className="w-full h-10 text-xl px-2 rounded-lg shadow-md" {...register("schedule2")} />
          </div>
          <div className="">
            <input type="date" className="w-full h-10 text-xl px-2 rounded-lg shadow-md" {...register("schedule3")} />
          </div>
        </div>
        {errors.schedule1 && <Text style="text-red-600 text-center pb-4">予定は1つ以上3つ以下で設定してください</Text>}
        <div className="w-32 mx-auto py-4">
          <input
            type="submit"
            className="bg-new-yellow-700 hover:bg-new-yellow-400 text-new-white rounded-lg w-32 h-14"
            value="登録"
            disabled={isSubmitting}
          />
        </div>
      </form>
    </div>
  );
};
