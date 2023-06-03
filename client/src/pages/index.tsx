import { GetUserById } from "@/api/query";
import { User } from "@/apollo/generated/graphql";
import { Text } from "@/components/elements/Text";
import { Title } from "@/components/elements/Title";
import { HomeContainer } from "@/components/layout/HomeContainer";
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
      <div className="home-bg text-navy-3 px-[15px] h-screen pt-32">
        <div className="pl-[15px]">
          <div className=" pb-[100px]">
            <Title fontsize="text-[32px]">マッチング一覧</Title>
          </div>
          <div className="py-7">
            <Text>
              {user ? user.name : "null"}さん、今日はx件マッチングしました！
            </Text>
          </div>
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
