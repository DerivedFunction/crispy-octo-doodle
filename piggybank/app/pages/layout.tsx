import type { PropsWithChildren } from "react";

import { Footer } from "./footer";
import { Header } from "./header";
import { MobileHeader } from "@/components/mobile-header";
import { Sidebar } from "@/components/sidebar";

const MarketingLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-screen flex-col">
      <MobileHeader />
      <Sidebar className="hidden lg:flex" />
      <main className="flex flex-1 flex-col items-center justify-center pt-1">
        {children}
      </main>
    </div>
  );
};

export default MarketingLayout;
