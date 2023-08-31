import { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import { getMatchingByUserId } from "@/api/matching";
import { resMatchings } from "@/api/matching/type";
import { getUserById } from "@/api/user";
import { resUser } from "@/api/user/type";
import { RootLayout } from "@/components/layout/Layout";
import { HomeComponent } from "@/components/pages/home/home-main";

type Props = {
  user: resUser;
  matchings: resMatchings;
};

const Home: NextPage<Props> = ({ user, matchings }) => {
  return (
    <RootLayout meta="ホーム">
      <HomeComponent matchings={matchings.data} user={user.data} />
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
  const { matchingsData: matchings } = await getMatchingByUserId({ user_id });

  return {
    props: {
      user: user ? user : null,
      matchings: matchings ? matchings : null,
    },
  };
};

export default Home;
