import { FaExclamationTriangle } from "react-icons/fa";

interface FormErrorProps {
    message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
    if(!message) return null;
    return (
        <div className="flex items-center bg-destructive/10 p-3 rounded-md gap-x-2 text-sm text-destructive ">
            <FaExclamationTriangle className="h-4 w-4" />
            <span>{message}</span>
        </div>
    );
}