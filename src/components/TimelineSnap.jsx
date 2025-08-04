import React, { useRef, useEffect, useState } from "react";
import location from '../assets/location.png'

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
    <div className="flex gap-3 md:gap-5 items-start mb-10">
      {/* Icon + Year */}
      <div className="flex flex-col items-center">
        <img src={location} alt="" className="w-[35px] h-[32px] md:w[55px] md:h-[35px]" />
        
          <div className="ml-12 text-[16px] md:text[40px] font-bold italic text-white">{year}</div>
        
      </div>

      {/* Text + underline */}
      <div className="relative text-[16px] lg:text-[25px] font-creato font-normal">
        <div className="border-l-2 border-[#00BFFF] pl-2 md:pl-4 text-white/80 whitespace-nowrap">
          {restText}{" "}
          <span ref={lastWordRef} className="font-semibold text-white/70 inline-block relative z-10">
            {lastWord}
          </span>
        </div>

        {/* Custom underline starting at last word */}
        <div
          className="h-[1px] bg-white absolute hidden md:block"
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
