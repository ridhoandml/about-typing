import React, { HTMLAttributes } from "react";

interface Props {
  mainKey: string;
  className?: HTMLAttributes<HTMLDivElement>["className"];
  clicked?: boolean;
}

export function KeyboardKeyAlpabet({
  mainKey,
  className,
  clicked = false,
}: Props) {
  return (
    <div
      id={`Key${mainKey.toUpperCase()}`}
      className={`${className ?? ""} key ${
        clicked ? "bg-midnight-light" : null
      } h-14 w-14 flex justify-center items-center bg-midnight-main text-white border border-midnight-dark rounded-lg text-lg transition-transform duration-150`}
    >
      <span>{mainKey.toUpperCase()}</span>
    </div>
  );
}
