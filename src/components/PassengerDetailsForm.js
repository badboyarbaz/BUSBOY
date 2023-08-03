import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownButton, SplitButton } from "react-bootstrap";

const PassengerDetailsForm = () => {
  return (
    <div className="rounded-3xs bg-white box-border w-[778px] h-[430px] flex flex-col p-[50px] items-start justify-start gap-[30px] text-left text-xl text-gray-200 font-poppins border-[1px] border-solid border-gray-400">
      <h1 className="m-0 self-stretch flex flex-row py-2.5 px-0 items-center justify-start text-[inherit] font-inherit">
        <div className="flex flex-row items-center justify-start">
          <div className="relative font-medium">Passenger Details</div>
        </div>
      </h1>
      <div className="w-[653px] h-20 flex flex-row items-start justify-start gap-[30px]">
        <div className="flex-1 flex flex-row items-start justify-start gap-[30px]">
          <input
            className="[border:none] font-medium font-poppins text-sm bg-[transparent] flex-1 overflow-hidden flex flex-row py-4 px-[25px] items-center justify-start border-b-[1px] border-solid border-gray-400"
            type="text"
            placeholder="Passenger 1 Name"
          />
          <DropdownButton
            className="w-[172px] flex flex-col"
            title="Gender"
            variant="primary"
            align="start"
            drop="down"
          >{` `}</DropdownButton>
        </div>
        <DropdownButton
          className="w-[109px] flex flex-col"
          title="Age"
          variant="primary"
          align="start"
          drop="down"
        >{` `}</DropdownButton>
      </div>
      <div className="w-[653px] h-20 flex flex-row items-start justify-start gap-[30px]">
        <div className="flex-1 flex flex-row items-start justify-start gap-[30px]">
          <input
            className="[border:none] font-medium font-poppins text-sm bg-[transparent] flex-1 overflow-hidden flex flex-row py-4 px-[25px] items-center justify-start border-b-[1px] border-solid border-gray-400"
            type="text"
            placeholder="Passenger 2 Name"
          />
          <DropdownButton
            className="w-[172px] flex flex-col"
            title="Gender"
            variant="primary"
            align="start"
            drop="down"
          >{` `}</DropdownButton>
        </div>
        <DropdownButton
          className="w-[109px] flex flex-col"
          title="Age"
          variant="primary"
          align="start"
          drop="down"
        >{` `}</DropdownButton>
      </div>
      <div className="w-[653px] h-20 overflow-x-auto shrink-0 flex flex-row items-start justify-start gap-[30px]">
        <div className="flex-1 flex flex-row items-start justify-start gap-[30px]">
          <input
            className="[border:none] font-medium font-poppins text-sm bg-[transparent] flex-1 overflow-hidden flex flex-row py-4 px-[25px] items-center justify-start border-b-[1px] border-solid border-gray-400"
            type="text"
            placeholder="Passenger 3 Name"
          />
          <DropdownButton
            className="w-[172px] flex flex-col"
            title="Gender"
            variant="primary"
            align="start"
            drop="down"
          >{` `}</DropdownButton>
        </div>
        <DropdownButton
          className="w-[109px] flex flex-col"
          title="Age"
          variant="primary"
          align="start"
          drop="down"
        >{` `}</DropdownButton>
      </div>
    </div>
  );
};

export default PassengerDetailsForm;
