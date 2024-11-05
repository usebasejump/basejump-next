"use client"

import { Input } from "@/components/ui/input"
import { SubmitButton } from "../ui/submit-button"
import { editTeamName } from "@/lib/actions/teams";
import { Label } from "../ui/label";
import { GetAccountResponse } from "@usebasejump/shared";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { useActionState} from "react";

type Props = {
    account: GetAccountResponse;
}

export default function EditTeamName({ account }: Props) {
    const [state, editTeamNameAction] = useActionState(editTeamName, {
        message: '',
        name: account.name
      });

    return (
        <Card>
            <CardHeader>
                <CardTitle>Team Info</CardTitle>
                <CardDescription>
                    Your team name and identifier are unique for your team
                </CardDescription>
            </CardHeader>
            <form className="animate-in flex-1 text-foreground">
                <input type="hidden" name="accountId" value={account.account_id} />
                <CardContent className="flex flex-col gap-y-6">
                    <div className="flex flex-col gap-y-2">
                        <Label htmlFor="name">
                            Team Name
                        </Label>
                        <Input
                            defaultValue={state.name}
                            name="name"
                            placeholder="My Team"
                            required
                        />
                    </div>
                </CardContent>
                <CardFooter>
                    <SubmitButton
                        formAction={editTeamNameAction}
                        errorMessage={state.message}
                        pendingText="Updating..."
                    >
                        Save
                    </SubmitButton>
                </CardFooter>
            </form>
        </Card>
    )
}
