import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const BusLink = ({
  busOperatorName,
  sleeperBusType,
  busDepartureTime,
  busArrivalTime,
  availableSeats,
  busDepartureDate,
  busArrivalDate,
  journeyDuration,
  propWidth,
  propJustifyContent,
}) => {
  const navigate = useNavigate();
  const onsearchButtonClick = useCallback(() => {
    navigate("/review-booking");
  }, [useNavigate]);

  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
      justifyContent: propJustifyContent,
    };
  }, [propWidth, propJustifyContent]);

  return (
    <div>
    <div className="w-[900px] h-[300px] flex flex-col items-start justify-start relative text-left text-sm text-gray-200 font-poppins">
      <div className=" absolute top-[0px] left-[0px] rounded-3xs bg-white h-[280px] overflow-hidden shrink-0 flex flex-col py-5 px-[25px] box-border items-start justify-start gap-[15px] ">
        <div className="relative text-3xl font-medium inline-block w-[850px] ">
          {busOperatorName}
        </div>
        <div className="w-[850px] flex flex-row items-center justify-between z-[1]">
          <div
            className="w-[213px] h-[52px] flex flex-col items-start justify-start gap-[5px]"
            style={frameDivStyle}
          >
            <div className="relative font-medium">{sleeperBusType}</div>
            <div className="rounded-lg box-border w-36 h-10 flex flex-row py-[5px] px-[15px] items-start justify-start relative gap-[10px] border-[1px] border-solid border-royalblue-100">
              <img
                className="absolute  top-[5px] left-[10px] w-4 h-4 object-cover z-[0]"
                alt=""
                src="/wifi-1@2x.png"
              />
              <img
                className="absolute  top-[5px] left-[34px] w-4 h-4 object-cover z-[1]"
                alt=""
                src="/bus-1@2x.png"
              />
              <img
                className="absolute  top-[5px] left-[58px] w-4 h-4 object-cover z-[2]"
                alt=""
                src="/smartphone-1@2x.png"
              />
              <img
                className="absolute  top-[5px] left-[82px] w-4 h-4 object-cover z-[3]"
                alt=""
                src="/blanket-1@2x.png"
              />
              <img
                className="absolute  top-[5px] left-[106px] w-4 h-4 object-cover z-[4]"
                alt=""
                src="/waterbottle-1@2x.png"
              />
            </div>
          </div>
          <div className="relative text-xs font-medium whitespace-nowrap  text-royalblue-100">
            {availableSeats} Seats available
          </div>
        </div>
        <div className="w-[850px] h-[68px] flex flex-row items-center justify-between">
          <div className="w-[90px] h-[68px] flex flex-col items-start justify-start gap-[5px]">
            <div className="relative font-medium">{busDepartureDate}</div>
            <div className=" absolute w-[536px] h-[20px] left-36 bottom-24 flex flex-col items-center justify-between gap-[5px] text-3xs text-gray-400">
            <div className="relative mt-1  font-medium">{journeyDuration}</div>
            <img
              className="relative w-[542px] h-[6px] mt-2 ml-10"
              alt=""
              src="/vector-1.svg"
              
            />
          </div>
            <div className="relative">
              {busDepartureTime}
            </div>
          </div>
         
          <div className="relative w-[73px] h-[68px]">
            <div className="absolute top-[0px] left-[23px] font-medium">
              {busArrivalDate}
            </div>
            <div className="absolute top-[26px] left-[23px] text-right">
              {busArrivalTime}
            </div>
          </div>
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute  top-[224px] left-[758px] w-[117px] h-[43px] z-[3]"
          onClick={onsearchButtonClick}
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
    </div>
    </div>
  );
};

export default BusLink;
