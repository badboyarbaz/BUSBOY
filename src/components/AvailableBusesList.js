import BusLink from "./BusLink";
import { getBuses } from "../services/busService";
import { useEffect, useState } from 'react';

const AvailableBusesList = () => {
  const [busLinksData, setBusLinksData] = useState([]);
  
  useEffect(() => {
    const fetchBuses = async () => {
      try {
        const buses = await getBuses();
        setBusLinksData(buses);
        console.log(buses);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBuses();
  }, []);

  return (
      <div className="w-full h-full px-4 py-4 overflow-hidden">
        <div className="flex flex-col items-center justify-start gap-4">
          <div className="flex items-center justify-between w-full px-4 py-3 border-b border-gray-100">
              <p className="text-lg font-medium">Available Buses</p>
              <p className="ml-20 text-xs font-medium text-gray-100">
                5 Buses available
              </p>
            <img className="w-8 h-8 mr-2" alt="" src="/group-2876.svg" />
          </div>

          <ul className="flex flex-col items-center w-full h-screen gap-8 pl-0 overflow-y-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-royalblue-100 scrollbar-thumb-rounded ">
            {busLinksData.map((busLinkData, index) => (
                <BusLink key={index} {...busLinkData} />
            ))}
          </ul>
        </div>
      </div>
  );
};

export default AvailableBusesList;
