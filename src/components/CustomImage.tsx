import React from "react";
import { CldImage } from "next-cloudinary";
import type { Background } from "@/types";

interface Props extends Background {
  textUp: string;
  textDown: string;
}

const CustomImage = ({ id, title, width, height, textUp, textDown }: Props) => {
  return (
    <div className="w-full flex justify-center">
      <CldImage
        width={width}
        height={height}
        src={id}
        alt={title}
        sizes="100vw"
        crop="fill"
        overlays={[
          {
            position: {
              x: 0,
              y: 50,
              gravity: "north",
            },
            text: {
              color: "white",
              fontFamily: "Source Sans Pro",
              fontSize: 90,
              fontWeight: "bold",
              text: textUp || " ",
              stroke: "stroke",
              border: "20px_solid_black",
            },
            crop: "fit",
            width: 2000,
          },
          {
            position: {
              x: 0,
              y: 50,
              gravity: "south",
            },
            text: {
              color: "white",
              fontFamily: "Source Sans Pro",
              fontSize: 90,
              fontWeight: "bold",
              text: textDown || " ",
              stroke: "stroke",
              border: "20px_solid_black",
            },
            crop: "fit",
            width: 2000,
          },
        ]}
      />
    </div>
  );
};

export { CustomImage };
