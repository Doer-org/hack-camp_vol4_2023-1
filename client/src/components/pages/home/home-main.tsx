"use client";
import React, { FC } from "react";
import { Matching } from "@/api/matching/type";
import { User } from "@/api/user/type";
import { HomeAfterLogin } from "@/components/pages/home/home-after-login";

type HomeComponentProps = {
  matchings: Matching[];
  user: User;
};

export const HomeComponent: FC<HomeComponentProps> = ({ matchings, user }) => {
  return <HomeAfterLogin matchings={matchings} user={user} />;
};
