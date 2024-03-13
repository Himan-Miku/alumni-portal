import bcrypt from "bcryptjs";

export default async function comparePassword(
  EnteredPassword: string,
  orignalPassword: string,
) {
  return bcrypt.compare(EnteredPassword, orignalPassword);
}
