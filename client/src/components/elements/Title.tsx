import React, { FC, ReactNode } from "react";

type TitleProps = {
  fontsize?: string;
  children: ReactNode;
};

export const Title: FC<TitleProps> = ({ children, fontsize }) => {
  return (
    <div>
      <p className={`${fontsize?fontsize:"text-[32px]"} ${"font-semibold text-new-black"}`}>
        {children}
      </p>
    </div>
  );
};
