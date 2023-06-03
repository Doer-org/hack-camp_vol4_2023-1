import { GetUserById } from "@/api/query";
import { User } from "@/apollo/generated/graphql";
import { RootLayout } from "@/components/layout/Layout";
import { MatchingList } from "@/components/pages/Home/matching-list";
import { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";

type Props = {
  user: User;
  id: string;
};

const Home: NextPage<Props> = ({ id, user }) => {
  const matchingList = [
    {
      name: "hoge",
      event: "hoge",
      date: "2/10",
    },
  ];
  return (
    <RootLayout meta="ホーム">
      <div className="text-navy-3 pt-20 px-[15px] h-screen">
        <div className="pl-[15px]">
          <h1 className="font-bold text-[32px]">マッチング一覧</h1>
          <p className="py-4">
            {user ? user.name : "null"}さん、今日はx件マッチングしました！
          </p>
        </div>
        <div className="pt-6">
          <MatchingList matchingList={matchingList} />
        </div>
      </div>
    </RootLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }

  //@ts-ignore
  const id = session.user?.id as string;
  const { data, err } = await GetUserById({ id });
  // if (!user || getUserError) {
  //   return {
  //     redirect: {
  //       permanent: false,
  //       destination: "/service/login",
  //     },
  //   };
  // }

  return {
    props: {
      user: data ? data : null,
      id: id ? id : null,
    },
  };
};

export default Home;
