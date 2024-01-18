"use client";
import Axios from "app/Axios";
import { User } from "app/types";
import { Button } from "components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "components/ui/dialog";
import { useQuery } from "react-query";

export default function DialogDemo() {
  let followdata = useQuery("followers", async () => {
    let res = await Axios.get("/followers", { withCredentials: true });

    return res?.data?.user as User;
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>My Network</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {}
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
