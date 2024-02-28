import Navbar from '@/components/Navbar';
import React from 'react'

const Protectedlayout = ({ children }: { children: React.ReactNode }) => {
  return (
   <>
   <Navbar></Navbar>
   {children}
   </>
  )
}

export default Protectedlayout;
