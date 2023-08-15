import React, { FC } from "react";
import { Hangout } from "@/api/hangout/type";
import { Schedule } from "@/api/schedule/type";

type ProfileMylistProps = {
  hangouts: Hangout[];
  schedules: Schedule[];
};

export const ProfileMylist: FC<ProfileMylistProps> = ({ hangouts, schedules }) => {
  console.log(hangouts);
  return (
    <div className="bg-new-white shadow-md rounded-lg p-4">
      <div>
        {/*
        <div className="grid grid-cols-3 gap-4 py-4 pb-8 border-b border-navy-3">
          {hangouts != null ? (
            hangouts.map((hangout, index) => (
              <div key={index} className="text-center ">
                <Text style="font-bold" fontsize="text-[20px]">
                  {hangout.name}
                </Text>
              </div>
            ))
          ) : (
            <div>
              <Text>遊びを作成しましょう</Text>
            </div>
          )}
        </div>
        <div className="grid grid-cols-3 gap-4 py-4 pt-8">
          {schedules.length != 0 &&
            schedules.map((schedule, index) => {
              return (
                <div key={index} className="text-center">
                  <Text>{schedule.date}</Text>
                </div>
              );
            })}
          </div> */}
      </div>
    </div>
  );
};
