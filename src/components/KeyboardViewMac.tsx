import React, { useEffect, useState } from "react";
import {
  KeyboardKeyAlpabet,
  KeyboardKeyArrow,
  KeyboardKeyExtension,
  KeyboardKeyFunction,
  KeyboardKeyOption,
} from "./KeyboardKey";

export default function KeyboardViewMac() {
  const [listKey] = useState<string[]>([]);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      const element = document.querySelector(`#${e.code}`);
      element?.classList.add("bg-sea-main");
      element?.classList.add("scale-90");

      window.addEventListener("keyup", () => {
        element?.classList.remove("bg-sea-main");
        element?.classList.remove("scale-90");
      });
    });

    return () => {
      window.removeEventListener("keydown", () => {});
    };
  }, []);

  return (
    <div className="w-[950px] bg-midnight-dark rounded-lg p-4 mx-auto cursor-default relative">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <KeyboardKeyFunction id="Escape" mainKey="esc" />
          <KeyboardKeyFunction mainKey="F1" />
          <KeyboardKeyFunction mainKey="F2" />
          <KeyboardKeyFunction mainKey="F3" />
          <KeyboardKeyFunction mainKey="F4" />
          <KeyboardKeyFunction mainKey="F5" />
          <KeyboardKeyFunction mainKey="F6" />
          <KeyboardKeyFunction mainKey="F7" />
          <KeyboardKeyFunction mainKey="F8" />
          <KeyboardKeyFunction mainKey="F9" />
          <KeyboardKeyFunction mainKey="F10" />
          <KeyboardKeyFunction mainKey="F11" />
          <KeyboardKeyFunction mainKey="F12" />
          <KeyboardKeyExtension
            mainKey=" "
            aligment="right"
            className="h-10 grow"
          />
        </div>
        <div className="flex gap-2">
          <KeyboardKeyOption id="Backquote" mainKey="`" optionKey="~" />
          <KeyboardKeyOption id="Digit1" mainKey="1" optionKey="!" />
          <KeyboardKeyOption id="Digit2" mainKey="2" optionKey="@" />
          <KeyboardKeyOption id="Digit3" mainKey="3" optionKey="#" />
          <KeyboardKeyOption id="Digit4" mainKey="4" optionKey="$" />
          <KeyboardKeyOption id="Digit5" mainKey="5" optionKey="%" />
          <KeyboardKeyOption id="Digit6" mainKey="6" optionKey="^" />
          <KeyboardKeyOption id="Digit7" mainKey="7" optionKey="&" />
          <KeyboardKeyOption id="Digit8" mainKey="8" optionKey="*" />
          <KeyboardKeyOption id="Digit9" mainKey="9" optionKey="(" />
          <KeyboardKeyOption id="Digit0" mainKey="0" optionKey=")" />
          <KeyboardKeyOption id="Minus" mainKey="-" optionKey="_" />
          <KeyboardKeyOption id="Equal" mainKey="=" optionKey="+" />
          <KeyboardKeyExtension
            id="Backspace"
            mainKey="delete"
            aligment="right"
            className="h-14 w-[calc(3.5rem*1.5)]"
          />
        </div>
        <div className="flex gap-2">
          <KeyboardKeyExtension
            id="Tab"
            mainKey="tab"
            aligment="left"
            className="h-14 w-[calc(3.5rem*1.5)]"
          />
          <KeyboardKeyAlpabet mainKey="q" />
          <KeyboardKeyAlpabet mainKey="w" />
          <KeyboardKeyAlpabet mainKey="e" />
          <KeyboardKeyAlpabet mainKey="r" />
          <KeyboardKeyAlpabet mainKey="t" />
          <KeyboardKeyAlpabet mainKey="y" />
          <KeyboardKeyAlpabet mainKey="u" />
          <KeyboardKeyAlpabet mainKey="i" />
          <KeyboardKeyAlpabet mainKey="o" />
          <KeyboardKeyAlpabet mainKey="p" />
          <KeyboardKeyOption id="BracketLeft" mainKey="[" optionKey="{" />
          <KeyboardKeyOption id="BracketRight" mainKey="]" optionKey="}" />
          <KeyboardKeyOption id="Backslash" mainKey="\" optionKey="|" />
        </div>
        <div className="flex gap-2">
          <KeyboardKeyExtension
            id="CapsLock"
            mainKey="caps lock"
            aligment="left"
            className="h-14 w-[calc(3.5rem*1.75)]"
          />
          <KeyboardKeyAlpabet mainKey="a" clicked={listKey.includes("KeyA")} />
          <KeyboardKeyAlpabet mainKey="s" />
          <KeyboardKeyAlpabet mainKey="d" />
          <KeyboardKeyAlpabet mainKey="f" />
          <KeyboardKeyAlpabet mainKey="g" />
          <KeyboardKeyAlpabet mainKey="h" />
          <KeyboardKeyAlpabet mainKey="j" />
          <KeyboardKeyAlpabet mainKey="k" />
          <KeyboardKeyAlpabet mainKey="l" />
          <KeyboardKeyOption id="Semicolon" mainKey=";" optionKey=":" />
          <KeyboardKeyOption id="Quote" mainKey="'" optionKey='"' />
          <KeyboardKeyExtension
            id="Enter"
            mainKey="return"
            aligment="right"
            className="h-14 w-[calc(3.5rem*1.75)] grow"
          />
        </div>
        <div className="flex gap-2">
          <KeyboardKeyExtension
            id="ShiftLeft"
            mainKey="shift"
            aligment="left"
            className="h-14 w-[calc(3.5rem*2.25)]"
          />
          <KeyboardKeyAlpabet mainKey="z" />
          <KeyboardKeyAlpabet mainKey="x" />
          <KeyboardKeyAlpabet mainKey="c" />
          <KeyboardKeyAlpabet mainKey="v" />
          <KeyboardKeyAlpabet mainKey="b" />
          <KeyboardKeyAlpabet mainKey="n" />
          <KeyboardKeyAlpabet mainKey="m" />
          <KeyboardKeyOption id="Comma" mainKey="," optionKey="<" />
          <KeyboardKeyOption id="Period" mainKey="." optionKey=">" />
          <KeyboardKeyOption id="Slash" mainKey="/" optionKey="?" />
          <KeyboardKeyExtension
            id="ShiftRight"
            mainKey="shift"
            aligment="right"
            className="h-14 w-[calc(3.5rem*2.25)] grow"
          />
        </div>
        <div className="flex gap-2 items-end">
          <KeyboardKeyExtension
            mainKey="fn"
            optionKey="language"
            aligment="right"
            className="h-14 w-[calc(3.5rem*1)]"
          />
          <KeyboardKeyExtension
            id="ControlLeft"
            mainKey="control"
            optionKey="control"
            aligment="right"
            className="h-14 w-[calc(3.5rem*1.25)]"
          />
          <KeyboardKeyExtension
            id="AltLeft"
            mainKey="option"
            optionKey="option"
            aligment="right"
            className="h-14 w-[calc(3.5rem*1.25)]"
          />
          <KeyboardKeyExtension
            id="MetaLeft"
            mainKey="command"
            optionKey="command"
            aligment="right"
            className="h-14 w-[calc(3.5rem*1.5)]"
          />
          <KeyboardKeyExtension
            id="Space"
            mainKey=" "
            aligment="left"
            className="h-14 w-[calc(3.5rem*1.5)] grow"
          />
          <KeyboardKeyExtension
            id="MetaRight"
            mainKey="command"
            optionKey="command"
            aligment="right"
            className="h-14 w-[calc(3.5rem*1.5)]"
          />
          <KeyboardKeyExtension
            id="AltRight"
            mainKey="option"
            optionKey="option"
            aligment="right"
            className="h-14 w-[calc(3.5rem*1.25)]"
          />
          <KeyboardKeyArrow arrow="left" />
          <div className="flex flex-col">
            <KeyboardKeyArrow arrow="up" />
            <KeyboardKeyArrow arrow="down" />
          </div>
          <KeyboardKeyArrow arrow="right" />
        </div>
      </div>
    </div>
  );
}
