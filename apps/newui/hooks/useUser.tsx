"use client";
import { User } from "@/types/types";
import axios from "axios";
import Email from "next-auth/providers/email";
import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from "react";

type UserContextType = {
  user: User | null;
  isLoading: boolean;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

export interface Props {
  [propsName: string]: any;
}
export const MyUserContextPorvider = (props: Props) => {
  const { data: session, status } = useSession();

  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const getUser = async (): Promise<User | null> => {
    try {
      const email = session?.user?.email;
      console.log(email);
      // console.log("Uri Fro", process.env.NEXT_PUBLIC_BACKEND);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND}/api/user/email/${email}`,
      );
      const data = await res.json();
      console.log(data.user);
      return data.user as User;
    } catch (error) {
      console.log("Error while getting user", error);
      return null;
    }
  };
  useEffect(() => {
    if (status == "authenticated" && !isLoading && !user) {
      setIsLoading(true);
      Promise.allSettled([getUser()]).then((results) => {
        const userPromise = results[0];
        if (userPromise.status === "fulfilled") setUser(userPromise.value);
      });
      setIsLoading(false);
    } else if (!session && !isLoading) {
      setUser(null);
    }
  }, [session]);

  const value = {
    user,
    isLoading,
  };
  return <UserContext.Provider value={value} {...props} />;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a MyUserContextProvider");
  }
  return context;
};
