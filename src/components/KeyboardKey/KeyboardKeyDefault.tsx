import React, { HTMLAttributes } from "react";

interface Props {
  mainKey: string;
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

export function KeyboardKeyDefault({ mainKey, className }: Props) {
  return (
    <div
      className={`${className} h-14 w-14 flex justify-center items-center bg-midnight-main text-white border border-midnight-dark rounded-lg text-lg`}
    >
      <span>{mainKey.toUpperCase()}</span>
    </div>
  );
}
