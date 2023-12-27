import React from "react";
import { Invoice } from "@palettify/database";
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
import { cn, formatDate } from "@palettify/utils";
import { FormCardLayout } from "@/components/layout/form-card-layout";

interface InvoicesListProps {
  invoices: Invoice[];
  className?: string;
}

export const InvoicesList = (props: InvoicesListProps) => {
  const { invoices, className } = props;
  return (
    <FormCardLayout title="Invoices" className={className}>
      <div className="overflow-hidden rounded border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead className="w-[200px]">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.length > 0 &&
              invoices.map((invoice, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">#{invoice.id}</TableCell>
                  <TableCell>{formatDate(invoice.createdAt)}</TableCell>
                  <TableCell>{invoice.amount / 100}$</TableCell>
                  <TableCell>
                    <div className="flex justify-start">
                      <Badge
                        className={cn("bg-destructive text-destructive-foreground", {
                          "bg-success text-success-foreground": invoice.status === "paid",
                        })}
                      >
                        {invoice.status === "paid" ? "Paid" : "Unpaid"}
                      </Badge>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        {invoices.length === 0 && (
          <div className="text-muted-foreground p-4 text-center">
            You don&apos;t have any invoices for now.
          </div>
        )}
      </div>
    </FormCardLayout>
  );
};
