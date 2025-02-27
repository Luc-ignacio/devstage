import Image from "next/image";
import gold from "../../assets/medal_gold.svg";
import silver from "../../assets/medal_silver.svg";
import cooper from "../../assets/medal_cooper.svg";

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Referral Ranking
      </h2>

      <div className=" space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1º</span> | Lucas I.
          </span>

          <span className="text-2xl font-heading font-semibold text-gray-200 leading-none">
            42
          </span>

          <Image
            src={gold}
            alt={"Gold Medal"}
            className="absolute top-0 right-6"
          />
        </div>

        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2º</span> | Franco M.
          </span>

          <span className="text-2xl font-heading font-semibold text-gray-200 leading-none">
            39
          </span>

          <Image
            src={silver}
            alt={"Silver Medal"}
            className="absolute top-0 right-6"
          />
        </div>

        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3º</span> | John D.
          </span>

          <span className="text-2xl font-heading font-semibold text-gray-200 leading-none">
            37
          </span>

          <Image
            src={cooper}
            alt={"Cooper Medal"}
            className="absolute top-0 right-6"
          />
        </div>
      </div>
    </div>
  );
}
