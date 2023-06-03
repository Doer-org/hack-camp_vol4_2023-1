import React from "react";
import { Text } from "@/components/elements/Text";
import { Title } from "@/components/elements/Title";
import { RootLayout } from "@/components/layout/Layout";
import { EditForm } from "@/components/pages/Profile/Edit/edit-form";


const Edit = () => {
  return (
    <RootLayout>
    <div className="p-10 py-20 h-screen">
      <Title>
        ユーザー情報編集
      </Title>
      <div>
        <EditForm />
      </div>
    </div>
  </RootLayout>
  )
};

export default Edit;