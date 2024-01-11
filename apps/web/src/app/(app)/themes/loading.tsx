import { Skeleton } from "@palettify/ui";

export default function Loading() {
  return (
    <div className="container pt-20">
      <h1 className="font-display text-center text-5xl font-medium">Trending themes</h1>
      <p className="text-muted-foreground mt-4 text-center">
        Get inspired by thousands of themes and easily export for your popular ui library.
      </p>
      <div className="mt-9 flex justify-end">
        <Skeleton className="h-10 w-64" />
      </div>
      <div className="xs:grid-cols-2 mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {Array(10)
          .fill(null)
          .map((_, index) => (
            <Skeleton key={index} className="h-[300px]" />
          ))}
      </div>
    </div>
  );
}
