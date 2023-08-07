import React, { FC } from "react";
import { QRCodeCanvas } from "qrcode.react";

type ShareQrcodeProps = {
    user_id : string
}

export const ShareQrcode:FC<ShareQrcodeProps> = ({user_id}) => {
  const url = `http://localhost:3000/friend/${user_id}`;
  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={url}
      size={300}
      bgColor={"#00ff00"}
      level={"H"}
    />
  );
  return <div>{qrcode}</div>;
};
