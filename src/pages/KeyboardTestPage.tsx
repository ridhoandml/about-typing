import React from "react";
import KeyboardViewMac from "../components/KeyboardViewMac";
import SelectItem from "../components/SelectItem";
import { useWindowDimensions } from "../hooks";
import NotSupportSize from "../components/NotSupportSize";

const systemOperation = {
  label: "System Operation",
  options: ["Mac", "Windows"],
};
const keyChecking = {
  label: "Key Checking",
  options: ["Once", "Repeatable"],
};

export default function KeyboardTestPage() {
  const { width } = useWindowDimensions();

  return (
    <div className="grow mx-auto pt-10 px-12 w-full">
      <div className="flex flex-col gap-10 items-center">
        <div id="optionList" className="flex items-end gap-4">
          <SelectItem
            label={systemOperation.label}
            options={systemOperation.options}
          />
          <SelectItem label={keyChecking.label} options={keyChecking.options} />
          <button className="bg-midnight-main text-white border border-midnight-dark rounded-lg h-9 w-24 font-bold hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.2)] transition duration-200 ease-in">
            Reset
          </button>
        </div>
        {width >= 1050 ? <KeyboardViewMac /> : <NotSupportSize />}
      </div>
    </div>
  );
}
