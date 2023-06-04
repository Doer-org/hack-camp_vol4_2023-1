import { CreateFriend } from '@/api/mutation';
import { Button } from '@/components/elements/Button';
import { Text } from '@/components/elements/Text';
import { Title } from '@/components/elements/Title';
import { RootLayout } from '@/components/layout/Layout'
import { useRouter } from 'next/router';
import React from 'react'
import { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";

type Props = {
  user_id: string;
};

const FriendAccept :NextPage<Props>= ({user_id}) => {
  const router = useRouter() 
  const {id} = router.query;
  const userData = {
    user_id: user_id,
    friend_id: id as string,
  };

  const handleSubmit =async () => {
    const { data:friend, err } = await CreateFriend(userData);
    if (err) {
      console.log("Error:", err);
    }
    console.log(friend);
    
  }
  return (
    <RootLayout meta="友達を承認する">
      <div className='addfriend-bg h-screen p-10'>

        <div className='flex justify-center'>
          <div className='h-80 w-60 absolute m-auto top-[calc(50%-200px)] text-center  bg-new-white rounded-xl text-new-black p-16 shadow-md'>
          <div className='mt-20'>
            <Text>name</Text>
            <Text>discription</Text>
          </div>
            <div className='mt-8'>
            <Button onClick={handleSubmit} className='w-20 h-10 bg-new-red-700 text-new-white font-bold rounded-md'>add</Button>

            </div>
          </div>

        </div>
      </div>
    </RootLayout>
  )
}
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
      user_id: user ? user.id : null,
    },
  };
};

export default FriendAccept