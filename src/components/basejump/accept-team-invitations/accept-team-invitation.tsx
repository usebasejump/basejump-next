import { createClient } from "@/lib/supabase/server";
import { Alert } from "../../ui/alert";
import { Card, CardContent } from "../../ui/card";
import { AcceptInvitationForm } from './AcceptInvitationForm'

type Props = {
    token: string;
}
export default async function AcceptTeamInvitation({ token }: Props) {
    const supabaseClient = await createClient();
    const { data: invitation } = await supabaseClient.rpc('lookup_invitation', {
        lookup_invitation_token: token
    });

    return (
        <Card>
            <CardContent className="p-8 text-center flex flex-col gap-y-8">
                <div>
                    <p>You've been invited to join</p>
                    <h1 className="text-xl font-bold">{invitation.account_name}</h1>
                </div>
                {Boolean(invitation.active) ? (
                    <AcceptInvitationForm token={token} />
                ) : (
                    <Alert variant="destructive">
                        This invitation has been deactivated. Please contact the account owner for a new invitation.
                    </Alert>
                )}
            </CardContent>
        </Card>
    )
}
