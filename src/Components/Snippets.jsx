import React from "react";
import computer from "../assets/images/image-computer.png"

export default function Snippets() {
  return (
    <div className="snippets w-[100vw]  flex flex-col justify-center items-center">
      <h1 className="text-4xl font-medium mb-6 text-center px-1 sm:px-0">Keep track of your snippets</h1>
      <p className="w-full sm:w-[40%] text-center flex justify-center items-center text-gray-400 mb-16">
        Clipboard instantly stores any item you copy in the cloud, meaning you
        can access your snippets immediately on all devices . Our Mac and iOS apps
        will help you organize everything.
        </p>
        <div className="w-full flex flex-col sm:flex-row items-center sm:justify-between justify-center gap-24">
          <div className="w-full p-5 sm:w-1/2 flex justify-center sm:items-start items-center ">
            <img src={computer} alt="computer" />
          </div>
          
          <div className="w-full sm:w-1/2 flex flex-col justify-center items-start gap-8 p-5">
            <div  className="flex flex-col justify-center sm:items-start items-center sm:w-[70%] w-full gap-2">
              <h3 className="text-2xl font-medium ">Quick Search</h3>
              <p className="text-gray-400 w-full text-center sm:text-start">Easily search your snippets by content, category, web address, application, and more.</p>
            </div>
            <div  className="flex flex-col justify-center sm:items-start items-center sm:w-[70%] w-full gap-2">
              <h3 className="text-2xl font-medium ">iCloud Sync</h3>
              <p className="text-gray-400 w-full text-center sm:text-start">Instantly saves and syncs your snippets accross all devices.</p>
            </div >
            <div className="flex flex-col justify-center sm:items-start items-center sm:w-[70%] w-full gap-2">
              <h3 className="text-2xl font-medium ">
                Complete History
              </h3>
              <p className="text-gray-400 w-full text-center sm:text-start">Retrieve any snippets from the first moment you started using the app.</p>

            </div>

          </div>
        </div>
    </div>
  );
}
