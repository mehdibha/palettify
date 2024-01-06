import React from "react";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  MoreVerticalIcon,
} from "@palettify/ui";

interface ThemeCardMenuProps {
  className?: string;
}

export const ThemeCardMenu = (props: ThemeCardMenuProps) => {
  const { className } = props;

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild className={className}>
        <Button variant="text" size="icon-sm" className="w-5">
          <MoreVerticalIcon size={18} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
