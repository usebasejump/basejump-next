"use server";

import { createClient } from "@/lib/supabase/server";
import { headers } from 'next/headers'
import { redirect } from "next/navigation";

export const signIn = async (formData: FormData) => {
  const returnUrl = formData.get("returnUrl")?.toString()
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    return {
      message: "Could not authenticate user",
    }
  }

  return redirect(returnUrl || "/dashboard");
};

export const signUp = async (formData: FormData) => {
  const origin = (await headers()).get("origin");
  const returnUrl = formData.get("returnUrl")?.toString()
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback?returnUrl=${returnUrl}`,
    },
  });

  if (error) {
    return {
      message: "Could not authenticate user",
    }
  }

  return {
    message: "Check email to continue sign in process",
  }
};
