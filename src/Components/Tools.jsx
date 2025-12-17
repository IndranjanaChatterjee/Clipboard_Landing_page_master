import React from "react";
import blacklist from "../assets/images/icon-blacklist.svg";
import preview from "../assets/images/icon-preview.svg";
import text from "../assets/images/icon-text.svg";

export default function Tools() {
  return (
    <div className="flex flex-col justify-center items-center mx-auto  sm:w-[70%] w-[95%]">
      <div className="flex justify-center items-center flex-col mb-24">
        <h1 className="text-center flex justify-center items-center text-4xl font-medium mb-6">
          Supercharge your workflow
        </h1>
        <p className="text-center flex justify-center items-center text-gray-400 font-medium">
          We've got tools to boost your productivity.
        </p>
      </div>

      <div className="flex sm:flex-row flex-col justify-between items-center gap-28">
        <div className="flex flex-col justify-center items-center sm:w-[30%]">
          <img src={blacklist} alt="blacklist" className="mb-10" />
          <h3 className="text-center flex justify-center items-center text-2xl font-medium mb-5">
            Create blacklists
          </h3>
          <p className="text-center flex justify-center items-center text-gray-400 font-medium">
            Ensure sensitive information never makes its way to your clipboard by excluding certain sources.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center sm:w-[30%]">
          <img src={text} alt="text" className="mb-10" />
          <h3 className="text-center flex justify-center items-center text-2xl font-medium mb-5">Plain text snippets</h3>
          <p className="text-center flex justify-center items-center text-gray-400 font-medium">
            Remove unwanted formatting from copied text for a consistent look.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center sm:w-[30%]">
          <img src={preview} alt="preview" className="mb-10" />
          <h3 className="text-center flex justify-center items-center text-2xl font-medium mb-5">
            Sneak preview
          </h3>
          <p className="text-center flex justify-center items-center text-gray-400 font-medium">
            Quick preview of all snippets on your Clipboard for easy access.
          </p>
        </div>
      </div>
    </div>
  );
}
