import { User } from "app/types";
import type { DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user?: User & {
      id: string;
      image?: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    uid: string;
  }
}
