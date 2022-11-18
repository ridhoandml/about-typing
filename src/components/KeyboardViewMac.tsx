import React from "react";
import {
  KeyboardKeyArrow,
  KeyboardKeyDefault,
  KeyboardKeyExtension,
  KeyboardKeyOption,
} from "./KeyboardKey";

export default function KeyboardViewMac() {
  return (
    <div className="w-[950px] bg-midnight-dark rounded-lg p-4 mx-auto cursor-default">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <KeyboardKeyOption mainKey="`" optionKey="~" />
          <KeyboardKeyOption mainKey="1" optionKey="!" />
          <KeyboardKeyOption mainKey="2" optionKey="@" />
          <KeyboardKeyOption mainKey="3" optionKey="#" />
          <KeyboardKeyOption mainKey="4" optionKey="$" />
          <KeyboardKeyOption mainKey="5" optionKey="%" />
          <KeyboardKeyOption mainKey="6" optionKey="^" />
          <KeyboardKeyOption mainKey="7" optionKey="&" />
          <KeyboardKeyOption mainKey="8" optionKey="*" />
          <KeyboardKeyOption mainKey="9" optionKey="(" />
          <KeyboardKeyOption mainKey="0" optionKey=")" />
          <KeyboardKeyOption mainKey="-" optionKey="_" />
          <KeyboardKeyOption mainKey="=" optionKey="+" />
          <KeyboardKeyExtension
            mainKey="delete"
            aligment="right"
            className="h-14 w-[calc(3.5rem*1.5)]"
          />
        </div>
        <div className="flex gap-2">
          <KeyboardKeyExtension
            mainKey="tab"
            aligment="left"
            className="h-14 w-[calc(3.5rem*1.5)]"
          />
          <KeyboardKeyDefault mainKey="q" />
          <KeyboardKeyDefault mainKey="w" />
          <KeyboardKeyDefault mainKey="e" />
          <KeyboardKeyDefault mainKey="r" />
          <KeyboardKeyDefault mainKey="t" />
          <KeyboardKeyDefault mainKey="y" />
          <KeyboardKeyDefault mainKey="u" />
          <KeyboardKeyDefault mainKey="i" />
          <KeyboardKeyDefault mainKey="o" />
          <KeyboardKeyDefault mainKey="p" />
          <KeyboardKeyOption mainKey="[" optionKey="{" />
          <KeyboardKeyOption mainKey="]" optionKey="}" />
          <KeyboardKeyOption mainKey="\" optionKey="|" />
        </div>
        <div className="flex gap-2">
          <KeyboardKeyExtension
            mainKey="caps lock"
            aligment="left"
            className="h-14 w-[calc(3.5rem*1.75)]"
          />
          <KeyboardKeyDefault mainKey="a" />
          <KeyboardKeyDefault mainKey="s" />
          <KeyboardKeyDefault mainKey="d" />
          <KeyboardKeyDefault mainKey="f" />
          <KeyboardKeyDefault mainKey="g" />
          <KeyboardKeyDefault mainKey="h" />
          <KeyboardKeyDefault mainKey="j" />
          <KeyboardKeyDefault mainKey="k" />
          <KeyboardKeyDefault mainKey="l" />
          <KeyboardKeyOption mainKey=";" optionKey=":" />
          <KeyboardKeyOption mainKey="'" optionKey='"' />
          <KeyboardKeyExtension
            mainKey="return"
            aligment="right"
            className="h-14 w-[calc(3.5rem*1.75)] grow"
          />
        </div>
        <div className="flex gap-2">
          <KeyboardKeyExtension
            mainKey="shift"
            aligment="left"
            className="h-14 w-[calc(3.5rem*2.25)]"
          />
          <KeyboardKeyDefault mainKey="z" />
          <KeyboardKeyDefault mainKey="x" />
          <KeyboardKeyDefault mainKey="c" />
          <KeyboardKeyDefault mainKey="v" />
          <KeyboardKeyDefault mainKey="b" />
          <KeyboardKeyDefault mainKey="n" />
          <KeyboardKeyDefault mainKey="m" />
          <KeyboardKeyOption mainKey="," optionKey="<" />
          <KeyboardKeyOption mainKey="." optionKey=">" />
          <KeyboardKeyOption mainKey="/" optionKey="?" />
          <KeyboardKeyExtension
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
            mainKey="control"
            optionKey="control"
            aligment="right"
            className="h-14 w-[calc(3.5rem*1.25)]"
          />
          <KeyboardKeyExtension
            mainKey="option"
            optionKey="option"
            aligment="right"
            className="h-14 w-[calc(3.5rem*1.25)]"
          />
          <KeyboardKeyExtension
            mainKey="command"
            optionKey="command"
            aligment="right"
            className="h-14 w-[calc(3.5rem*1.5)]"
          />
          <KeyboardKeyDefault mainKey=" " className="grow" />
          <KeyboardKeyExtension
            mainKey="command"
            optionKey="command"
            aligment="right"
            className="h-14 w-[calc(3.5rem*1.5)]"
          />
          <KeyboardKeyExtension
            mainKey="option"
            optionKey="option"
            aligment="right"
            className="h-14 w-[calc(3.5rem*1.25)]"
          />
          <KeyboardKeyArrow arrow="left" />
          <div className="flex flex-col">
            <KeyboardKeyArrow arrow="top" />
            <KeyboardKeyArrow arrow="bottom" />
          </div>
          <KeyboardKeyArrow arrow="right" />
        </div>
      </div>
    </div>
  );
}
