import { ReactNode } from "react";
import { Preview } from "./preview";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default async function DashboardLayout(props: DashboardLayoutProps) {
  const { children } = props;

  return (
    <div className="min-h-screen">
      <div>
        <div className="lg:w-[500px]">
          <div className="container px-8">
            <div className="bg-card rounded-xl border p-4 shadow-xl">{children}</div>
          </div>
        </div>
        <Preview />
      </div>
    </div>
  );
}
