import { Radio } from "lucide-react";
import logo from "../../assets/logo.png";
import Image from "next/image";
import { SubscriptionForm } from "./subscription-form";

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col justify-center gap-16">
      <div className="flex flex-col gap-8 items-center md:items-start">
        <Image src={logo} alt="devstage logo" width={108.5} height={30} />

        <h1 className="text-4xl text-center leading-none font-heading font-medium flex flex-col md:text-7xl md:text-left">
          <span className="text-blue">CodeCraft</span>
          Summit 2025
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-10 items-stretch">
        <div className="flex-1 bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-heading font-semibold text-gray-200 text-xl">
              About the Event
            </h2>

            <span className="text-purple font-semibold text-xs flex items-center gap-2">
              <Radio className="size-5" />
              Live
            </span>
          </div>

          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            An event created by and for developers who are passionate about
            building innovative solutions and sharing knowledge. We'll dive into
            the latest trends in software development, system architecture, and
            emerging technologies through talks, workshops, and hackathons.
            <br />
            <br />
            15th to 17th March | 6:00 PM to 9:00 PM | Online & Free
          </p>
        </div>

        <SubscriptionForm />
      </div>
    </div>
  );
}
