import React from "react";
import { BiSolidChevronRightCircle } from "react-icons/bi";

function TourPackage() {
  return (
    <div className="relative flex flex-col items-start justify-start gap-5 text-xl text-white">
      <div className="w-full flex flex-col items-start justify-start gap-4">
        <a className="rounded-xl w-full h-36 flex flex-row py-2 px-4 items-center justify-start gap-3 bg-[url(/public/frame-5@3x.png)] bg-cover  hover:text-lg text-base cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105">
          <span className="relative font-medium">Planning your holidays</span>
          <BiSolidChevronRightCircle />
        </a>
        <a className="rounded-xl w-full h-36 flex flex-row py-2 px-4 items-center justify-start gap-3  bg-[url(/public/frame-6@3x.png)] bg-cover hover:text-lg text-base cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105">
          <span className="relative font-medium">Explore the unexplored</span>
          <BiSolidChevronRightCircle className="" />
        </a>
      </div>
      <p className="relative text-gray-100 text-left inline-block w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et olore magna aliqua. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et olore magna aliqua.
      </p>
    </div>
  );
}

export default TourPackage;
