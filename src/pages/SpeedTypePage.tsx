import React, {
  ChangeEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";

export default function SpeedTypePage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const textContainer = useRef<HTMLDivElement>(null);

  const [showLabel, setShowLabel] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [recordedText, setRecordedText] = useState<boolean[]>([]);
  const [listText, setListText] = useState<string[]>([]);
  const [indexListText, setIndexListText] = useState(0);

  // const [scrollValue, setScrollValue] = useState(0);

  const sample =
    "Set Multiply fowl. Blessed cattle had darkness living doesn't wherein moveth bearing, were land isn't hath forth subdue greater give shall. Also, under midst wherein given god kind.";

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const array = sample.toLowerCase().split(" ");
    setListText(array);
  }, []);

  const inputOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value.trim());
  };

  const inputOnKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.code === "Space" || e.code === "Enter") {
      if (inputValue !== "".trim()) {
        if (inputValue === listText[indexListText]) {
          setRecordedText([...recordedText, true]);
          setInputValue("");
        } else {
          setRecordedText([...recordedText, false]);
          setInputValue("");
        }
        setIndexListText((prev) => prev + 1);
      }
    }
  };

  const countTrue = recordedText.filter((item) => item === true).length;
  const countFalse = recordedText.filter((item) => item === false).length;

  const getClassTextColor = (state: boolean) => {
    switch (state) {
      case true:
        return "text-midnight-dark";
      case false:
        return "text-sun-dark";
      default:
        return "text-white";
    }
  };

  const resetOnClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setRecordedText([]);
    setIndexListText(0);
    inputRef.current?.focus();
  };

  return (
    <div className="max-w-[800px] flex flex-col gap-10 mx-auto">
      <div className="flex flex-col gap-4 cursor-default">
        <label
          className="text-base text-white transition-all duration-200 ease-in"
          style={{ visibility: showLabel ? "visible" : "hidden" }}
        >
          Read This:
        </label>
        <div
          ref={textContainer}
          className="flex flex-wrap text-white text-4xl leading-normal scroll-smooth overflow-scroll scrollbar-hide"
          style={{ height: "4ch" }}
        >
          {listText.map((text, index) => {
            return (
              <span
                key={index}
                className={`${getClassTextColor(
                  recordedText[index]
                )} mr-2 transition-colors duration-200 ease-in`}
              >
                {text}
              </span>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <input
          ref={inputRef}
          value={inputValue}
          onChange={inputOnChange}
          onKeyDown={inputOnKeyDown}
          onFocus={() => setShowLabel(false)}
          onBlur={() => setShowLabel(true)}
          className="bg-transparent outline-none px-4 py-3 rounded-lg border border-midnight-dark text-2xl"
          type="text"
          placeholder="Type here..."
        />
        <div className="flex justify-between items-center">
          <div className="flex gap-4 cursor-default">
            <div>
              <i className="bx bxs-time"></i>
              <span className="inline-block ml-1">1:00</span>
            </div>
            <div>
              <i className="bx bxs-check-circle"></i>
              <span className="inline-block ml-1">{countTrue}</span>
            </div>
            <div>
              <i className="bx bxs-x-circle"></i>
              <span className="inline-block ml-1">{countFalse}</span>
            </div>
          </div>
          <button
            onClick={resetOnClick}
            className="me-auto px-2 py-1 hover:bg-white hover:bg-opacity-10 rounded-lg transition duration-200 ease-in"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
