import React, { FC } from "react";
import { ShareButton } from "@/components/pages/profile/share/share-button";
import { ShareQrcode } from "@/components/pages/profile/share/share-qrcode";

type ShareMainProps = {
  user: any;
};

export const ShareMain: FC<ShareMainProps> = ({ user }) => {
  const url = `http://localhost:3000/friend/${user.id}/add`;
  return (
    <div className="addfriend-bg py-16 h-screen">
      <ShareQrcode user={user} url={url} />
      <ShareButton url={url} />
    </div>
  );
};
