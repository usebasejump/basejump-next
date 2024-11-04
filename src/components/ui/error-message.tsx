import { Alert, AlertDescription } from "./alert";
import { AlertTriangle } from "lucide-react";

export function ErrorMessage({errorMessage}: {errorMessage: string}) {
  return (
    <Alert variant="destructive" className="w-full">
      <AlertTriangle className="h-4 w-4" />
      <AlertDescription>
        {errorMessage}
      </AlertDescription>
    </Alert>
  )
}
