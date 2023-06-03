import { Button } from '@/components/elements/Button';
import { Text } from '@/components/elements/Text';
import { Title } from '@/components/elements/Title';
import { RootLayout } from '@/components/layout/Layout'
import { useRouter } from 'next/router';
import React from 'react'

const FriendAccept = () => {
  const router = useRouter() 
  const {id} = router.query;
  return (
    <RootLayout meta="友達を承認する">
      <div className='h-screen p-10'>

        <div className='flex justify-center'>
          <div className='h-80 w-60 absolute m-auto top-[calc(50%-200px)] text-center  bg-new-white rounded-xl text-new-black p-16 shadow-md'>
          <div className='mt-20'>
            <Text>name</Text>
            <Text>discription</Text>
          </div>
            <div className='mt-8'>
            <Button className='w-20 h-10 bg-new-red-700 text-new-white font-bold rounded-md'>add</Button>
            </div>
          </div>

        </div>
      </div>
    </RootLayout>
  )
}

export default FriendAccept