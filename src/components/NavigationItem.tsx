import React, { HTMLAttributes } from "react";
import { NavLink } from "react-router-dom";
import { LinkType } from "../types";

interface Props {
  link: LinkType[];
}

export default function NavigationItem({ link }: Props) {
  const className: HTMLAttributes<HTMLDivElement>["className"] = `text-sm font-medium h-9 px-4 flex justify-center items-center rounded-lg hover:bg-white hover:bg-opacity-10 transition duration-200 ease-in`;
  return (
    <div className="flex gap-4">
      {link.map((item, index) => (
        <NavLink
          key={index}
          className={({ isActive }) =>
            isActive ? `bg-white bg-opacity-5 ${className}` : className
          }
          to={item.link}
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}
