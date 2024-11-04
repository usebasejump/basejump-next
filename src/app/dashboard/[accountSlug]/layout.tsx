import {createClient} from "@/lib/supabase/server";
import DashboardHeader from "@/components/dashboard/dashboard-header";
import { redirect } from "next/navigation";

export default async function PersonalAccountDashboard(props: {children: React.ReactNode, params: Promise<{accountSlug: string}>}) {
    const params = await props.params;

    const {
        accountSlug
    } = params;

    const {
        children
    } = props;

    const supabaseClient = await createClient();

    const {data: teamAccount, error} = await supabaseClient.rpc('get_account_by_slug', {
        slug: accountSlug
    });

    if (!teamAccount) {
        redirect('/dashboard');
    }

    const navigation = [
        {
            name: 'Overview',
            href: `/dashboard/${accountSlug}`,
        },
        {
            name: 'Settings',
            href: `/dashboard/${accountSlug}/settings`
        }
    ]

    return (
        <>
            <DashboardHeader accountId={teamAccount.account_id} navigation={navigation}/>
            <div className="w-full p-8">{children}</div>
        </>
    )
}
