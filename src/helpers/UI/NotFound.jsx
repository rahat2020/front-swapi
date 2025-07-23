import { Search, AlertCircle } from "react-feather";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="relative mb-8">
        <div className="w-24 h-24 bg-gradient-to-r from-blue-400 via-blue-400 rounded-full flex items-center justify-center border-2 border-yellow-500">
          <Search className="w-10 h-10 text-gray-200" />
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6  rounded-full flex items-center justify-center border border-red-500/30">
          <AlertCircle className="w-4 h-4 text-red-400" />
        </div>
      </div>
      <div className="space-y-4 mb-8">
        <p className="text-base md:text-xl font-bold text-gray-800">
          No Characters Found, Sorry!.
        </p>
      </div>
    </div>
  );
}
