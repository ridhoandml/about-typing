import React from "react";
import { Link } from "../types";

interface Props {
  link: Link[];
}

export default function NavigationItem({ link }: Props) {
  return (
    <div className="flex gap-4">
      {link.map((item, index) => (
        <a
          key={index}
          className="text-sm font-medium h-9 px-4 flex justify-center items-center rounded-lg hover:bg-white hover:bg-opacity-10 transition duration-200 ease-in"
          href={item.link}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}
