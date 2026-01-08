import { PropsWithChildren } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

export const LayoutAdmin = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid grid-cols-[140px_1fr] grid-rows-[60px_1fr] h-full">
      <Header />
      <Sidebar />
      <main className="bg-[#191938] text-white">{children}</main>
    </div>
  );
};
