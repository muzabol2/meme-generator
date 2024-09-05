"use client";
import { useState } from "react";
import { CldImage } from "next-cloudinary";
import { config } from "@/config";
import { GitHubLink } from "@/components";

export default function Home() {
  const [textUp, setTextUp] = useState("");
  const [textDown, setTextDown] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-githubBackground text-white">
      <header className="w-full flex items-center justify-between p-4 bg-githubHeader bg-opacity-90 fixed top-0 left-0 right-0 shadow-md z-50">
        <h1 className="text-3xl font-bold text-white">{config.title}</h1>
        <GitHubLink />
      </header>
      <div className="z-10 w-full max-w-5xl flex items-center justify-between font-mono text-sm mt-24">
        <div className="flex flex-col mb-4 mr-8">
          <input
            type="text"
            value={textUp}
            onChange={(e) => setTextUp(e.target.value)}
            placeholder="Enter top text"
            maxLength={50}
            className="mb-2 p-2 border border-gray-600 rounded bg-gray-800 text-white"
          />
          <input
            type="text"
            value={textDown}
            onChange={(e) => setTextDown(e.target.value)}
            placeholder="Enter bottom text"
            maxLength={50}
            className="p-2 border border-gray-600 rounded bg-gray-800 text-white"
          />
        </div>
        <CldImage
          width="960"
          height="600"
          src="samples/coffee"
          sizes="100vw"
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
                fontSize: 200,
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
                fontSize: 200,
                fontWeight: "bold",
                text: textDown || " ",
                stroke: "stroke",
                border: "20px_solid_black",
              },
              crop: "fit",
              width: 2000,
            },
          ]}
          alt="Description of my image"
        />
      </div>
    </main>
  );
}
