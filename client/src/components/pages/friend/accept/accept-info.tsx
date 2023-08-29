import React from "react";
import { Text } from "@/components/elements/Text";

export const AcceptInfo = () => {
  return (
    <div className="bg-white p-8 rounded-lg">
      <div className="">
        {/* insert an image of friend */}
        <div className="w-32 h-32 bg-gray-500 text-gray-500 rounded-full m-auto">hello</div>
      </div>
      <div className="mt-10">
        <Text style="font-bold" fontsize="text-[20px]">
          name
        </Text>
        <Text fontsize="text-[14px]">discription</Text>
      </div>
    </div>
  );
};
