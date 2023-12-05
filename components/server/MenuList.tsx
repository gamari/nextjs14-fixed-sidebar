import React from "react";
import { MenuLink } from "../client/MenuLink";

interface Props {
  className?: string;
}

export const MenuList = ({ className = "" }: Props) => {
  return (
    <ul className={`flex flex-col gap-2 ${className}`}>
      <li>
        <MenuLink url="/" title="メニュー" />
      </li>
      <li>
        <MenuLink url="/menu1" title="メニュー1" />
      </li>
      <li>
        <MenuLink url="/menu2" title="メニュー2" />
      </li>
    </ul>
  );
};
