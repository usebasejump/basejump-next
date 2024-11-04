"use server"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../ui/card";
import { Alert, AlertDescription } from "../../ui/alert";
import { createClient } from "@/lib/supabase/server";
import { Actions } from './actions'

type Props = {
    accountId: string;
    returnUrl: string;
}

export default async function AccountBillingStatus({ accountId, returnUrl }: Props) {
    const supabaseClient = await createClient();

    const { data, error } = await supabaseClient.functions.invoke('billing-functions', {
        body: {
            action: "get_billing_status",
            args: {
                account_id: accountId
            }
        }
    });

    return (
        <Card>
            <CardHeader>
                <CardTitle>Billing Status</CardTitle>
                <CardDescription>
                    A quick overview of your billing status
                </CardDescription>
            </CardHeader>
            <CardContent>
                {!Boolean(data?.billing_enabled) ? (
                    <Alert variant="destructive">
                        <AlertDescription>
                            Billing is not enabled for this account. Check out usebasejump.com for more info or remove this component if you don't plan on enabling billing.
                        </AlertDescription>
                    </Alert>
                ) : (
                    <div>
                        <p>Status: {data.status}</p>
                    </div>
                )}

            </CardContent>
            {(Boolean(data?.billing_enabled)) && (
                <CardFooter>
                    <Actions accountId={accountId} returnUrl={returnUrl} status={data.status} />
                </CardFooter>
            )}
        </Card>
    )
}
