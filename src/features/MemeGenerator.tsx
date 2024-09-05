import { useState } from "react";
import { CustomImage } from "@/components";
import { SelectBackground } from "./SelectBackground";

const BACKGROUNDS = [
  {
    id: "Panie-Areczku_qarami",
    title: "Panie Areczku",
    width: 670,
    height: 500,
  },
  {
    id: "Ancient-Aliens_omffbo",
    title: "Ancient Aliens",
    width: 500,
    height: 436,
  },
  {
    id: "One-Does-Not-Simply_megzwy",
    title: "One Does Not Simply",
    width: 568,
    height: 335,
  },
];

export const MemeGenerator = () => {
  const [textUp, setTextUp] = useState("");
  const [textDown, setTextDown] = useState("");
  const [background, setBackground] = useState(BACKGROUNDS[0]);

  return (
    <div className="z-10 w-full max-w-5xl flex flex-col md:flex-row items-center justify-start font-mono text-sm">
      <div className="flex flex-col mb-4 md:mb-0 md:mr-8 gap-1">
        <label>Texts:</label>
        <input
          type="text"
          value={textUp}
          onChange={(e) => setTextUp(e.target.value)}
          placeholder="Enter top text"
          className="p-2 border border-gray-600 rounded bg-gray-800 text-white"
        />
        <input
          type="text"
          value={textDown}
          onChange={(e) => setTextDown(e.target.value)}
          placeholder="Enter bottom text"
          className="p-2 border border-gray-600 rounded bg-gray-800 text-white mb-4"
        />
        <label>Backgrounds:</label>
        <SelectBackground list={BACKGROUNDS} setBackground={setBackground} />
      </div>

      <CustomImage {...background} textUp={textUp} textDown={textDown} />
    </div>
  );
};
