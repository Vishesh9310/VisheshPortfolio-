import React, { useState, useEffect, useRef } from "react";
import { useData } from "../context/DataContext";

const FeedSlider: React.FC = () => {
  const { feedData } = useData();
  const [currentIndex, setCurrentIndex] = useState(1); // start from 1 because of clone
  const [isTransitioning, setIsTransitioning] = useState(true);
  const slideInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  // clone last and first for infinite loop
  const extendedFeed = [
    feedData[feedData.length - 1],
    ...feedData,
    feedData[0],
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const startAutoSlide = () => {
    stopAutoSlide();
    slideInterval.current = setInterval(nextSlide, 3000);
  };

  const stopAutoSlide = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
      slideInterval.current = null;
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [feedData.length]);

  // Handle infinite loop jumps
  useEffect(() => {
    if (currentIndex === extendedFeed.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1); // jump to real first
      }, 500); // same as transition duration
    }
    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(feedData.length); // jump to real last
      }, 500);
    } else {
      setIsTransitioning(true);
    }
  }, [currentIndex, extendedFeed.length, feedData.length]);

  if (feedData.length === 0) return <p>No feed data available.</p>;

  return (
    <div className="w-full mx-auto px-[2%] mt-[10%] h-fit content-center">
      <div
        className="relative overflow-hidden rounded-2xl lg:h-[72vh] md:h-[66vh] h-[33vh] my-[5%]"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
      >
        {/* Slides */}
        <div
          className={`flex px-2 duration-500 ease-in-out ${
            !isTransitioning ? "transition-none" : ""
          }`}
          style={{
            transform: `translateX(-${currentIndex * 33.33}%)`,
          }}
        >
          {extendedFeed.map((feed, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-1/3 px-2 relative"
              style={{
                width: "33.33%",
                filter:
                  index - 1 === currentIndex
                    ? "blur(0px)"
                    : "blur(4px) brightness(70%)",
                transform: index -1 === currentIndex ? "scale(1)" : "scale(0.9)",
                transition: "all 0.5s ease",
              }}
            >
              {feed.type === "image" ? (
                <img
                  src={feed.media}
                  alt={feed.name}
                  className="w-full h-full object-cover rounded-md"
                />
              ) : feed.type === "video" ? (
                <video
                  src={feed.media}
                  controls
                  className="w-full h-full object-cover rounded-md"
                />
              ) : (
                <p>Unsupported media type</p>
              )}
              {/* Overlay text (large screens) style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.6)" }}*/}
              <div  className="hidden lg:flex flex-col items-center justify-center absolute text-purple-200 drop-shadow-purple-800 inset-0 z-10 text-center drop-shadow-lg">
                <h3 className="font-semibold text-4xl">{feed.name}</h3>
                {feed.desc && (
                  <p className="mt-2 text-lg max-w-lg">{feed.desc}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Prev/Next buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          &#10095;
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {feedData.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full transition-colors duration-300 ${
              index + 1 === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>

      {/* Mobile text */}
      <div className="text-center mt-2 lg:hidden">
        <h3 className="font-semibold">{feedData[currentIndex - 1]?.name}</h3>
        {feedData[currentIndex - 1]?.desc && (
          <p className="text-gray-600">{feedData[currentIndex - 1]?.desc}</p>
        )}
      </div>
    </div>
  );
};

export default FeedSlider;
