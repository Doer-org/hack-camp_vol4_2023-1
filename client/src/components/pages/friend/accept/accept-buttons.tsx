import { useRouter } from "next/router";
import React, { FC } from "react";
import { Button } from "@/components/elements/Button";

type AcceptButtonsProps = {
  handleSubmit: () => Promise<void>;
};

export const AcceptButtons: FC<AcceptButtonsProps> = ({ handleSubmit }) => {
  const router = useRouter();
  return (
    <div className="mt-8 flex justify-between px-4">
      <Button
        onClick={() => {
          router.push("/profile");
        }}
        className="w-20 h-10 bg-new-white text-new-blue-600 rounded-md"
      >
        cancel
      </Button>
      <Button onClick={handleSubmit} className="w-20 h-10 bg-new-blue-800 text-new-white rounded-md">
        follow
      </Button>
    </div>
  );
};
