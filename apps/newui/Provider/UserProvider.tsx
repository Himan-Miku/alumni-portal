"use client"

import { MyUserContextPorvider } from "@/hooks/useUser"


interface UserProviderProps{
    children:React.ReactNode
};

const UserProvider:React.FC<UserProviderProps>=({children})=>{
    return (
        <MyUserContextPorvider>
            {children}
        </MyUserContextPorvider>
    )
}
export default UserProvider;