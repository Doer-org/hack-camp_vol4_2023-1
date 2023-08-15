import React, { FC } from "react";
import { QRCode } from "react-qrcode-logo";
import { User } from "@/apollo/generated/graphql";

type ShareQrcodeProps = {
  url: string;
  user: User;
};

export const ShareQrcode: FC<ShareQrcodeProps> = ({ url, user }) => {
  return (
    <div className="flex justify-center">
      <div className="bg-white m-10 p-10 rounded-md shadow-md">
        <QRCode
          value={url}
          ecLevel="M"
          enableCORS={false}
          size={180}
          quietZone={10}
          bgColor="#ffffff"
          fgColor="#7E74ED"
          logoImage={user.image}
          logoWidth={60}
          logoHeight={60}
          logoOpacity={1}
          qrStyle="dots"
        />
      </div>
    </div>
  );
};
