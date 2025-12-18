import React from "react";
import logo from "../assets/images/logo.svg";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import instagram from "../assets/images/icon-instagram.svg";

export default function Footer() {
  return (
    <div className="bg-[#f5f6f8] flex justify-center items-center mt-36 py-10">
      <div className="flex justify-between items-center sm:flex-row flex-col w-[60%]">
        <img src={logo} alt="logo" className="mb-6 sm:mb-0 w-12 h-12" />
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-start my-4 sm:my-0  sm:w-[55%] p-1 text-[1.2rem]">
          <div className="flex flex-col justify-center sm:items-start items-center gap-3">
            <a
              href="#"
              className="text-[#7c7f87] hover:text-[#00645c]  font-semibold my-4 sm:my-0"
            >
              FAQs
            </a>
            <a
              href="#"
              className="text-[#7c7f87] hover:text-[#00645c]  font-semibold my-4 sm:my-0"
            >
              Contact Us
            </a>
          </div>
          <div className="flex flex-col justify-center sm:items-start items-center gap-3">
            <a
              href="#"
              className="text-[#7c7f87] hover:text-[#00645c]  font-semibold my-4 sm:my-0"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[#7c7f87] hover:text-[#00645c] font-semibold my-4 sm:my-0"
            >
              Press kit
            </a>
          </div>
          <div className="flex flex-col justify-center sm:items-start items-center gap-3">
            <a
              href="#"
              className="text-[#7c7f87] hover:text-[#00645c]  font-semibold my-4 sm:my-0"
            >
              Install Guide
            </a>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-8 sm:ml-5">
          <a href="#" className="icon">
            {" "}
            <img src={facebook} alt="facebook" className="iconimg" />{" "}
          </a>

          <a href="#">
            {" "}
            <img src={twitter} alt="twitter" />{" "}
          </a>
          <a href="#">
            {" "}
            <img src={instagram} alt="instagram" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
