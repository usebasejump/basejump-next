"use client"

import { acceptInvitation } from "@/lib/actions/invitations";
import { SubmitButton } from "../../ui/submit-button";
import { useActionState } from 'react'

export function AcceptInvitationForm({token}: {token: string}) {
  const [state, formAction] = useActionState(acceptInvitation, {
    message: ''
  })
  
  return (
    <form>
        <input type="hidden" name="token" value={token} />
        <SubmitButton formAction={formAction} errorMessage={state.message} pendingText="Accepting invitation...">Accept invitation</SubmitButton>
    </form>
  )
}
