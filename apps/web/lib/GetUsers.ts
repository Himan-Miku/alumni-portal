import Axios from "app/Axios";
import { User } from "app/types";

export default function GetUsers() {
  const res: Promise<{ data: { success: boolean; user: User[] } }> = Axios.get(
    `/api/users`,
    {
      withCredentials: true,
    }
  );

  return res;
}
