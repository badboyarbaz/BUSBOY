import { Fragment } from "react";
import React from "react";
import CustomDatePicker from "./CustomDatePicker";
const SearchResultsContainer = () => {
    return (
        <div className="flex flex-col w-full p-4">
          <div className="flex flex-col md:flex-row md:space-x-4 w-full">
            <div className="w-full">
              <CustomDatePicker />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4 w-full mt-4">
            <input
                className="w-full bg-transparent md:w-1/2 border-b border-gray-400 py-4 px-2"
                type="text"
                placeholder="Aurangabad, Maharashtra"
                required
            />
            <input
                className="w-full bg-transparent md:w-1/2 border-b border-gray-400 py-4 px-2"
                type="text"
                placeholder="Bangalore, Karnataka"
                required
            />
          </div>
          <button className="w-full h-12 flex items-center justify-center md:w-1/2 bg-royalblue-100 py-4 rounded-md my-3 m-auto text-white text-center">
            Search for BUS
          </button>
          <div className="relative flex flex-col items-start justify-start gap-5 text-xl text-white">
            <div className="w-full flex flex-col items-start justify-start gap-4">
              <a className="rounded-3xs w-full h-36 flex flex-row py-2.5 px-3.5 box-border items-center justify-start gap-3 bg-[url(/public/frame-5@3x.png)] bg-cover bg-no-repeat bg-[top] text-[inherit]">
                <div className="relative font-medium">Planning your holidays</div>
                <img className="relative w-auto h-2.5" alt="" src="/2.svg" />
              </a>
              <a className="rounded-3xs w-full h-36 flex flex-row py-2.5 px-[25px] box-border items-center justify-start gap-3  bg-[url(/public/frame-6@3x.png)] bg-cover bg-no-repeat bg-[top] text-[inherit]">
                <div className="relative font-medium">Train tourism packages</div>
                <img
                    className="relative w-auto h-2.5"
                    alt=""
                    src="/2.svg"
                ></img>
              </a>
            </div>
            <p className=" bg-[transparent] font-poppins text-s relative text-gray-100 text-left inline-block w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et olore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et olore magna aliqua.
            </p>
          </div>
        </div>
    );
  };


  export default SearchResultsContainer;
