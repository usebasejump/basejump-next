import {createClient} from "@/lib/supabase/server";
import ManageTeamMembers from "@/components/basejump/manage-team-members";
import ManageTeamInvitations from "@/components/basejump/manage-team-invitations";
import { Alert } from "@/components/ui/alert";

export default async function TeamMembersPage(props: {params: Promise<{accountSlug: string}>}) {
    const params = await props.params;

    const {
        accountSlug
    } = params;

    const supabaseClient = await createClient();
    const {data: teamAccount} = await supabaseClient.rpc('get_account_by_slug', {
        slug: accountSlug
    });

    if (teamAccount.account_role !== 'owner') {
        return (
            <Alert variant="destructive">You do not have permission to access this page</Alert>
        )
    }

    return (
        <div className="flex flex-col gap-y-8">
            <ManageTeamInvitations accountId={teamAccount.account_id} />
            <ManageTeamMembers accountId={teamAccount.account_id} />
        </div>
    )
}
