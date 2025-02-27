import { BadgeCheck, Medal, MousePointerClick } from "lucide-react";
import Image from "next/image";

export function Stats() {
  return (
    <div className="grid gap-6 grid-col md:grid-cols-3">
      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7.5 flex flex-col items-center justify-center gap-1 rounded-xl">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          1042
        </span>

        <span className="text-gray-300 text-sm leading-none text-center">
          Link Clicks
        </span>

        <MousePointerClick className="size-5 text-purple absolute top-3 left-3" />
      </div>

      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7.5 flex flex-col items-center justify-center gap-1 rounded-xl">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          37
        </span>

        <span className="text-gray-300 text-sm leading-none text-center">
          Registrations Completed
        </span>

        <BadgeCheck className="size-5 text-purple absolute top-3 left-3" />
      </div>

      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7.5 flex flex-col items-center justify-center gap-1 rounded-xl">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          3º
        </span>

        <span className="text-gray-300 text-sm leading-none text-center">
          Ranking Position
        </span>

        <Medal className="size-5 text-purple absolute top-3 left-3" />
      </div>
    </div>
  );
}
