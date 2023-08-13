import { Fragment } from "react";
import React from "react";
import CustomDatePicker from "./CustomDatePicker";
const SearchResultsContainer = () => {

  return(
    <Fragment>
      <CustomDatePicker />
      <div className="absolute top-[258px] left-[0px] w-[650px] h-[136px]">
        <input
          className=" font-medium font-poppins text-sm bg-[transparent] absolute top-[0px] left-[0px] box-border w-[312.85px] overflow-hidden flex flex-row py-4 px-0 items-center justify-start border-b-[1px] border-solid border-gray-400"
          type="text"
          placeholder="Aurangabad, Maharashtra"
          required
          autoFocus
        />
        <input
          className=" font-medium font-poppins text-sm bg-[transparent] absolute top-[0px] left-[336.85px] box-border w-[312.85px] overflow-hidden flex flex-row py-4 px-0 items-center justify-start border-b-[1px] border-solid border-gray-400"
          type="text"
          placeholder="Bangalore, Karnataka"
          required
          autoFocus
        />
        <button
          className="cursor-pointer py-4 px-[25px] bg-royalblue-100 absolute top-[83px] left-[0px] rounded-3xs w-[650px] overflow-hidden flex flex-row box-border items-center justify-center"
          autoFocus
        >
          <div className="relative text-sm font-medium font-poppins text-white text-left">
            Search for bus
          </div>
        </button>
      </div>
      <div className="absolute top-[454px] left-[0px] flex flex-col items-start justify-start gap-[30px] text-xl text-white">
        <div className="flex flex-col items-start justify-start gap-[30px]">
          <a className="rounded-3xs w-[650px] h-[150px] flex flex-row py-2.5 px-[25px] box-border items-center justify-start gap-[10px] bg-[url(/public/frame-5@3x.png)] bg-cover bg-no-repeat bg-[top] text-[inherit]">
            <div className="relative font-medium">Planning your holidays</div>
            <img className="relative w-[8.24px] h-2.5" alt="" src="/2.svg" />
          </a>
          <a className="rounded-3xs w-[650px] h-[150px] flex flex-row py-2.5 px-[25px] box-border items-center justify-start gap-[10px] bg-[url(/public/frame-6@3x.png)] bg-cover bg-no-repeat bg-[top] text-[inherit]">
            <div className="relative font-medium">Train tourism packages</div>
            <img
              className="relative w-[8.24px] h-2.5"
              alt=""
              src="/2.svg"
            ></img>
          </a>
        </div>
        <p className=" bg-[transparent] font-poppins text-s relative text-gray-100 text-left inline-block w-[650px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et olore magna aliqua. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et olore magna aliqua.
        </p>
      </div>
    </Fragment>
  );
};
export default SearchResultsContainer;
