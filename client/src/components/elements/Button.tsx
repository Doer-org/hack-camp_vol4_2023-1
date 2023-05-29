import Link from "next/link";
import React, { FC, ReactNode } from "react";

type ButtonProps = {
  className: string;
  onClick:React.MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};

export const Button: FC<ButtonProps> = ({ className, onClick, children }) => {
  return <button className={className} onClick={onClick}>{children}</button>;
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
    <Link href={href} as={href}>
      <button className={className}>{children}</button>
    </Link>
  );
};
