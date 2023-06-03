import { Text } from "@/components/elements/Text";
import React, { FC } from "react";

export const ProfileMylist:FC = () => {
  const hangoutList = ["hoge", "hoge", "hoge"];
  const scheduleList = [
    new Date(2022, 5 - 1, 5, 6, 35, 20, 333),
    new Date(2022, 5 - 1, 5, 6, 35, 20, 333),
    new Date(2022, 5 - 1, 5, 6, 35, 20, 333),
  ];
  return (
    <div className="bg-new-white shadow-md rounded-lg p-4">
      <div>
        <div className="grid grid-cols-3 gap-4 py-3 border-b border-navy-3">
          {hangoutList.map((hangout, index) => (
            <div key={index} className="text-center ">
              <Text style="font-bold" fontsize="text-[20px]">{hangout}</Text>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 py-3">
          {scheduleList.map((schedule, index) => {
            return (
              <div key={index} className="text-center">
                <Text>
                  {schedule.getMonth() + 1}月{schedule.getDate()}日
                </Text>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
