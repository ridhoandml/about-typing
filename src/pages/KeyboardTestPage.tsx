import React from "react";
import SelectItem from "../components/SelectItem";

const systemOperation = {
  label: "System Operation",
  options: ["Mac", "Windows"],
};
const keyChecking = {
  label: "Key Checking",
  options: ["Once", "Repeatable"],
};

export default function KeyboardTestPage() {
  return (
    <div className="grow container mx-auto pt-10">
      <div className="flex flex-col">
        <div className="flex items-end gap-4">
          <SelectItem
            label={systemOperation.label}
            options={systemOperation.options}
          />
          <SelectItem label={keyChecking.label} options={keyChecking.options} />
          <button className="bg-midnight-main text-white border border-midnight-dark rounded-lg h-9 w-24 font-bold hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.2)] transition duration-200 ease-in">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
