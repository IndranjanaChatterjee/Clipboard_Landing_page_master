import React from "react";
import logo from "../assets/images/logo.svg";

export default function TopSection() {
  return (
    <div className="flex justify-center items-center flex-col gap-4 text-center sm:gap-6 ">
      <img src={logo} alt="logo" className=" logo mt-32" />
      <h1 className="font-semibold text-4xl sm:text-5xl">A history of everything you copy</h1>
      <p className="sm:w-[70%] text-gray-400">
        Clipboard allows you to track and organize everything you copy. Instantly
        access your clipboard on all your devices
      </p>
      <div className="flex  flex-col sm:flex-row justify-center gap-6 items-center">
        <button className="bt1 hover:cursor-pointer bg-[#26bba5] border-none outline-none rounded-[2rem]">Download for iOS</button>
        <button className="bt2 bg-[#6273ff] hover:cursor-pointer border-none outline-none rounded-[2rem]">Download for Mac</button>
      </div>
    </div>
  );
}
