import React from "react";

export default function Footer() {
  return (
    <div className="px-12 pb-9 flex justify-between items-center text-sm">
      <span className="leading-relaxed">
        Copyright 2022 @{" "}
        <a
          className="relative after:absolute after:-bottom-1 after:left-0 after:w-full after:border-b after:border-white after:border-opacity-30 hover:after:border-opacity-100 after:transition after:duration-200 ease-in"
          href="https://ridhoandml.com"
        >
          Ridho Anandamal
        </a>
      </span>
      <span className="text-right leading-relaxed">
        Created with ❤️ using{" "}
        <a
          className="relative after:absolute after:-bottom-1 after:left-0 after:w-full after:border-b after:border-white after:border-opacity-30 hover:after:border-opacity-100 after:transition after:duration-200 ease-in"
          href="https://reactjs.org/"
        >
          ReactJS
        </a>{" "}
        and deployed on{" "}
        <a
          className="relative after:absolute after:-bottom-1 after:left-0 after:w-full after:border-b after:border-white after:border-opacity-30 hover:after:border-opacity-100 after:transition after:duration-200 ease-in"
          href="https://vercel.com"
        >
          Vercel
        </a>
      </span>
    </div>
  );
}
