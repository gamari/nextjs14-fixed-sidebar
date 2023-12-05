import React from "react";

import Link from "next/link";
import { MenuList } from "@/components/server/MenuList";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="flex h-screen">
      <div className="w-64 fixed inset-y-0 left-0 bg-slate-800 text-white shadow-lg">
        <div className="p-4">
          <Link href="/">LOGO</Link>
        </div>
        <div className="p-4">
          <h3 className="font-bold">メニュー</h3>
          <MenuList className="mt-4" />
        </div>
      </div>
      <main className="flex-1 ml-64">{children}</main>
    </div>
  );
};

export default MainLayout;
