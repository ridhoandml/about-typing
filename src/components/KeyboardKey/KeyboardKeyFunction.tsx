import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  mainKey: string;
}

export function KeyboardKeyFunction({ mainKey, ...props }: Props) {
  const { id } = props;
  return (
    <div
      {...props}
      id={id ?? mainKey}
      className={`h-10 w-14 flex justify-center items-center bg-midnight-main text-white border border-midnight-dark rounded-lg text-xs relative transition-transform duration-150`}
    >
      <span className="absolute bottom-1 right-1 -translate-x-1/2 text-right">
        {mainKey}
      </span>
    </div>
  );
}
