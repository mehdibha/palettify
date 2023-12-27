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
          <div className="container px-8">{children}</div>
        </div>
        <Preview subdomain={"site.subdomain"} />
      </div>
    </div>
  );
}
