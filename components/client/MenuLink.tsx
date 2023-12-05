"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  title: string;
  url: string;
}

export const MenuLink = ({ title, url }: Props) => {
  const pathname = usePathname();
  const linkStyle =
    pathname === url ? "bg-slate-500" : "";

  return (
    <Link href={url}>
      <div className={`p-2 rounded-md border border-white hover:cursor-pointer ${linkStyle}`}>{title}</div>
    </Link>
  );
};
