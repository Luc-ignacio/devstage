import Image from "next/image";
import logo from "../../assets/logo.png";

import { Ranking } from "./ranking";
import { Stats } from "./stats";
import { InviteLinkInput } from "./invite-link-input";

export default function Invite() {
  const inviteLink = "devstage.com/codecraft-summit-2025/6618";

  return (
    <div className="min-h-dvh flex flex-col md:flex-row items-center justify-between gap-16">
      <div className="flex flex-col gap-10 w-full max-w-[550px]">
        <Image src={logo} alt="devstage logo" width={108.5} height={30} />

        <div className="space-y-2">
          <h1 className="text-4xl font-semibold font-heading text-gray-100 leading-none">
            Registration Confirmed
          </h1>

          <p className="text-gray-300">
            To join the event, access the link sent to your email.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
              Refer and Win
            </h2>

            <p className="text-gray-300">
              Invite more people to the event and compete for exclusive prizes!
              Simply share the link below and track registrations:
            </p>
          </div>
        </div>

        <InviteLinkInput inviteLink={inviteLink} />

        <Stats />
      </div>

      <Ranking />
    </div>
  );
}
