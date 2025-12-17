import React from "react";
import clipboard1 from "../assets/images/image-devices.png";

export default function Clipboards() {
  return (
    <div className="flex flex-col justify-center items-center mt-28">
      <div className="flex flex-col justify-center items-center mb-28">
        <h1 className="text-4xl font-medium text-center flex justify-center items-center mb-7">
          Access Clipboard anywhere
        </h1>
        <p className="text-center text-gray-400 sm:w-[60%] w-full font-medium">
          Whether you're on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>
      </div>

      <div>
        <img src={clipboard1} alt="devices" />
      </div>
    </div>
  );
}
