import React, { FC } from "react";

type MatchingListProps = {
  matchingList: { name: string; event: string; date: string }[];
};
export const MatchingList: FC<MatchingListProps> = ({ matchingList }) => {
  return (
    <div>
      {matchingList.map((matching: { name: string; event: string; date: string }, index) => (
        <div key={index} className="bg-new-white px-6 py-4 rounded-lg flex items-center gap-4 shadow-md">
          <div>
            <div className="rounded-full bg-navy-1 w-12 h-12"></div>
          </div>
          <div>
            <p>{matching.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
