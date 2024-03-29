"use client";

import Link from "next/link";
import React, { FC, ReactNode } from "react";

type ButtonProps = {
  className: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  children: ReactNode;
  type?: string;
};

export const Button: FC<ButtonProps> = ({ className, onClick, children, disabled }) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

type LinkButtonProps = {
  className: string;
  href: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  children: ReactNode;
};

export const LinkButton: FC<LinkButtonProps> = ({ href, className, children, onClick, disabled }) => {
  return (
    <Link href={href} as={href} className={disabled ? "pointer-events-none" : ""}>
      <button className={className} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </Link>
  );
};

type ExternalLinkButtonProps = {
  className: string;
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  children: ReactNode;
  blank?: Boolean;
};

export const ExternalLinkButton: FC<ExternalLinkButtonProps> = ({ className, href, onClick, children, blank }) => {
  return (
    <a href={href} className={`${className} w-full h-full flex`} onClick={onClick} target={blank && "_blank"}>
      <span className="inline-flex items-center mx-auto gap-3">{children}</span>
    </a>
  );
};
