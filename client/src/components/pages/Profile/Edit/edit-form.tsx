"use client";
import { Text } from "@/components/elements/Text";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { HiChatAlt } from "react-icons/hi";
import { MdDriveFileRenameOutline } from "react-icons/md";


type Inputs = {
  name: string;
  discription: string;
};


const schema = z.object({
  name: z.string().min(1, { message: "1つ以上選択してください" }),
  discription: z.string(),
});

export const EditForm: FC = () => {
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
          <div className="pb-5">
          <label className="text-navy-3 flex gap-[10px] py-4">
              <MdDriveFileRenameOutline className="w-6 h-6"/>
              <Text>name</Text>
              </label>
            <input
              type="text"
              className="w-full h-10 text-xl px-2 rounded-lg"
              {...register("name")}
            />
          </div>
          <div className="">
            <label className="text-navy-3 flex gap-[10px] py-4">
              <HiChatAlt className="w-6 h-6" />
              <Text>description</Text>
              </label>
            <textarea
              className="w-full text-xl px-2 p-1 rounded-lg"
              rows={3} 
              {...register("discription")}
            />
          </div>
        </div>

        {errors.name && (
          
                <Text style="text-red-600 text-center pb-4">
                     名前を設定してください
                </Text>
        
        )}
        <div className="w-32 mx-auto py-4">
          <input
            type="submit"
            className="hover:shadow-lg hover:bg-transparent hover:border hover:border-navy-3
             bg-navy-3  hover:bg-gray-200 hover:text-navy-3 text-new-white shadow-gray/30 rounded-lg w-32 h-14"
            value="保存"
            disabled={isSubmitting}
          />
        </div>
      </form>
    </div>
  );
};
