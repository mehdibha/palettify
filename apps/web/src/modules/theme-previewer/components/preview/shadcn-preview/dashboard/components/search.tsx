import { cn } from "@palettify/utils";
import { Input } from "@/modules/shadcn-ui/ui/input";

export function Search({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <div>
      <Input
        type="search"
        placeholder="Search..."
        className={cn("w-[150px] md:w-[200px] xl:w-[150px]", className)}
      />
    </div>
  );
}
