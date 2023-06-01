import React, { FC, ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  fontsize?: string;
  style?: string;
};

export const Text: FC<TextProps> = ({ children, fontsize, style }) => {
  return (
    <p
      className={`${fontsize ? fontsize : "text-[16px]"} ${
        style ? style : ""
      } ${"text-navy-3"}`}
    >
      {children}
    </p>
  );
};
