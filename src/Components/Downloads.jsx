import React from "react";

export default function Downloads() {
  return (
    <div className="flex flex-col justify-center items-center mx-auto sm:w-[70%] w-[95%] mt-20">
      <h1 className="text-center flex justify-center items-center text-4xl font-medium mb-6">
        Clipboard for iOS and Mac OS
      </h1>
      <p className="text-center flex justify-center items-center text-gray-400 font-medium mb-10 sm:w-[50%] w-full">
        Available for free on the App Store. Download for Mac or iOS, sync with
        iCloud and you're ready to start adding to your clipboard.
      </p>
      <div className="flex  flex-col sm:flex-row justify-center gap-6 items-center">
        <button className="bt1 hover:cursor-pointer bg-[#26bba5] border-none outline-none rounded-[2rem]">
          Download for iOS
        </button>
        <button className="bt2 bg-[#6273ff] hover:cursor-pointer border-none outline-none rounded-[2rem]">
          Download for Mac
        </button>
      </div>
    </div>
  );
}
