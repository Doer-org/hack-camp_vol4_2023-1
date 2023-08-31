import React, { FC } from "react";
import { BsLine } from "react-icons/bs";
import { ExternalLinkButton } from "@/components/elements/Button";

type FriendShareButtonProps = {
  url: string;
};

export const FriendShareButton: FC<FriendShareButtonProps> = ({ url }) => {
  return (
    <div className="h-12 my-8">
      <ExternalLinkButton
        className="bg-new-blue-700 text-new-white rounded-lg text-[20px]"
        href={`https://social-plugins.line.me/lineit/share?url=${url}`}
        blank={true}
      >
        <BsLine className="w-6 h-6" />
        LINEで連絡する
      </ExternalLinkButton>
    </div>
  );
};
