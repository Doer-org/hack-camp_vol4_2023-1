import Navbar from "@/components/layout/Navbar";
import { M_PLUS_1 } from "@next/font/google"
import Head from "next/head";
import React, { FC } from "react";


const mplus1 = M_PLUS_1({
  subsets:["latin"],
  weight:["300", "400", "500", "600", "700"]
})

type LayoutProps = {
  children:React.ReactNode;
  meta: string
}

export const RootLayout:FC<LayoutProps> = ({children, meta}) => {
  return (
    <div lang="en" className="w-screen h-screen">
      <Head>
        <title>{meta} | あそ募</title>

      </Head>
      <div className={`${mplus1.className} ${"bg-ivory"}`}>
        <div>{children}</div>
        <div className="fixed bottom-0">
          <Navbar />
        </div>
      </div>
    </div>
  );
};
