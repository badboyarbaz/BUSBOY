import * as React from "react";
import { Select } from "@mui/base/Select";
import { Option } from "@mui/base/Option";

const PickupAndDropCard = () => {
  const commonOptionStyle =
    "list-none bg-white border border-b-gray-400 hover:bg-royalblue-100 hover:text-white px-2 py-2 text-center w-40 h-8";

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center gap-4 bg-white border border-solid rounded-lg border-gray-400 px-4 py-2">
      {/*Pickup Header */}
      <div className="flex flex-row items-center justify-between w-full">
        <p className="font-medium justify-end">Pickup & Drop</p>
        <p className="text-xs font-base text-gray-300 justify-start">
          Please select your pickup point and drop point
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-9 px-4 py-2">
        {/* Pickup Selection */}
        <div className="flex flex-col items-center justify-center">
          <Select
            placeholder="Pickup Location"
            className="bg-white border-b  border-gray-400 hover:border-royalblue-100 w-40 h-12 items-center"
            defaultValue={1}
            id="pickup-select"
            name="pickup-select"
            getOptionStyle={() => commonOptionStyle}
          >
            <Option value={1} className={commonOptionStyle}>
              First Option
            </Option>
            <Option value={2} className={commonOptionStyle}>
              Second Option
            </Option>
            <Option value={3} className={commonOptionStyle}>
              Third Option
            </Option>
          </Select>
        </div>

        {/* Drop Selection */}
        <div className="flex flex-col lg:flex-row items-center justify-start gap-2 w-full">
          <Select
            placeholder="Pickup Location"
            className="bg-white border-b  border-gray-400 hover:border-royalblue-100 w-40 h-12 items-center"
            defaultValue={1}
            id="pickup-select"
            name="pickup-select"
          >
            <Option value={1} className={commonOptionStyle}>
              First Option
            </Option>
            <Option value={2} className={commonOptionStyle}>
              Second Option
            </Option>
            <Option value={3} className={commonOptionStyle}>
              Third Option
            </Option>
          </Select>
        </div>

        {/* Continue Button */}
        <button className="rounded-full bg-royalblue-100 flex p-3 items-center justify-center text-center text-white w-full lg:w-full">
          Continue
        </button>
      </div>
    </div>
  );
};

export default PickupAndDropCard;
