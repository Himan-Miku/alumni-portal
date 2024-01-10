export interface User {
  name: string;
  posts?: [];
  followers?: any[];
  following?: any[];
  about?: string;
  email: string;
  password?: string;
  education?: [
    {
      studyfrom: String;
      studied: String;
      duration: String;
      percentage: String;
    },
  ];
  work?: [
    {
      company: String;
      position: String;
      duration: String;
    },
  ];
  dob?: Date;
  gender?: "Male" | "Female" | "Other";
  linkedin?: string;
  github?: string;
  image?: string;
  userType?: "Student" | "Alumni";
}
