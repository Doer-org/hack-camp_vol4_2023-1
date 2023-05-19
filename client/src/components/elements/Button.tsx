import Link from "next/link";
import React, { FC, ReactNode } from "react";

type ButtonProps = {
  className: string;
  children: ReactNode;
};

export const Button: FC<ButtonProps> = ({ className, children }) => {
  return <button className={className}>{children}</button>;
};

type LinkButtonProps = {
  className: string;
  href: string;
  children: ReactNode;
};

export const LinkButton: FC<LinkButtonProps> = ({
  href,
  className,
  children,
}) => {
  return (
    <Link href={href}>
      <button className={className}>{children}</button>
    </Link>
  );
};
