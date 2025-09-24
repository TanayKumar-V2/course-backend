// src/components/Carousel.js
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel({
  slides,
  autoSlide = true,
  autoSlideInterval = 5000,
}) {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [current]);

  return (
    <div className="relative overflow-hidden rounded-xl shadow-2xl group w-full">
      {/* Slides Container */}
      <div
        className="flex transition-transform ease-out duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide.image}
            className="w-full flex-shrink-0 object-cover aspect-video md:h-[500px]"
            alt={slide.title}
          />
        ))}
      </div>

      {/* Gradient Overlay for Text */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

      {/* Slide Content (Title & Description) */}
      <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          {slides[current].title}
        </h2>
        <p className="text-base md:text-lg opacity-90">
          {slides[current].description}
        </p>
      </div>

      {/* Navigation Buttons (Appear on hover) */}
      <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={previousSlide}
          className="p-2 rounded-full bg-white/80 text-gray-800 hover:bg-white transition"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-white/80 text-gray-800 hover:bg-white transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`
                transition-all w-2 h-2 bg-white rounded-full cursor-pointer
                ${current === i ? "p-1.5" : "bg-opacity-50"}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}