"use client";
import { Avatar, AvatarFallback, AvatarImage } from "components/ui/avatar";
import { FaPlus } from "react-icons/fa6";
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
import { Input } from "components/ui/input";
import { Label } from "components/ui/label";
import { Textarea } from "components/ui/textarea";
import { ChangeEvent, useEffect, useState } from "react";
import { User } from "app/types";
import { Mutation, useMutation } from "react-query";
import Axios from "app/Axios";

interface prop {
  userData?: User;
  dialogRole: "profile" | "exp" | "qual";
  buttoncss?: string;
  buttonName: string;
  // api: string;
}

let exp = ["company", "position", "duration"];
let qual = ["Stream", "College", "Marks", "Duration"];

export function DialogInput(Prop?: prop) {
  const [user, setUser] = useState<User>({ ...Prop?.userData! });
  const [image, setImage] = useState<string>("");
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
    }>({ company: "", position: "", duration: "" });

    let expmutate = useMutation({
      mutationFn: async (obj: any) => {
        return await Axios.post("/api/append?key=exp", obj, {
          withCredentials: true,
        });
      },
    });
    return (
      <form
        onSubmit={(ev) => {
          // ev.preventDefault();
          // console.log(work);

          expmutate.mutate(work);
          // console.log(expmutate.data);
        }}
        className="flex flex-col gap-2"
      >
        {Object.entries(work)?.map((e, ind) => {
          return (
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
          );
        })}
        <Button type="submit">Submit</Button>
      </form>
    );
  };
  let Education = () => {
    let [ed, seted] = useState<{
      studyfrom: string;
      studied: string;
      duration: string;
      percentage: string;
    }>({ studyfrom: "", studied: "", duration: "", percentage: "" });

    let expmutate = useMutation({
      mutationFn: async (obj: any) => {
        return await Axios.post("/api/append?key=edu", obj, {
          withCredentials: true,
        });
      },
    });
    return (
      <form
        onSubmit={(ev) => {
          // ev.preventDefault();
          // console.log(work);

          expmutate.mutate(ed);
          // console.log(expmutate.data);
        }}
        className="flex flex-col gap-2"
      >
        {Object.entries(ed)?.map((e, ind) => {
          return (
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
          );
        })}
        <Button type="submit">Submit</Button>
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
          {Prop?.buttonName ? Prop?.buttonName : <FaPlus></FaPlus>}
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
                console.log(user);
                mutation.mutate({
                  name: user?.name,
                  email: user?.email,
                  linkedin: user?.linkedin,
                  github: user?.github,
                  about: user?.about,
                });
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
