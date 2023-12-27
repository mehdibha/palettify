import React from "react";
import { Input, Label } from "@palettify/ui";
import { FormCardLayout } from "@/components/layout/form-card-layout";

interface AccountDetailsProps {
  name?: string;
  email?: string;
  className?: string;
}

export const AccountDetails = (props: AccountDetailsProps) => {
  const { name, email, className } = props;

  return (
    <FormCardLayout title="Account Details" className={className}>
      <Label htmlFor="name">Name</Label>
      <Input id="name" value={name} disabled />
      <Label htmlFor="email">Email</Label>
      <Input id="email" value={email} disabled />
    </FormCardLayout>
  );
};
