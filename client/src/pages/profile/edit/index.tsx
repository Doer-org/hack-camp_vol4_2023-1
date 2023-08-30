import { NextPage } from "next";
import React from "react";
import { Title } from "@/components/elements/Title";
import { RootLayout } from "@/components/layout/Layout";
import { EditForm } from "@/components/pages/profile/edit/edit-form";

const Edit: NextPage = () => {
  return (
    <RootLayout meta="ユーザー情報を編集する">
      <div className="other-bg p-10 py-20 h-screen">
        <Title color="text-new-blue-600">ユーザー情報編集</Title>
        <div>
          <EditForm />
        </div>
      </div>
    </RootLayout>
  );
};

export default Edit;
