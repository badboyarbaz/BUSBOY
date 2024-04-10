import React from "react";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialTwitter,
} from "react-icons/sl";
import { BsSend } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="relative bg-royalblue-100 w-full h-auto flex flex-col md:p-4 items-start justify-start text-white lg:flex lg:flex-col lg:items-center lg:justify-center">
      <div className="sm:block md:block lg:hidden">
        {/* Logo Mobile*/}
        <div className="flex flex-col items-center py-2">
          <a className="font-semibold">
            <span className="text-2xl">BUS</span>
            <span className="text-2xl text-gray-200">BOY</span>
          </a>
        </div>

        {/* Links */}
        <div className="flex px-4 py-6">
          <div className="grid grid-cols-3 text-center items-center gap-4">
            <a className="relative ">About us</a>
            <a className="relative ">Mobile</a>
            <a className="relative ">Privacy</a>
            <a className="relative ">Terms of use</a>
            <a className="relative ">Career</a>
            <a className="relative ">Customer Service</a>
          </div>
        </div>

        {/* Social Links */}
        <div className="relative top-20 px-12 space-x-20 w-1/2 flex flex-row items-center justify-between z-[0]">
          <img className="" alt="" src="/vector.svg" />
          <img className="" alt="" src="/vector1.svg" />
          <img className="" alt="" src="/vector2.svg" />
        </div>
      </div>

      {/* New Grid layout for lg and bigger devices */}
      <div className="hidden lg:grid lg:grid-rows-2 lg:grid-cols-2 gap-x-96 gap-y-8">
        {/* 1st row, 1st col: Logo */}
        <div className="flex items-center justify-start">
          <a className="font-semibold">
            <span className="text-3xl">BUS</span>
            <span className="text-3xl text-gray-200">BOY</span>
          </a>
        </div>

        {/* 1st row, 2nd col: Social Links */}
        <div className="flex items-center justify-end">
          <div className="flex items-center gap-10">
            <SlSocialFacebook className="w-6 h-6" />
            <SlSocialInstagram className="w-6 h-6" />
            <SlSocialTwitter className="w-6 h-6" />
          </div>
        </div>

        {/* 2nd row, 1st col: Newsletter */}
        <div className="flex items-center justify-start ">
          <div>
            <p className="font-normal text-lg">Planning your next trip?</p>
            <p className="text-sm">
              Subscribe to our newsletter. Get the latest travel trends & deals!
            </p>
          </div>
        </div>

        {/* 2nd row, 2nd col: Input box and img */}
        <div className="flex items-center justify-center gap-4">
          <input
            className="w-full p-2 text-xs font-normal text-black text-left rounded-full outline-none bg-whitesmoke"
            type="email"
            placeholder="Enter Email ID"
            required
          />
          <BsSend className="w-6 h-6" />
        </div>
      </div>

      {/* Bottom row: Links */}
      <div className="relative flex-row justify-between hidden pt-10 space-x-10 text-sm lg:block">
        <a className="cursor-pointer">About us</a>
        <a className="cursor-pointer">Mobile</a>
        <a className="cursor-pointer">Privacy</a>
        <a className="cursor-pointer">Terms of use</a>
        <a className="cursor-pointer">Career</a>
        <a className="cursor-pointer">Customer Service</a>
      </div>
    </footer>
  );
};

export default Footer;
