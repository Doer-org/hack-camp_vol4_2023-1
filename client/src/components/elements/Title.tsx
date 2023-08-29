import React, { FC, ReactNode } from "react";

type TitleProps = {
  fontsize?: string;
  color?: string;
  children: ReactNode;
};

export const Title: FC<TitleProps> = ({ children, fontsize, color }) => {
  return (
    <div>
      <p className={`${fontsize ? fontsize : "text-[32px]"} ${color ? color : "text-new-white"} ${"font-semibold"}`}>
        {children}
      </p>
    </div>
  );
};
