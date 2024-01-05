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
import { ChangeEvent, useState } from "react";

interface prop {
  userData?: {
    Name: string;
    email: string;
    about: string;
    linkedin: string;
    github: string;
  };
  dialogRole: "profile" | "exp" | "qual";
  buttoncss?: string;
  buttonName: string;
}

let exp = ["Company Name", "Role", "Duration"];
let qual = ["Stream", "College", "Marks", "Duration"];

export function DialogInput(Prop?: prop) {
  const [image, setImage] = useState<string>("");
  const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
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
            <>
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
                <Label className="font-semibold">Email</Label>
                <Input
                  type="email"
                  defaultValue={Prop?.userData?.email}
                ></Input>
              </div>
              <div>
                <Label className="font-semibold">About</Label>
                <Textarea defaultValue={Prop?.userData?.about}></Textarea>
              </div>
              <div>
                <Label className="font-semibold">Linkedin</Label>
                <Input
                  type="text"
                  defaultValue={Prop?.userData?.linkedin}
                ></Input>
              </div>
              <div>
                <Label className="font-semibold">GitHub</Label>
                <Input
                  type="text"
                  defaultValue={Prop?.userData?.github}
                ></Input>
              </div>
            </>
          )}
          {Prop?.dialogRole == "exp" && (
            <>
              {exp?.map((e, ind) => {
                return (
                  <div
                    key={ind}
                    className="grid grid-cols-3 gap-2 items-center"
                  >
                    <Label className="font-semibold text-medgray">{e}</Label>
                    <Input type="text" className="col-span-2 border-2"></Input>
                  </div>
                );
              })}
            </>
          )}
          {Prop?.dialogRole == "qual" && (
            <>
              {qual?.map((e, ind) => {
                return (
                  <div
                    key={ind}
                    className="grid grid-cols-3 gap-2 items-center"
                  >
                    <Label className="font-semibold text-medgray">{e}</Label>
                    <Input type="text" className="col-span-2 border-2"></Input>
                  </div>
                );
              })}
            </>
          )}
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
