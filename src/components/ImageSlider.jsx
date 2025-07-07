import React, { useRef } from "react";
import Img1 from "../assets/CEOImage.png";
import Img2 from "../assets/CEOImage.png";
import Img3 from "../assets/CEOImage.png";
import Img4 from "../assets/CEOImage.png";
import Img5 from "../assets/CEOImage.png";
import Img6 from "../assets/CEOImage.png";
const images = [Img1, Img2, Img3, Img4, Img5, Img6];

function ImageSlider() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const { current } = sliderRef;
    const scrollAmount = 300;

    if (direction === "left") {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full max-w-screen-2xl lg:mx-3 mx-auto mt-10 mb-4">
      {/* Scrollable image container */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto gap-4 scroll-smooth scrollbar-hide"
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Slide ${idx + 1}`}
            className="min-w-[360px] h-[472px] rounded-xl  shadow-lg"
          />
        ))}
      </div>

      {/* Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-transparent bg-opacity-50 text-white p-2 rounded-full"
      >
        ❮
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-transparent bg-opacity-50 text-white p-2 rounded-full"
      >
        ❯
      </button>
    </div>
  );
}

export default ImageSlider;
