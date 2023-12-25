"use client";

import React, { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  useToast,
} from "@palettify/ui";
import { Form } from "@palettify/ui";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { collectEmail } from "@/modules/email/actions";

interface CollectEmailsModalProps {
  children: React.ReactNode;
}

const formSchema = z.object({
  email: z.string().email(),
});

export const CollectEmailsModal = (props: CollectEmailsModalProps) => {
  const { children } = props;

  const { toast } = useToast();
  const [open, setOpen] = React.useState(false);
  let [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      const result = await collectEmail({ email: values.email });
      if (result?.error) {
        toast({ title: result?.error, variant: "destructive" });
      }
      if (result.success) {
        setOpen(false);
        toast({
          title: "Your email has been submitted. We'll notify when launched.",
        });
      }
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="px-12 pb-16 pt-20">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <h2 className="font-display text-center text-3xl">
              Get notified when launched.
            </h2>
            <p className="text-muted-foreground pb-4 text-center">
              We are launching soon, we will send you an email.
            </p>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="text-center">
              <Button loading={isPending} type="submit" color="primary" className="mt-6">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
