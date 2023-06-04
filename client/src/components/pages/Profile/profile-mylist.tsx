import { Hangout, Schedule } from "@/apollo/generated/graphql";
import { Text } from "@/components/elements/Text";
import { type } from "os";
import React, { FC } from "react";

type ProfileMylistProps = {
  hangouts:Hangout[]
  schedules:Schedule[]
}

export const ProfileMylist:FC<ProfileMylistProps> = ({hangouts, schedules}) => {
  const hangoutList = ["hoge", "hoge", "hoge"];
  const scheduleList = [
    new Date(2022, 5 - 1, 5, 6, 35, 20, 333),
    new Date(2022, 5 - 1, 5, 6, 35, 20, 333),
    new Date(2022, 5 - 1, 5, 6, 35, 20, 333),
  ];
  return (
    <div className="bg-new-white shadow-md rounded-lg p-4">
      <div>
        <div className="grid grid-cols-3 gap-4 py-4 pb-8 border-b border-navy-3">
          {hangouts.map((hangout, index) => (
            <div key={index} className="text-center ">
              <Text style="font-bold" fontsize="text-[20px]">{hangout.name}</Text>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 py-4 pt-8">
          {schedules.map((schedule, index) => {
            return (
              <div key={index} className="text-center">
                <Text>
                  {schedule.date}
                </Text>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
