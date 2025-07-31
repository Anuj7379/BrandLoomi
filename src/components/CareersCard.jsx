import React, { useRef } from "react";

const CareersCard = ({ filteredCards, setModalData }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const card = current.querySelector(".carousel-card");
      const scrollAmount = card?.offsetWidth || 400;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const hasCards = Array.isArray(filteredCards) && filteredCards.length > 0;

  return (
    <>
      {/*  Laptop / Tablet View */}
      <div className="hidden md:flex flex-col md:flex-row mt-14 items-center justify-evenly mb-10 flex-wrap gap-6">
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <div
              key={card.id}
              className="w-full max-w-[412px] lg:h-[503px] h-auto bg-transparent rounded-2xl border border-white/10 p-6 text-white relative overflow-hidden group hover:shadow-[0_0_40px_#00ffff33] transition-shadow duration-300 box-border cursor-pointer"
              onClick={() => setModalData(card)}
            >
              <div
                className="absolute top-1/2 left-1/2 w-[337px] h-[295px] opacity-40 blur-[100px] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-0"
                style={{ background: "#00829B" }}
              />
              <div className="italic text-2xl text-white font-extrabold pt-3">
                PRODUCT
              </div>
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-3xl font-bold pt-14 mb-4">
                    {card.title}
                  </h3>
                  <p className="text-[14px] font-normal font-sans leading-relaxed pt-4">
                    {card.description}
                  </p>
                </div>
                <div className="flex items-center justify-around my-8 text-[22px] italic font-extrabold">
                  <h4>FULL TIME</h4>
                  <div className="w-[1px] h-10 bg-white/60"></div>
                  <h4>IRELAND</h4>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white text-lg italic mt-6">
            No matching jobs found.
          </p>
        )}
      </div>

      {/*  Mobile Carousel View */}
      <div className="relative md:hidden mt-14 mb-10">
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full z-10"
        >
          ←
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full z-10"
        >
          →
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 px-4 scrollbar-hide scroll-smooth"
        >
          {filteredCards.length > 0 ? (
            filteredCards.map((card) => (
              <div
                key={card.id}
                className="carousel-card min-w-[90%] max-w-[90%] h-auto bg-transparent rounded-2xl border border-white/10 p-6 text-white relative overflow-hidden group hover:shadow-[0_0_40px_#00ffff33] transition-shadow duration-300 box-border cursor-pointer flex-shrink-0"
                onClick={() => setModalData(card)}
              >
                <div
                  className="absolute top-1/2 left-1/2 w-[337px] h-[295px] opacity-40 blur-[100px] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-0"
                  style={{ background: "#00829B" }}
                />
                <div className="italic text-2xl text-white font-extrabold pt-3">
                  PRODUCT
                </div>
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-3xl font-bold pt-14 mb-4">
                      {card.title}
                    </h3>
                    <p className="text-[14px] font-normal font-sans leading-relaxed pt-4">
                      {card.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-around my-8 text-[22px] italic font-extrabold">
                    <h4>FULL TIME</h4>
                    <div className="w-[1px] h-10 bg-white/60"></div>
                    <h4>IRELAND</h4>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white text-lg italic mt-6">
              No matching jobs found.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default CareersCard;
