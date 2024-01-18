import mongoose from "mongoose";

export interface User {
  name: string;
  _id?: string;
  posts?: [];
  followers?: string[];
  following?: string[];
  about?: string;
  email: string;
  password?: string;
  education?: [
    {
      studyfrom: string;
      studied: string;
      duration: string;
      percentage: string;
      _id?: string;
    },
  ];
  work?: [
    {
      company: string;
      position: string;
      duration: string;
      _id?: string;
    },
  ];
  dob?: Date;
  gender?: "Male" | "Female" | "Other";
  linkedin?: string;
  github?: string;
  image?: string;
  userType?: "Student" | "Alumni";
}

interface Comment {
  text: string;
  owner: string; // Reference to User
}

// Post Schema
export interface Post {
  Uid: User; // Reference to User
  description?: string;
  media: string[];
  likes: string[]; // Reference to User
  comments: Comment[];
}
