import React, { HTMLAttributes } from "react";
import { MacKeyIcon } from "../../types";

interface Props extends HTMLAttributes<HTMLDivElement> {
  mainKey: string;
  optionKey?: MacKeyIcon;
  aligment: "left" | "right";
  className: HTMLAttributes<HTMLDivElement>["className"];
}

export function KeyboardKeyExtension({
  mainKey,
  optionKey,
  aligment,
  className,
  ...props
}: Props) {
  const aligmentClass: HTMLAttributes<HTMLSpanElement>["className"] =
    aligment === "left" ? `left-2 text-left` : `right-2 text-right`;
  const iconGenerator = (typeIcon: MacKeyIcon) => {
    switch (typeIcon) {
      case "control":
        return (
          <span className="material-icons text-base">keyboard_control_key</span>
        );
      case "option":
        return (
          <span className="material-icons text-base">keyboard_option_key</span>
        );
      case "command":
        return (
          <span className="material-icons text-base">keyboard_command_key</span>
        );
      case "language":
        return <span className="material-icons text-base">language</span>;
      default:
        return <></>;
    }
  };

  return (
    <div
      {...props}
      className={`${className} flex justify-center items-center bg-midnight-main s border border-midnight-dark rounded-lg text-xs relative transition-transform duration-150`}
    >
      <div className={`absolute top-1 ${aligmentClass}`}>
        {iconGenerator(optionKey!)}
      </div>
      <div className={`absolute bottom-1 ${aligmentClass}`}>{mainKey}</div>
    </div>
  );
}
