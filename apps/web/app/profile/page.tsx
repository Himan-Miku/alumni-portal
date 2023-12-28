import React from 'react'
import { UserProfile,UserButton } from '@clerk/nextjs'
const page = () => {
  return (
    <div>
   < UserButton/>
   <UserProfile/>
    </div>
  )
}

export default page
