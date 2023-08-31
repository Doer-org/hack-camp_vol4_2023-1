import Image from "next/image";
import React, { FC } from "react";
import { Matching } from "@/api/matching/type";
import { LinkButton } from "@/components/elements/Button";

type MatchingListProps = {
  matchings: Matching[];
};
export const MatchingList: FC<MatchingListProps> = ({ matchings }) => {
  return (
    <div>
      {matchings ? (
        matchings.map((matching: Matching, index) => (
          <div key={index}>
            <LinkButton
              className="bg-new-white px-6 py-4 rounded-lg flex items-center gap-4 shadow-md w-full"
              href={`/friend/${matching.friend_id}?from=matching`}
            >
              <div>
                <div className="rounded-full bg-navy-1 w-12 h-12"></div>
              </div>
              {/* <div className="rounded-full w-12 h-12 mt-1">
                <Image src={matching.friend_image} alt={"user image"} width={48} height={48} className="rounded-full"></Image>
              </div> */}
              <div>
                <p>matching.friend_id</p>
              </div>
            </LinkButton>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};
