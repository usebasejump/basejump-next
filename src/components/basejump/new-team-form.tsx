import { Input } from "@/components/ui/input"
import { SubmitButton } from "../ui/submit-button"
import { createTeam } from "@/lib/actions/teams";
import { Label } from "../ui/label";
import {useActionState} from 'react';

export default function NewTeamForm() {
    const [state, createTeamAction] = useActionState(createTeam, {
        name: '',
        slug: '',
        message: ''
      });

    return (
        <form className="animate-in flex-1 flex flex-col w-full justify-center gap-y-6 text-foreground">
            <div className="flex flex-col gap-y-2">
                <Label htmlFor="email">
                    Team Name
                </Label>
                <Input
                    name="name"
                    placeholder="My Team"
                    required
                    defaultValue={state.name}
                />
            </div>
            <div className="flex flex-col gap-y-2">
                <Label htmlFor="password">
                    Identifier
                </Label>
                <div className="flex items-center gap-x-2">
                    <span className="text-sm text-muted-foreground whitespace-nowrap grow">
                        https://your-app.com/
                    </span>
                    <Input
                        name="slug"
                        placeholder="my-team"
                        required
                        defaultValue={state.slug}
                    />
                </div>
            </div>
            <SubmitButton
                formAction={createTeamAction}
                errorMessage={state.message}
                pendingText="Creating..."
            >
                Create team
            </SubmitButton>
        </form>
    )
}
