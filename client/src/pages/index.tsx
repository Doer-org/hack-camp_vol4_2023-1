import { Text } from "@/components/elements/Text";
import { Title } from "@/components/elements/Title";
import { RootLayout } from "@/components/layout/Layout";
import { MatchingList } from "@/components/pages/Home/matching-list";
import { GetServerSideProps, NextPage } from "next";
import { User } from "@/apollo/generated/graphql";
import { parseCookies } from "nookies";

type Props = {
  user: User;
  id: string;
};

const Home: NextPage<Props> = ({ user, id }) => {
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
            <Text>{user && user.name}さん、今日はx件マッチングしました！</Text>
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
  const cookies = parseCookies(context);
  console.log(cookies.user);
  const user = JSON.parse(cookies.user);
  if (!user) {
    return {
      redirect:{
        permanent: false,
        destination: `/login`,
      }
    }
  }

  return {
    props: {
      user: user ? user : null,
      id: user ? user.id : null,
    },
  };
};

export default Home;
