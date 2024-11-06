import AcceptTeamInvitation from "@/components/basejump/accept-team-invitations/accept-team-invitation";
import { redirect } from "next/navigation"

export default async function AcceptInvitationPage(props: {searchParams: Promise<{token?: string}>}) {
    const searchParams = await props.searchParams;

    if (!searchParams.token) {
       redirect("/");
    }

    return (
        <div className="max-w-md mx-auto w-full my-12">
            <AcceptTeamInvitation token={searchParams.token} />
        </div>
    )
}
