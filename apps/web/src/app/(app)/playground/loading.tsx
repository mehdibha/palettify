import { Skeleton } from "@palettify/ui";

export default function Loading() {
  return (
    <div className="min-h-screen">
      <div className="lg:w-[460px]">
        <div className="container px-8">
          <Skeleton className="bg-card h-[1000px]" />
        </div>
      </div>
      <div className="fixed right-0 top-0 hidden h-[calc(100vh)] w-[calc(100%-460px+16px)] overflow-hidden p-4 pt-[64px] lg:block">
        <Skeleton className="bg-card h-full overflow-hidden rounded-md pb-10 shadow-xl" />
      </div>
    </div>
  );
}
