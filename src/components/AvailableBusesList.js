import BusLink from "./BusLink";

const AvailableBusesList = () => {
  return (
    <ul className="m-0 relative w-[900px] h-[1222px] text-left text-sm text-gray-200 font-poppins">
      <div className="absolute top-[106px] left-[0px] h-[1117px] overflow-y-auto flex flex-col pt-0 px-0 pb-[136px] box-border items-center justify-start gap-[52px]">
        <BusLink
          busOperatorName="Humsafar Travels"
          sleeperBusType="Bharat Benz A/C Sleeper (2+1)"
          propHeight="300px"
        />
        <BusLink
          busOperatorName="Musafir Travels"
          sleeperBusType="A/C Sleeper (2+1)"
          propWidth="128px"
          propJustifyContent="flex-end"
          propWidth1="541.33px"
          propHeight="5.33px"
        />
        <BusLink
          busOperatorName="Musafir Travels"
          sleeperBusType="A/C Sleeper (2+1)"
          propWidth="128px"
          propJustifyContent="flex-end"
          propWidth1="541.33px"
          propHeight="5.33px"
        />
        <BusLink
          busOperatorName="VRL Travels"
          sleeperBusType="Volvo Multi-Axle I-Shift A/C Sleeper (2+1)"
          propWidth="290px"
          propJustifyContent="flex-start"
          propWidth1="536px"
          propHeight="0px"
        />
      </div>
      <div className="absolute top-[106px] left-[922px]">
        <div className="relative rounded-10xs bg-white w-[5px] h-[1080px]" />
        <div className="relative rounded-8xs bg-royalblue-400 w-2 h-[420px]" />
      </div>
      <div className="absolute top-[0px] left-[0px] box-border w-[927px] flex flex-row p-[15px] items-center justify-between text-13xl border-b-[1.5px] border-solid border-gray-400">
        <div className="flex flex-row items-center justify-start gap-[30px]">
          <div className="relative font-medium">Available Buses</div>
          <div className="relative text-xs font-medium text-gray-100">
            5 Buses available
          </div>
        </div>
        <img
          className="relative w-[30px] h-[30px]"
          alt=""
          src="/group-2876.svg"
        />
      </div>
    </ul>
  );
};

export default AvailableBusesList;
