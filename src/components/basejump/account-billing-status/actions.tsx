"use client"

import { SubmitButton } from "../../ui/submit-button";
import { manageSubscription, setupNewSubscription } from "@/lib/actions/billing";
import { useActionState } from 'react'

export function Actions({accountId, returnUrl, status}: {accountId: string, returnUrl: string, status: any}) {
  const [, setupNewSubscriptionAction] = useActionState(setupNewSubscription, null)
  const [, manageSubscriptionAction] = useActionState(manageSubscription, null)

  return (
    <form className="w-full">
        <input type="hidden" name="accountId" value={accountId} />
        <input type="hidden" name="returnUrl" value={returnUrl} />
        {status === 'not_setup' ? (
            <SubmitButton pendingText="Loading..." formAction={setupNewSubscriptionAction}>Setup your Subscription</SubmitButton>
        ) : (
            <SubmitButton pendingText="Loading..." formAction={manageSubscriptionAction}>Manage Subscription</SubmitButton>
        )}
    </form>
  )
}
