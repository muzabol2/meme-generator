import React from "react";
import { CldImage } from "next-cloudinary";
import type { Background } from "@/types";

interface Props {
  list: Background[];
  setBackground: (background: Background) => void;
}

export const SelectBackground = ({ list, setBackground }: Props) => {
  return (
    <ul className="flex flex-col">
      {list.map((background) => (
        <li
          key={background.id}
          className="flex items-center justify-between p-2 bg-gray-800 bg-opacity-90 rounded shadow-md my-2 cursor-pointer"
        >
          <button
            onClick={() => setBackground(background)}
            className="transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded"
            aria-label={`Select ${background.title} background`}
          >
            <CldImage 
              src={background.id} 
              alt={background.title} 
              width="200" 
              height="200" 
              className="rounded"
            />
          </button>
        </li>
      ))}
    </ul>
  );
};
