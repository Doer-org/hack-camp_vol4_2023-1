import { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import { getMatchingByUserId } from "@/api/matching";
import { resMatchings } from "@/api/matching/type";
import { User } from "@/api/user/type";
import { RootLayout } from "@/components/layout/Layout";
import { HomeComponent } from "@/components/pages/home/home-main";

type Props = {
  user: User;
  id: string;
  matchings: resMatchings;
};

const Home: NextPage<Props> = ({ user, id, matchings }) => {
  console.log(matchings);
  return (
    <RootLayout meta="ホーム">
      <HomeComponent matchings={matchings.data} user={user} />
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
  const user = JSON.parse(cookies.user);
  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: `/login`,
      },
    };
  }

  const user_id = String(user.data.id);
  const { matchingsData: matchings } = await getMatchingByUserId({ user_id });

  return {
    props: {
      user: user ? user.data : null,
      id: user ? user.data.id : null,
      matchings: matchings ? matchings : null,
    },
  };
};

export default Home;
