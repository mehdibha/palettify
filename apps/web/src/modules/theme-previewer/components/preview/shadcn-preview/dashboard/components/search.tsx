import { Input } from "@/modules/shadcn-ui/ui/input";

export function Search() {
  return (
    <div>
      <Input
        type="search"
        placeholder="Search..."
        className="w-[150px] md:w-[200px] xl:w-[150px]"
      />
    </div>
  );
}
