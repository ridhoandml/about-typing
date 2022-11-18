import React from "react";
import { Camelize } from "../utils";

interface Props {
  label: string;
  options: string[];
}

export default function SelectItem({ label, options }: Props) {
  const htmlId = Camelize(label);

  return (
    <div className="flex flex-col w-44 gap-2">
      <div className="flex justify-between items-center">
        <label htmlFor={htmlId}>{label}</label>
        <i className="bx bxs-info-circle"></i>
      </div>
      <div className="relative">
        <select
          className="w-full bg-midnight-main h-9 px-3 border border-midnight-dark rounded-lg outline-none appearance-none"
          name={htmlId}
          id={htmlId}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <i className="absolute right-2 top-1/2 -translate-y-1/2 bx bx-chevron-down text-xl"></i>
      </div>
    </div>
  );
}
