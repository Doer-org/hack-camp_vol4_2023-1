import { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import React from "react";
import { getUserById } from "@/api/user";
import { resUser } from "@/api/user/type";
import { Title } from "@/components/elements/Title";
import { RootLayout } from "@/components/layout/Layout";
import { EditForm } from "@/components/pages/profile/edit/edit-form";

type Props = {
  user: resUser;
};

const Edit: NextPage<Props> = ({ user }) => {
  return (
    <RootLayout meta="ユーザー情報を編集する">
      <div className="other-bg p-10 py-20 h-screen">
        <Title color="text-new-blue-600">ユーザー情報編集</Title>
        <div>
          <EditForm user={user.data} />
        </div>
      </div>
    </RootLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = parseCookies(context);
  if (!cookies.user) {
    return {
      redirect: {
        permanent: false,
        destination: `/login`,
      },
    };
  }
  const user_id = String(cookies.user);
  if (!user_id) {
    return {
      redirect: {
        permanent: false,
        destination: `/login`,
      },
    };
  }
  const { userData: user } = await getUserById({ id: user_id });
  return {
    props: {
      user: user ? user : null,
    },
  };
};

export default Edit;
