"use client";
import { Avatar, AvatarImage, AvatarFallback } from "components/ui/avatar";
import { Button } from "components/ui/button";
import { ChangeEvent, useRef, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "components/ui/dialog";
import { MdPermMedia } from "react-icons/md";
import ReactTextareaAutosize from "react-textarea-autosize";
import Media from "public/media.svg";
import Image from "next/image";
import { Input } from "components/ui/input";

type receivedMetadata = {
  putUri: string;
  user: string;
  objectKey: string;
};

type receivedGetUri = {
  getUri: string;
};

const AddPost = () => {
  const fileInput = useRef<HTMLInputElement>(null);
  const [media, setMedia] = useState<string | null>(null);
  const [fileToUpload, setFileToUpload] = useState<File | null>(null);
  const [filetype, setFiletype] = useState<string | null>(null);
  const [description, setDescription] = useState("");
  const handleButtonClick = () => {
    fileInput.current && fileInput.current.click();
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const media = event.target.files[0];
      setFileToUpload(media!);
      console.log(media);

      if (media?.type.startsWith("image")) {
        setFiletype("image");
      } else if (media?.type.startsWith("video")) {
        setFiletype("video");
      } else {
        setFiletype(null);
      }

      setMedia(URL.createObjectURL(media!));
    }
  };

  const removeMediaFiles = () => {
    if (media) {
      setMedia(null);
    }
  };

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const metadata = {
      user: "Himanshu",
      size: fileToUpload?.size,
      name: fileToUpload?.name,
      contentType: fileToUpload?.type,
    };

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL! + "api/metadata",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(metadata),
        }
      );

      if (response.ok) {
        const uriData = (await response.json()) as receivedMetadata;
        console.log("uriData: ", uriData);

        try {
          const res = await fetch(uriData.putUri, {
            method: "PUT",
            headers: {
              "Content-Type": metadata.contentType!,
            },
            body: fileToUpload,
          });

          if (res.ok) {
            console.log("File uploaded to s3 successfully");
            console.log("Media put url : ", res.url);

            const folderName = uriData.objectKey.split("/")[0];
            const actualKey = uriData.objectKey.split("/")[1];

            try {
              const mediaRes = await fetch(
                `process.env.BACKEND_URLapi/metadata?folderName=${folderName}&objectKey=${actualKey}`,
                {
                  method: "GET",
                }
              );

              const data = (await mediaRes.json()) as receivedGetUri;
              console.log("Get URI: ", data.getUri);

              const dataToSend = {
                user: metadata.user,
                mediaUrl: data.getUri,
                description,
              };

              try {
                const postRes = await fetch(
                  process.env.NEXT_PUBLIC_BACKEND_URL! + "api/post",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(dataToSend),
                  }
                );

                const data = await postRes.json();

                console.log(data);
              } catch (error) {
                console.log("Error while sending url to backend", error);
              }
            } catch (error) {
              console.log("Error while getting media URL: ", error);
            }
          } else {
            console.error("Error while uploading: ", res.text);
          }
        } catch (error) {
          console.log("Error while posting media with putsignurl: ", error);
        }
      } else {
        console.log("Error in response from metadata: ", response.text);
      }
    } catch (error) {
      console.log("Error while sending Metadata: ", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Create a Post</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>
            <div className="flex gap-3 items-center">
              <Avatar className="w-12 h-12">
                <AvatarImage
                  src="https://avatars.githubusercontent.com/u/127422698?s=96&v=4"
                  alt="DP"
                />
                <AvatarFallback>SR</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <h3 className="font-semibold text-base">Sushant Rao</h3>
                <h3 className="font-medium text-sm">About Information</h3>
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>
        <div className="py-2 flex items-start flex-col gap-2">
          {/* <Button
            variant={"ghost"}
            className="flex gap-2"
            onClick={handleButtonClick}
          >
            <Image src={Media} alt="media"></Image>
            <span>Media</span>
          </Button> */}
          <ReactTextareaAutosize
            minRows={4}
            maxRows={10}
            placeholder="What do you want to talk about?"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            onChange={handleTextChange}
            value={description}
          />
          {media && filetype === "image" ? (
            <Image
              src={media!}
              alt="uploaded image"
              width={200}
              height={100}
            ></Image>
          ) : filetype === "video" ? (
            <iframe src={media!} className="aspect-video"></iframe>
          ) : (
            <></>
          )}
        </div>
        <DialogFooter className="">
          <div className="w-full flex justify-between ">
            <Input
              type="file"
              style={{ display: "none" }}
              ref={fileInput}
              onChange={handleFileChange}
            />
            <Button
              variant={"ghost"}
              onClick={handleButtonClick}
              className="text-2xl text-bluebg"
            >
              <MdPermMedia></MdPermMedia>
            </Button>
            <Button onClick={handleSubmit} className="bg-bluebg" type="submit">
              Create
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddPost;
