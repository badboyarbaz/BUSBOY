import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const BusLink = ({
                    departureCity,
                     destinationCity,
                   busOperatorName,
                   sleeperBusType,
                   busDepartureTime,
                   busArrivalTime,
                   availableSeats,
                   busDepartureDate,
                   busArrivalDate,
                   journeyDuration,
                 }) => {
  const navigate = useNavigate();
  const onSearchButtonClick = useCallback(() => {
    navigate("/review-booking");
  }, [navigate]);

  return (
      <div className="w-full md:w-auto h-auto flex flex-col items-start justify-start py-4">
        <div className="w-full lg:h-72 rounded bg-white flex flex-col p-4">
          <div className="text-3xl font-medium">
            {busOperatorName}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-start gap-2">
              <div className="font-medium">{sleeperBusType}</div>
              <div className="flex items-center gap-4 border border-royalblue-100 p-2 rounded">
                  <img
                      className=" w-4 h-4 object-cover z-[0]"
                      alt=""
                      src="/wifi-1@2x.png"
                  />
                  <img
                      className="w-4 h-4 object-cover z-[1]"
                      alt=""
                      src="/bus-1@2x.png"
                  />
                  <img
                      className="w-4 h-4 object-cover z-[2]"
                      alt=""
                      src="/smartphone-1@2x.png"
                  />
                  <img
                      className="w-4 h-4 object-cover z-[3]"
                      alt=""
                      src="/blanket-1@2x.png"
                  />
                  <img
                      className="w-4 h-4 object-cover z-[4]"
                      alt=""
                      src="/waterbottle-1@2x.png"
                  />
              </div>
            </div>
            <div className="text-xs font-medium text-royalblue-100">
              {availableSeats} Seats available
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col flex-nowrap items-start">
              <div className="font-medium">{busDepartureDate} {busDepartureTime}</div>
              <div className="">{departureCity}</div>
            </div>
              <div className=" relative text-3xs text-gray-400 text-center">
                  {journeyDuration}
                  <img
                      className="relative flex inset-x-20 w-2/3 h-2 "
                      alt=""
                      src="/vector-1.svg"

                  />
              </div>
            <div className="flex flex-col items-end justify-end">
              <div className="font-medium"> {busArrivalDate} {busArrivalTime}</div>
              <div>{destinationCity}</div>
            </div>
          </div>
          <button
              className="w-1/3 md:w-1/3 h-12 flex items-center ml-auto mt-3 justify-center rounded bg-royalblue-100 text-white"
              onClick={onSearchButtonClick}
          >
            Select Seats
          </button>
        </div>
      </div>
  );
};

export default BusLink;
