import React from "react";
import { ArrowIcon } from "../../types";

interface Props {
  arrow: ArrowIcon;
}

export function KeyboardKeyArrow({ arrow }: Props) {
  const iconArrow = () => {
    switch (arrow) {
      case "down":
        return <i className="bx bx-chevron-down"></i>;
      case "up":
        return <i className="bx bx-chevron-up"></i>;
      case "left":
        return <i className="bx bx-chevron-left"></i>;
      case "right":
        return <i className="bx bx-chevron-right"></i>;
      default:
        return <></>;
    }
  };
  return (
    <div
      id={`Arrow${arrow[0].toUpperCase() + arrow.substring(1)}`}
      className={`h-7 w-14 flex justify-center items-center bg-midnight-main text-white border border-midnight-dark rounded-lg text-xl transition-transform duration-150`}
    >
      {iconArrow()}
    </div>
  );
}
