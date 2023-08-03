import { useMemo } from "react";

const BusLink = ({
  busOperatorName,
  sleeperBusType,
  propWidth,
  propJustifyContent,
  propWidth1,
  propHeight,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
      justifyContent: propJustifyContent,
    };
  }, [propWidth, propJustifyContent]);

  const vectorIconStyle = useMemo(() => {
    return {
      width: propWidth1,
      height: propHeight,
    };
  }, [propWidth1, propHeight]);

  return (
    <a className="[text-decoration:none] w-[900px] h-[300px] flex flex-col items-start justify-start relative text-left text-sm text-gray-200 font-poppins">
      <div className="my-0 mx-[!important] absolute top-[0px] left-[0px] rounded-3xs bg-white h-[280px] overflow-hidden shrink-0 flex flex-col py-5 px-[25px] box-border items-start justify-start gap-[15px] z-[0]">
        <div className="relative text-3xl font-medium inline-block w-[850px] z-[0]">
          {busOperatorName}
        </div>
        <div className="w-[850px] flex flex-row items-center justify-between z-[1]">
          <div
            className="w-[213px] h-[52px] flex flex-col items-start justify-start gap-[5px]"
            style={frameDivStyle}
          >
            <div className="relative font-medium">{sleeperBusType}</div>
            <div className="rounded-lg box-border w-32 flex flex-row py-[5px] px-[15px] items-start justify-start relative gap-[10px] border-[1px] border-solid border-royalblue-100">
              <img
                className="absolute my-0 mx-[!important] top-[5px] left-[10px] w-4 h-4 object-cover z-[0]"
                alt=""
                src="/wifi-1@2x.png"
              />
              <img
                className="absolute my-0 mx-[!important] top-[5px] left-[34px] w-4 h-4 object-cover z-[1]"
                alt=""
                src="/bus-1@2x.png"
              />
              <img
                className="absolute my-0 mx-[!important] top-[5px] left-[58px] w-4 h-4 object-cover z-[2]"
                alt=""
                src="/smartphone-1@2x.png"
              />
              <img
                className="absolute my-0 mx-[!important] top-[5px] left-[82px] w-4 h-4 object-cover z-[3]"
                alt=""
                src="/blanket-1@2x.png"
              />
              <img
                className="absolute my-0 mx-[!important] top-[5px] left-[106px] w-4 h-4 object-cover z-[4]"
                alt=""
                src="/waterbottle-1@2x.png"
              />
            </div>
          </div>
          <div className="relative text-xs font-medium text-royalblue-100">
            6 Seats Available
          </div>
        </div>
        <div className="w-[850px] flex flex-row items-center justify-between z-[2]">
          <div className="w-[90px] h-[68px] flex flex-col items-start justify-start gap-[5px]">
            <div className="relative font-medium">Nov 16</div>
            <div className="relative">
              <p className="m-0">04:30 pm</p>
              <p className="m-0">Aurangabad</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[5px] text-3xs text-gray-400">
            <div className="relative font-medium">8 hours</div>
            <img
              className="relative w-[541.33px] h-[5.33px]"
              alt=""
              src="/vector-1.svg"
              style={vectorIconStyle}
            />
          </div>
          <div className="relative w-[73px] h-[68px]">
            <div className="absolute top-[0px] left-[23px] font-medium">
              Nov 17
            </div>
            <div className="absolute top-[26px] left-[0px] text-right">
              <p className="m-0">8:30 am</p>
              <p className="m-0">Bangalore</p>
            </div>
          </div>
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute my-0 mx-[!important] top-[224px] left-[758px] w-[117px] h-[43px] z-[3]"
          autoFocus
        >
          <img
            className="absolute top-[0px] left-[0px] rounded-3xs w-[117px] h-[43px]"
            alt=""
            src="/rectangle-105.svg"
          />
          <div className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_42.5px)] text-sm font-medium font-poppins text-white text-left">
            Select Seats
          </div>
        </button>
      </div>
    </a>
  );
};

export default BusLink;
