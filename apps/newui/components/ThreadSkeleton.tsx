import { Skeleton } from "@/components/ui/skeleton";

export default function Component() {
  return (
    <div className="p-2 border-b border-gray-200">
      <div className="flex items-start space-x-2">
        <Skeleton className="w-12 h-12 rounded-full" />
        <div className="flex-1">
          <Skeleton className="h-6 w-48 mb-2" />
          <Skeleton className="h-4 w-full mb-4" />
          <div className="flex items-center space-x-2">
            <Skeleton className="w-16 h-6" />
            <Skeleton className="w-16 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
