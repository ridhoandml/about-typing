import React from "react";

interface Props {
  mainKey: string;
  optionKey?: string;
}

export function KeyboardKeyOption({ mainKey, optionKey }: Props) {
  return (
    <div className="h-14 w-14 flex justify-center items-center bg-midnight-main s border border-midnight-dark rounded-lg text-sm relative">
      <span className="absolute top-1 left-1/2 -translate-x-1/2 text-center">
        {optionKey}
      </span>
      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-center">
        {mainKey}
      </span>
    </div>
  );
}
