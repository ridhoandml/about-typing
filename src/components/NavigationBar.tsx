import React from "react";
import { internalLink } from "../datas";
import NavigationItem from "./NavigationItem";

export default function NavigationBar() {
  return (
    <div className="pt-9 px-12 flex justify-between items-center">
      <a
        href="/"
        className="hover:after:content-['....'] after:transition after:duration-200 after:ease-in hover:after:animate-[fade_1s_ease-in_infinite]"
      >
        About Typing
      </a>
      <div className="flex gap-4">
        <NavigationItem link={internalLink} />
        <button className="p-2 h-9 rounded-lg flex justify-center items-center border border-midnight-dark hover:bg-white hover:bg-opacity-10 transition duration-200 ease-in">
          <i className="bx bxs-moon text-xl"></i>
        </button>
        <a
          href="https://github.com"
          className="p-2 h-9 rounded-lg flex justify-center items-center border border-midnight-dark hover:bg-white hover:bg-opacity-10 transition duration-200 ease-in"
        >
          <i className="bx bxl-github text-xl"></i>
        </a>
      </div>
    </div>
  );
}
