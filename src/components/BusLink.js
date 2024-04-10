import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  IoIosWifi,
  IoMdBed,
  IoMdBus,
  IoMdLocate,
  IoMdWater,
} from "react-icons/io";
import { MdChargingStation } from "react-icons/md";

const BusLink = ({
  busDeparture,
  busDestination,
  busName,
  busType,
  busDepartureTime,
  busArrivalTime,
  busAvailableSeats,
  busDepartureDate,
  busArrivalDate,
  busJourneyTime,
}) => {
  const navigate = useNavigate();
  const onSearchButtonClick = useCallback(() => {
    navigate("/review-booking");
  }, [navigate]);

  return (
    <div className="relative flex flex-col w-auto gap-4 px-4 py-6 mr-2 bg-white border-2 rounded-lg">
      <div className="flex flex-row items-center justify-between">
        <div className="">
          <p className="text-xl font-medium">{busName}</p>
          <p className="text-xs">{busType}</p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <p className="mx-auto text-xs font-medium text-royalblue-100">
            {busAvailableSeats} Seats available
          </p>
          <div className="flex items-center gap-4 p-2 border rounded border-royalblue-100">
            <IoIosWifi
              className="w-4 h-4 cursor-pointer"
              title="Wifi available"
            />
            <IoMdBus className="w-4 h-4 cursor-pointer" title="Bus service" />
            <MdChargingStation
              className="w-4 h-4 cursor-pointer"
              title="Charging station available"
            />
            <IoMdBed
              className="w-4 h-4 cursor-auto"
              title="Sleeping facilities"
            />
            <IoMdWater
              className="w-4 h-4 cursor-auto"
              title="Water available"
            />
            <IoMdLocate
              className="w-4 h-4 cursor-pointer"
              title="Location tracking"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col items-start">
          <p className="font-normal text-xs">
            {new Date(busDepartureDate).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
          <p className="font-normal text-xs">
            {new Date(busDepartureTime).toLocaleTimeString(undefined, {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
          <p className="">{busDeparture}</p>
        </div>
        <div className="relative text-center text-gray-400 text-xs">
          {busJourneyTime} Hours
          <img
            className="relative hidden lg:block w-2/3 h-2 inset-x-20 "
            alt=""
            src="/vector-1.svg"
          />
        </div>
        <div className="flex flex-col items-end justify-end">
          <p className="font-normal text-xs text-right">
            {new Date(busArrivalDate).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
          <p className="font-normal text-xs">
            {new Date(busArrivalTime).toLocaleTimeString(undefined, {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
          <p className="">{busDestination}</p>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <button
          className="flex items-center justify-center px-4 py-2 text-white rounded cursor-pointer md:w-1/3 bg-royalblue-100"
          onClick={onSearchButtonClick}
        >
          Select Seats
        </button>
      </div>
    </div>
  );
};

export default BusLink;
