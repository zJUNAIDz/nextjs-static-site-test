"use client";

import { useState } from "react";
import { Card } from "./card";

interface CarouselProps {
  items: {
    id: number;
    title: string;
    description: string;
    image: string;
  }[];
}

export const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const ITEMS_TO_SHOW = 3;

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };



  return (
    <div className="w-full flex flex-col items-center">
      {/* Carousel Wrapper */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex w-full transition-transform duration-700 ease-in-out justify-between  "
          style={{
            transform: `translateX(-${(currentIndex * 100) / (ITEMS_TO_SHOW)}%)`,
            width: "200%",
          }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className=" w-[calc(100%/6)]  flex flex-shrink-0  justify-center px-5"
            >
              <Card item={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Dotted Navigation */}
      <div className="mt-4 flex space-x-2">
        {items.slice(0, items.length - ITEMS_TO_SHOW).map((_, index) => (
          <button
            role="button"
            aria-label={`image tab ${index + 1}`}
            key={index}
            className={`h-3 w-3 rounded-full ${currentIndex === index ? "bg-black" : "bg-gray-400"
              }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};
