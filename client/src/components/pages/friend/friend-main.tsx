import React, { FC } from 'react'
import { FriendOverview } from '@/components/pages/friend/friend-overview'
import { Friend } from '@/api/friend/type'
import { Hangout } from '@/api/hangout/type'
import { Schedule } from '@/api/schedule/type'
import { FriendMylist } from '@/components/pages/friend/friend-mylist'

type FriendMainProps = {
  friend: Friend
  hangouts: Hangout[],
  schedules:Schedule[]
}

export const FriendMain:FC<FriendMainProps> = ({friend, hangouts, schedules}) => {
  return (
    <div className="user-bg py-16 h-screen">
    <div className="w-[320px] mx-auto">
      <FriendOverview friend={friend} />
      <FriendMylist hangouts={hangouts} schedules={schedules} />
    </div>
  </div>
  )
}
