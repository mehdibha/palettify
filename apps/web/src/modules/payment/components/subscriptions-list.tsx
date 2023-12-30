import React from "react";
import Image from "next/image";
import {
  Badge,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@palettify/ui";
import { cn } from "@palettify/utils";
import { FormCardLayout } from "@/components/layout/form-card-layout";

interface SubscriptionsListProps {
  subscriptions: {
    id: string;
    image?: string;
    siteName: string | null;
    isLive: boolean;
    href: string | null;
    plan: { name: string };
  }[];
  className?: string;
}

export const SubscriptionsList = (props: SubscriptionsListProps) => {
  const { subscriptions, className } = props;
  return (
    <FormCardLayout title="All subscriptions" className={className}>
      <div className="overflow-hidden rounded border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]"></TableHead>
              <TableHead>Site name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[200px]">Domain</TableHead>
              <TableHead>Plan</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subscriptions.length > 0 &&
              subscriptions.map((subscription) => (
                <TableRow key={subscription.id}>
                  <TableCell className="font-medium">
                    <Image
                      alt={subscription.siteName ?? ""}
                      className="rounded"
                      src={subscription.image ?? "/images/placeholder.png"}
                    />
                  </TableCell>
                  <TableCell>{subscription.siteName}</TableCell>
                  <TableCell>
                    <div className="flex justify-start">
                      <Badge
                        className={cn({
                          "bg-success text-success-foreground": subscription.isLive,
                          "bg-destructive text-destructive-foreground":
                            !subscription.isLive,
                        })}
                      >
                        {subscription.isLive ? "Live" : "Inactive"}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell>{subscription.href}</TableCell>
                  <TableCell>{subscription.plan.name}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        {subscriptions.length === 0 && (
          <div className="text-muted-foreground p-4 text-center">
            You don&apos;t have any subscription, start by creating a website.
          </div>
        )}
      </div>
    </FormCardLayout>
  );
};
