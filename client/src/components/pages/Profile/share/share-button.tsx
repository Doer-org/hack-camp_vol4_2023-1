import React, { FC, useEffect, useState } from "react";
import { Text } from "../../../elements/Text";
import { Button } from "../../../elements/Button";
import { AiOutlinePaperClip } from "react-icons/ai";

type ShareButtonProps = {
  url: string;
};

export const ShareButton: FC<ShareButtonProps> = ({ url }) => {
  const [visible, setVisible] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(url);
    setVisible(true);
  };

  return (
    <div className="pt-10">
      <div className="flex justify-center">
        <Button
          className="bg-new-white text-new-blue-600 p-2 px-4 rounded-md shadow-sm flex justify-center"
          onClick={copy}
        >
          <div className="w-7 mr-1 my-auto">
            <AiOutlinePaperClip />
          </div>
          Copy URL
        </Button>
      </div>
      {visible && <Text style="text-new-red-500 text-center pt-2">URLをコピーしました</Text>}
    </div>
  );
};
