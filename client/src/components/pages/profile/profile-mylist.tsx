import React, { FC } from "react";
import { Hangout } from "@/api/hangout/type";
import { Schedule } from "@/api/schedule/type";
import { Text } from "@/components/elements/Text";

type ProfileMylistProps = {
  hangouts: Hangout[];
  schedules: Schedule[];
};

export const ProfileMylist: FC<ProfileMylistProps> = ({ hangouts, schedules }) => {
  const hangoutList = [
    { value: "eating", label: "飲食" },
    { value: "outdoor", label: "アウトドア" },
    { value: "subculture", label: "サブカル" },
    { value: "indoor", label: "インドア" },
    { value: "season", label: "シーズン" },
    { value: "other", label: "その他" },
  ];
  return (
    <div className="bg-new-white shadow-lg rounded-lg p-4">
      {hangouts !== null && hangouts.length !== 0 ? (
        <div className="grid grid-cols-3 gap-4 py-4 pb-8 border-b border-new-blue-900">
          {hangouts.map((hangout, index) => {
            const hangoutName = hangoutList.filter((el) => {
              return el.value === hangout.name;
            });
            return (
              <div key={index} className="text-center ">
                <Text style="font-bold" fontsize="text-[18px]">
                  {hangoutName[0].label}
                </Text>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="py-6 border-b border-new-blue-900">
          <Text style="text-center ">遊びを作成しましょう</Text>
        </div>
      )}
      {schedules !== null && schedules.length !== 0 ? (
        <div className="grid grid-cols-3 gap-4 py-4 pt-8">
          {schedules.map((schedule, index) => {
            const scheduleDate = schedule.date.replaceAll("-", "/").slice(5);
            return (
              <div key={index} className="text-center">
                <Text>{scheduleDate}</Text>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="py-6">
          <Text style="text-center">予定を作成しましょう</Text>
        </div>
      )}
    </div>
  );
};
