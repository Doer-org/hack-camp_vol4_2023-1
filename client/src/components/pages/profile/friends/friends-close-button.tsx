import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { LinkButton } from "@/components/elements/Button";

export const FriendsCloseButton = () => {
  return (
    <div className="text-right">
      <LinkButton className="w-6 h-6" href="/profile">
        <RiCloseLine className="w-6 h-6" />
      </LinkButton>
    </div>
  );
};
