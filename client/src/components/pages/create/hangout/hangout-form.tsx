"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { createHangout, deleteHangout } from "@/api/hangout";
import { Hangout } from "@/api/hangout/type";
import { User } from "@/api/user/type";
import { Text } from "@/components/elements/Text";

type HangoutFormProps = {
  user: User;
  hangouts: Hangout[];
};

type Inputs = {
  hangouts: string[];
};

const schema = z.object({
  hangouts: z
    .array(z.string())
    .min(1, { message: "1つ以上は選択してください" })
    .max(3, { message: "3つまで選択してください" }),
});

export const HangoutForm: FC<HangoutFormProps> = ({ user, hangouts }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<Inputs>({ resolver: zodResolver(schema), defaultValues: {} });

  const router = useRouter();

  const hangoutList = [
    { value: "eating", label: "飲食" },
    { value: "outdoor", label: "アウトドア" },
    { value: "subculture", label: "サブカルチャー" },
    { value: "indoor", label: "インドア" },
    { value: "season", label: "シーズン" },
    { value: "other", label: "その他" },
  ];
  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    if (hangouts) {
      hangouts.map(async (hangout) => {
        const id = hangout.id;
        const { hangoutData: delHangout } = await deleteHangout({ id });
        console.log(delHangout);
      });
    }
    data.hangouts.map(async (hangout: string) => {
      const InputData = {
        name: hangout,
        user_id: user.id,
      };
      const { hangoutsData, error } = await createHangout(InputData);
      if (error) {
        console.log(error);
      }
    });
    router.push("/profile");
  };

  return (
    <div className="py-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-3 py-6">
          {hangoutList.map((hangout: { value: string; label: string }, index: number) => (
            <div className="w-36 h-14" key={index}>
              <input
                type="checkbox"
                id={hangout.value}
                value={hangout.value}
                className="peer hidden"
                {...register("hangouts")}
              />
              <label
                htmlFor={hangout.value}
                className="flex cursor-pointer bg-new-white shadow-md w-36 h-14 rounded-lg justify-center items-center peer-checked:bg-new-yellow-300"
              >
                {hangout.label}
              </label>
            </div>
          ))}
        </div>
        {errors.hangouts && <Text style="text-red-600 text-center pb-4">遊びは1つ以上3つ以下で設定してください</Text>}
        <div className="w-32 mx-auto py-4">
          <input
            type="submit"
            className="bg-new-yellow-700 hover:bg-new-yellow-400 font-semibold text-xl text-new-white rounded-lg w-32 h-14"
            value="登録"
            disabled={isSubmitting}
          />
        </div>
      </form>
    </div>
  );
};
