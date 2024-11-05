'use client';

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { type FormEventHandler, type MouseEventHandler, useCallback, useState } from 'react'
import { signIn, signUp } from './actions'
import { useSearchParams } from 'next/navigation'
import { ErrorMessage } from '@/components/ui/error-message'
import { Button } from "@/components/ui/button";

export default function Login() {
  const searchParams = useSearchParams();

  const [isPending, setIsPending] = useState<boolean>(false)
  const [message, setMessage] = useState<string | null>(null)
  
  const [state, setState] = useState<{
    message: string | null,
    email: string,
    password: string
  }>({
    message: null,
    email: '',
    password: ''
  })

  const onSubmit: FormEventHandler<HTMLFormElement> = useCallback(async function onSubmit(event) {
    event.preventDefault();

    setIsPending(true)
    const formData = new FormData(event.target as HTMLFormElement)
    const result = await signIn(formData)
    setMessage(result.message ?? null)
    setIsPending(false)
  }, [])
  
  const onSignUp: MouseEventHandler<HTMLButtonElement> = useCallback(async function onSignUp(event) {
    event.preventDefault();

    setIsPending(true)
    const formData = new FormData((event.target as HTMLButtonElement).closest('form')!)
    const result = await signUp(formData)
    setMessage(result.message ?? null)
    setIsPending(false)
  }, [])

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Link>

      <form onSubmit={onSubmit} className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
        <input name="returnUrl" type="hidden" value={searchParams.get('returnUrl') ?? ''} />
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <Input
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <Input
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <div className="flex flex-col gap-y-4 w-full">
          {Boolean(state.message) && <ErrorMessage errorMessage={state.message!} />}
          <div>
            <Button type="submit" aria-disabled={isPending}>
              {isPending ? "Signing In..." : "Sign In"}
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 w-full">
          {Boolean(state.message) && <ErrorMessage errorMessage={state.message!} />}
          <div>
            <Button type="submit" aria-disabled={isPending} variant="outline" onClick={onSignUp}>
              {isPending ? "Signing Up..." : "Sign Up"}
            </Button>
          </div>
        </div>
        {message && (
          <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
