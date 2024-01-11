import { Skeleton } from "@palettify/ui";

export default function Loading() {
  return (
    <div>
      <h2 className="pl-2 text-2xl font-bold">Account</h2>
      <p className="text-muted-foreground pl-2">
        Manage your account settings and preferences
      </p>
      <div className="ml-2 mt-12 max-w-sm space-y-10">
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <Skeleton key={index} className="h-10 w-full" />
          ))}
      </div>
    </div>
  );
}
