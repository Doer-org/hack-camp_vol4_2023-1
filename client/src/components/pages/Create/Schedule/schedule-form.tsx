"use client";
import { Text } from "@/components/elements/Text";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

type Inputs = {
  schedule1: string;
  schedule2: string;
  schedule3: string;
};

const schema = z.object({
  schedule1: z.string().min(1, { message: "1つ以上選択してください" }),
  schedule2: z.string(),
  schedule3: z.string(),
});

export const ScheduleForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(schema), defaultValues: {}
  });
  const router = useRouter();
  const onSubmit: SubmitHandler<Inputs> = (data: any) => {
    console.log(data);
    router.push("/profile");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-y-3 py-5">
          <div className="">
            <input
              type="date"
              className="w-full h-10 text-xl px-2 rounded-lg"
              {...register("schedule1")}
            />
          </div>
          <div className="">
            <input
              type="date"
              className="w-full h-10 text-xl px-2 rounded-lg"
              {...register("schedule2")}
            />
          </div>
          <div className="">
            <input
              type="date"
              className="w-full h-10 text-xl px-2 rounded-lg"
              {...register("schedule3")}
            />
          </div>
        </div>
        {errors.schedule1 && (
          <Text style="text-red-600 text-center pb-4">
            予定は1つ以上3つ以下で設定してください
          </Text>
        )}
        <div className="w-32 mx-auto py-4">
          <input
            type="submit"
            className="bg-navy-3 text-new-white rounded-lg w-32 h-14"
            value="登録"
            disabled={isSubmitting}
          />
        </div>
      </form>
    </div>
  );
};
