"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { HiChatAlt } from "react-icons/hi";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { z } from "zod";
import { updateUser } from "@/api/user";
import { UpdateUserInput, User } from "@/api/user/type";
import { Text } from "@/components/elements/Text";

type EditFormProps = {
  user: User;
};

type Inputs = {
  name: string;
  discription: string;
};

const schema = z.object({
  name: z.string().min(1, { message: "1つ以上選択してください" }),
  discription: z.string(),
});

export const EditForm: FC<EditFormProps> = ({ user }) => {
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
    console.log(data);
    const reqData: UpdateUserInput = {
      description: data.discription !== "" ? data.discription : "",
      id: user.id,
      image: user.image,
      name: data.name !== "" ? data.name : user.name,
    };
    const { userData: resUser } = await updateUser(reqData);
    console.log(resUser);
    router.push("/profile");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-y-3 py-5">
          <div className="pb-5">
            <label className="text-new-blue-600 flex gap-[10px] py-4">
              <MdDriveFileRenameOutline className="w-6 h-6" />
              <Text>name</Text>
            </label>
            <input type="text" className="w-full h-10 text-xl px-2 rounded-lg" {...register("name")} />
          </div>
          <div className="">
            <label className="text-new-blue-600 flex gap-[10px] py-4">
              <HiChatAlt className="w-6 h-6" />
              <Text>description</Text>
            </label>
            <textarea className="w-full text-xl px-2 p-1 rounded-lg" rows={3} {...register("discription")} />
          </div>
        </div>

        {errors.name && <Text style="text-red-600 text-center pb-4">名前を設定してください</Text>}
        <div className="w-32 mx-auto py-4">
          <input
            type="submit"
            className="hover:shadow-lg hover:bg-transparent hover:border hover:border-new-blue-600
             bg-new-blue-600  hover:bg-gray-200 hover:text-new-blue-600 text-new-white rounded-lg w-32 h-14"
            value="保存"
            disabled={isSubmitting}
          />
        </div>
      </form>
    </div>
  );
};
