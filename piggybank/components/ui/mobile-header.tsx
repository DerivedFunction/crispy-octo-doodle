import { MobileSidebar } from "./mobile-sidebar";
export const MobileHeader = () => {
  return (
    <nav className="lg:hidden px-6 h-[50px] flex items-center bg-violet-800 border-b fixed top-9 w-full z-50">
      <MobileSidebar />
    </nav>
  );
};
