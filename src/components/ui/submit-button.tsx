"use client";

import { useFormStatus } from "react-dom";
import { type ComponentProps } from "react";
import { Button } from "@/components/ui/button";
import { ErrorMessage } from "./error-message";

type Props = Omit<ComponentProps<typeof Button>, 'formAction'> & {
  pendingText?: string;
  formAction: (formData: FormData) => void;
  errorMessage?: string;
};

export function SubmitButton({ children, formAction, errorMessage, pendingText = "Submitting...", ...props }: Props) {
  const { pending } = useFormStatus();

  return (
    <div className="flex flex-col gap-y-4 w-full">
      {Boolean(errorMessage) && <ErrorMessage errorMessage={errorMessage!} />}
      <div>
        <Button {...props} type="submit" aria-disabled={pending} formAction={formAction}>
          {pending ? pendingText : children}
        </Button>
      </div>
    </div>
  );
}
