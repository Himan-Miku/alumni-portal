export interface User {
  name: string;
  posts: [];
  followers: [];
  following: [];
  about?: string;
  email: string;
  password: string;
  education?: string;
  dob?: Date;
  gender?: "Male" | "Female" | "Other";
  linkedin?: string;
  github?: string;
  profilePic?: string;
  userType?: "Student" | "Alumni";
}
