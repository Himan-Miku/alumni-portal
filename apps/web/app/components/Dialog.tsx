"use client";
import { Avatar, AvatarFallback, AvatarImage } from "shadcn/ui/avatar";
import { FaPlus } from "react-icons/fa6";
import { Button } from "shadcn/ui/button";
import { GoPencil } from "react-icons/go";
import { ImCross } from "react-icons/im";
import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "shadcn/ui/dialog";
import { Input } from "shadcn/ui/input";
import { Label } from "shadcn/ui/label";
import { Textarea } from "shadcn/ui/textarea";
import { ChangeEvent, useEffect, useState } from "react";
import { User } from "app/types";
import { Mutation, useMutation } from "react-query";
import { useToast } from "shadcn/ui/use-toast";

import Axios from "app/Axios";
import { DialogClose } from "@radix-ui/react-dialog";

interface prop {
  userData?: User;
  dialogRole: "profile" | "exp" | "qual";
  buttoncss?: string;
  buttonName: string;
  qual?: {
    studyfrom: string;
    studied: string;
    duration: string;
    percentage: string;
    _id?: string;
  };
  exp?: {
    company: string;
    position: string;
    duration: string;
    _id?: string;
  };
  // api: string;
}

let exp = ["company", "position", "duration"];
let qual = ["Stream", "College", "Marks", "Duration"];

export function DialogInput(Prop?: prop) {
  const [user, setUser] = useState<User>({ ...Prop?.userData! });
  const [image, setImage] = useState<string>("");
  const { toast } = useToast();
  const router = useRouter();
  const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  const mutation = useMutation({
    mutationFn: async (updateobj: Partial<User>) => {
      let res = await Axios.put("/api/user", updateobj, {
        withCredentials: true,
      });
      console.log(res);
      toast({
        title: "Success",
        description: "Profile Updated Successfully",
      });
    },
  });
  useEffect(() => {
    // Set the initial state once Prop is available
    if (Prop?.userData) {
      setUser(Prop.userData!);
    }
  }, [Prop?.userData]);

  const WorkExp = () => {
    let [work, setwork] = useState<{
      company: string;
      position: string;
      duration: string;
    }>(Prop?.exp || { company: "", position: "", duration: "" });

    let expmutate = useMutation({
      mutationFn: async (obj: any) => {
        let resp = Prop?.exp
          ? obj.action == "delete"
            ? await Axios.delete(`/api/objupdate/${obj.data._id}?key=exp`, {
                withCredentials: true,
              })
            : await Axios.put(
                `/api/objupdate/${obj.data._id}?key=exp`,
                obj.data,
                {
                  withCredentials: true,
                }
              )
          : await Axios.post("/api/append?key=exp", obj.data, {
              withCredentials: true,
            });
        // console.log(obj);
        // toast({
        //   title: "Success",
        //   description: resp?.data?.message,
        // });
      },
    });
    return (
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          // console.log(work);

          expmutate.mutate({ data: work });

          // console.log(expmutate.data);
          router.refresh();
        }}
        className="flex flex-col gap-2"
      >
        {Object.entries(work)?.map((e, ind) => {
          return (
            e?.[0] != "_id" && (
              <div key={ind} className="grid grid-cols-3 gap-2 items-center">
                <Label className="font-semibold text-medgray">
                  {e[0].toLocaleUpperCase()}
                </Label>
                <Input
                  type="text"
                  value={e[1]}
                  onChange={(ev) => {
                    setwork((old) => ({ ...old, [e[0]]: ev.target.value }));
                  }}
                  className="col-span-2 border-2"
                ></Input>
              </div>
            )
          );
        })}
        <div className="flex w-full gap-2 justify-stretch">
          <Button className="w-full" type="submit">
            Submit
          </Button>
          {Prop?.exp && (
            <Dialog>
              <DialogTrigger className="w-full">
                <Button
                  type="button"
                  className="w-full bg-red-400 hover:bg-red-700"
                >
                  Delete
                </Button>
              </DialogTrigger>
              <DialogContent>
                <div className="flex flex-col justify-center items-center ">
                  <div className="text-2xl text-red-500">
                    <ImCross />
                  </div>
                  <div className="text-lg   text-black font-semibold">
                    Confirm Delete
                  </div>
                  <div className="text-sm p-2">
                    Once Deleted You Cant Restore it Again
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    className="w-full bg-red-500 hover:bg-red-600"
                    onClick={() => {
                      expmutate.mutate({
                        action: "delete",
                        data: { _id: Prop?.exp?._id },
                      });
                      // window.location.reload();
                      router.refresh();
                    }}
                  >
                    Delete
                  </Button>
                  <DialogClose className="w-full">
                    <Button className="w-full hover:bg-green-600 bg-green-400">
                      Cancel
                    </Button>
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </form>
    );
  };
  let Education = () => {
    let [ed, seted] = useState<{
      studyfrom: string;
      studied: string;
      duration: string;
      percentage: string;
    }>(
      Prop?.qual || { studyfrom: "", studied: "", duration: "", percentage: "" }
    );

    let edumutate = useMutation({
      mutationFn: async (obj: any) => {
        return Prop?.qual
          ? obj.action == "delete"
            ? await Axios.delete(`/api/objupdate/${obj.data._id}?key=edu`, {
                withCredentials: true,
              })
            : await Axios.put(
                `/api/objupdate/${obj.data._id}?key=edu`,
                obj.data,
                {
                  withCredentials: true,
                }
              )
          : await Axios.post("/api/append?key=edu", obj.data, {
              withCredentials: true,
            });
      },
    });
    return (
      <form
        onSubmit={(ev) => {
          edumutate.mutate({ data: ed });
          // console.log(ed);
          ev.preventDefault();
          // console.log(expmutate.data);
          router.refresh();
        }}
        className="flex flex-col gap-2"
      >
        {Object.entries(ed)?.map((e, ind) => {
          return (
            e?.[0] != "_id" && (
              <div key={ind} className="grid grid-cols-3 gap-2 items-center">
                <Label className="font-semibold text-medgray">
                  {e[0].toLocaleUpperCase()}
                </Label>
                <Input
                  type="text"
                  value={e[1]}
                  onChange={(ev) => {
                    seted((old) => ({ ...old, [e[0]]: ev.target.value }));
                  }}
                  className="col-span-2 border-2"
                ></Input>
              </div>
            )
          );
        })}
        <div className="flex w-full gap-2 justify-stretch">
          <Button className="w-full" type="submit">
            Submit
          </Button>
          {Prop?.qual && (
            <Dialog>
              <DialogTrigger className="w-full">
                <Button
                  type="button"
                  className="w-full bg-red-400 hover:bg-red-700"
                >
                  Delete
                </Button>
              </DialogTrigger>
              <DialogContent>
                <div className="flex flex-col justify-center items-center ">
                  <div className="text-2xl text-red-500">
                    <ImCross />
                  </div>
                  <div className="text-lg   text-black font-semibold">
                    Confirm Delete
                  </div>
                  <div className="text-sm p-2">
                    Once Deleted You Cant Restore it Again
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    className="w-full bg-red-500 hover:bg-red-600"
                    onClick={() => {
                      edumutate.mutate({
                        action: "delete",
                        data: { _id: Prop?.qual?._id },
                      });
                      // window.location.reload();
                      router.refresh();
                    }}
                  >
                    Delete
                  </Button>
                  <DialogClose className="w-full">
                    <Button className="w-full hover:bg-green-600 bg-green-400">
                      Cancel
                    </Button>
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </form>
    );
  };
  // console.log(user);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={Prop?.buttonName ? "outline" : "ghost"}
          className={Prop?.buttoncss}
        >
          {Prop?.buttonName ? (
            Prop?.buttonName
          ) : Prop?.qual || Prop?.exp ? (
            <GoPencil></GoPencil>
          ) : (
            <FaPlus></FaPlus>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription className="font-semibold text-lightgray">
            {Prop?.dialogRole === "profile"
              ? "Make changes to your profile here. Click save when you're done."
              : Prop?.dialogRole == "exp"
                ? "Add your Experience "
                : "Add your Past Qualifications"}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          {Prop?.dialogRole === "profile" && (
            <form
              className="flex flex-col gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                console.log(user);
                mutation.mutate({
                  name: user?.name,
                  email: user?.email,
                  linkedin: user?.linkedin,
                  github: user?.github,
                  about: user?.about,
                });
                router.refresh();
              }}
            >
              <div className="flex flex-col gap-2 items-center">
                <Avatar className="w-20 h-20 border-2 border-slate-500">
                  <AvatarImage src={image}></AvatarImage>
                  <AvatarFallback>DP</AvatarFallback>
                </Avatar>
                <Input
                  id="picture"
                  onChange={onImageChange}
                  type="file"
                  className="w-42"
                />
              </div>
              <div>
                <Label className="font-semibold">Name</Label>
                <Input
                  type="text"
                  onChange={(e) =>
                    setUser((prevUser) => ({
                      ...prevUser,
                      name: e.target.value,
                    }))
                  }
                  value={user?.name}
                ></Input>
              </div>
              <div>
                <Label className="font-semibold">Email</Label>
                <Input
                  type="email"
                  onChange={(e) =>
                    setUser((prevUser) => ({
                      ...prevUser,
                      email: e.target.value,
                    }))
                  }
                  value={user?.email}
                ></Input>
              </div>
              <div>
                <Label className="font-semibold">About</Label>
                <Textarea
                  onChange={(e) =>
                    setUser((prevUser) => ({
                      ...prevUser,
                      about: e.target.value,
                    }))
                  }
                  value={user?.about}
                ></Textarea>
              </div>
              <div>
                <Label className="font-semibold">Linkedin</Label>
                <Input
                  type="text"
                  onChange={(e) =>
                    setUser((prevUser) => ({
                      ...prevUser,
                      linkedin: e.target.value,
                    }))
                  }
                  value={user?.linkedin}
                ></Input>
              </div>
              <div>
                <Label className="font-semibold">GitHub</Label>
                <Input
                  type="text"
                  onChange={(e) =>
                    setUser((prevUser) => ({
                      ...prevUser,
                      github: e.target.value,
                    }))
                  }
                  value={user?.github}
                ></Input>
              </div>
              <Button type="submit">Submit</Button>
            </form>
          )}
          {Prop?.dialogRole == "exp" && <WorkExp></WorkExp>}
          {Prop?.dialogRole == "qual" && <Education></Education>}
        </div>
      </DialogContent>
    </Dialog>
  );
}
