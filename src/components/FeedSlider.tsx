import React, { useState, useEffect, useRef } from "react";
import { useData } from "../context/DataContext";

const FeedSlider: React.FC = () => {
  const { feedData } = useData();
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % feedData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? feedData.length - 1 : prevIndex - 1
    );
  };

  const startAutoSlide = () => {
    stopAutoSlide();
    slideInterval.current = setInterval(nextSlide, 3000); // 3 sec
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

  if (feedData.length === 0) return <p>No feed data available.</p>;

  return (
    <div className="w-full mx-auto px-[2%] mt-8 h-[66vh]">
      <div className="relative overflow-hidden h-[56vh] rounded-2xl" onMouseEnter={stopAutoSlide} onMouseLeave={startAutoSlide}>
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
          {feedData.map((feed, index) => (
            <div
              key={feed.name}
              className={`flex-shrink-0 w-1/3 px-2`}
              style={{width: "33.33%", filter: index-1 === currentIndex ? "blur(0px)" : "blur(4px) brightness(70%)", transform: index - 1 === currentIndex ? "scale(1)" : "scale(0.9)", transition: "all 0.5s ease"}}
            >
              {feed.type === "image" ? (
                <img src={feed.media} alt={feed.name} className="w-full h-full object-cover rounded-md"/>
              ) : feed.type === "video" ? (
                <video src={feed.media} controls className="w-full h-full object-cover rounded-md"/>
              ) : (
                <p>Unsupported media type</p>
              )}
            </div>
          ))}
        </div>

        {/* Prev/Next buttons */}
        <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">&#10094;</button>
        <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"> &#10095;</button>
      </div>

      {/* Slide dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {feedData.map((_, index) => (
          <span key={index} className={`h-3 w-3 rounded-full transition-colors duration-300 ${index === currentIndex ? "bg-gray-800" : "bg-gray-400" }`}></span>
        ))}
      </div>

      {/* Slide info */}
      <div className="text-center mt-2">
        <h3 className="font-semibold">{feedData[currentIndex].name}</h3>
        {feedData[currentIndex].desc && (
          <p className="text-gray-600">{feedData[currentIndex].desc}</p>
        )}
      </div>
    </div>
  );
};

export default FeedSlider;