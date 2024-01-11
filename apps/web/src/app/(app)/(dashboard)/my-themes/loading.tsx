import { Skeleton } from "@palettify/ui";

export default function Loading() {
  return (
    <div>
      <h2 className="pl-2 text-2xl font-bold">My themes</h2>
      <p className="text-muted-foreground pl-2">
        Here you can find all the themes you created
      </p>
      <div className="px-3">
        <div className="flex justify-end">
          <Skeleton className="h-10 w-64" />
        </div>
        <div className="xs:grid-cols-2 mt-14 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {Array(10)
            .fill(null)
            .map((_, index) => (
              <Skeleton key={index} className="h-[300px]" />
            ))}
        </div>
      </div>
    </div>
  );
}
