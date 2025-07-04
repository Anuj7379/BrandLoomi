import React, { useRef, useEffect, useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const TimelineSnap = ({ year, text, underlineWidth = 160 }) => {
  const lastWordRef = useRef(null);
  const [lastWordOffset, setLastWordOffset] = useState(0);

  const words = text.trim().split(" ");
  const lastWord = words.pop();
  const restText = words.join(" ");

  useEffect(() => {
    if (lastWordRef.current) {
      setLastWordOffset(lastWordRef.current.offsetLeft);
    }
  }, []);

  return (
    <div className="flex gap-5 items-start mb-10">
      {/* Icon + Year */}
      <div className="flex flex-col items-center">
        <LocationOnOutlinedIcon className="text-white text-[40px]" />
        <div className="flex flex-col">
          <div className="bg-white h-px w-4 ml-12 mb-2" />
          <div className="ml-12 text-xl font-bold italic text-white">{year}</div>
        </div>
      </div>

      {/* Text + underline */}
      <div className="relative text-[20px]">
        <div className="border-l-2 border-[#00BFFF] pl-4 text-white whitespace-nowrap">
          {restText}{" "}
          <span ref={lastWordRef} className="font-semibold text-white inline-block relative z-10">
            {lastWord}
          </span>
        </div>

        {/* Custom underline starting at last word */}
        <div
          className="h-[1px] bg-white absolute"
          style={{
            top: "100%",
            left: lastWordOffset,
            width: `${underlineWidth}px`,
            marginTop: "8px",
          }}
        />
      </div>
    </div>
  );
};

export default TimelineSnap;
