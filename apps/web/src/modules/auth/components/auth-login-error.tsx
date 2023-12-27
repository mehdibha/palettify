import React from "react";
import { useSearchParams } from "next/navigation";
import { Alert, AlertDescription } from "@palettify/ui";

interface AuthLoginProps {
  className: string;
}

export const AuthLoginError = (props: AuthLoginProps) => {
  const searchParams = useSearchParams();
  const error = searchParams?.get("error");
  const errorMessage = Array.isArray(error) ? error.pop() : error;

  if (!errorMessage) {
    return null;
  }

  return (
    <Alert variant="destructive" {...props}>
      <AlertDescription>{errorMessage}</AlertDescription>
    </Alert>
  );
};
