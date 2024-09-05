import React from "react";
import { CldImage } from "next-cloudinary";

export interface BackgroundProps {
  id: string;
  title: string;
  width: number;
  height: number;
}

interface Props {
  list: BackgroundProps[];
  setBackground: (background: BackgroundProps) => void;
}

export const SelectBackground = ({ list, setBackground }: Props) => {
  return (
    <ul className="flex flex-col">
      {list.map(({ id, title }) => (
        <li
          key={id}
          className="flex items-center justify-between p-2 bg-gray-800 bg-opacity-90 rounded shadow-md my-2 cursor-pointer"
        >
          <button
            onClick={() =>
              setBackground(list.filter((meme) => meme.id === id)[0])
            }
          >
            <CldImage src={id} alt={title} width="200" height="200" />
          </button>
        </li>
      ))}
    </ul>
  );
};
