"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  MoreVerticalIcon,
  useToast,
} from "@palettify/ui";
import { deleteTheme } from "../actions";
import { Features } from "../types";

interface ThemeCardMenuProps {
  themeId?: string;
  className?: string;
  features?: Features[];
  deleted: boolean;
  onDeleteChange: (deleted: boolean) => void;
}

export const ThemeCardMenu = (props: ThemeCardMenuProps) => {
  const { themeId, className, features, deleted, onDeleteChange } = props;

  const router = useRouter();
  const { toast } = useToast();
  const [pending, startTransition] = React.useTransition();
  const handleCopyUrl = () => {
    window.navigator.clipboard.writeText(`https://palettify.co/playground/${themeId}`);
  };

  const handleDeleteClick = () => {
    onDeleteChange(true);
    startTransition(async () => {
      if (!pending && themeId) {
        // optimistic update
        const result = await deleteTheme(themeId);
        if (result?.error) {
          onDeleteChange(false);
        }
      }
    });
  };

  if (deleted) {
    return null;
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild className={className}>
        <Button variant="text" size="icon-sm" className="w-5">
          <MoreVerticalIcon size={18} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="cursor-pointer" onClick={handleCopyUrl}>
          Copy url
        </DropdownMenuItem>
        {features?.includes(Features.Delete) && (
          <DropdownMenuItem className="cursor-pointer" onClick={handleDeleteClick}>
            Delete
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
