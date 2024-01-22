import { FcApproval } from "react-icons/fc";

interface FormErrorProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormErrorProps) => {
  if (!message) return null;
  return (
    <div className="flex items-center bg-emerald-200 p-3 rounded-md gap-x-2 text-sm text-emerald-500 ">
      <FcApproval className="h-5 w-5" />
      <span>{message}</span>
    </div>
  );
};
