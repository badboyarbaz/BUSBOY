import BusLink from "./BusLink";


const AvailableBusesList = () => {
  const busLinksData = [
    {
      busOperatorName: 'Humsafar Travels',
      sleeperBusType: 'Type 1',
      busDepartureTime: '04:30',
      busArrivalTime: '08:30',
      availableSeats: '20',
      busDepartureDate: 'Nov 16',
      busArrivalDate: 'Nov 17' ,
      journeyDuration: '8 hours',
      propHeight: '300px',
      propWidth : '900px',
      propJustifyContent: 'flex-end',
    },
    {
      busOperatorName: 'Musafir Travels',
      sleeperBusType: 'Type 1',
      busDepartureTime: '04:30',
      busArrivalTime: '08:30',
      availableSeats: '20',
      busDepartureDate: 'Nov 16',
      busArrivalDate: 'Nov 17' ,
      journeyDuration: '8 hours',
      propHeight: '300px',
      propWidth : '900px',
      propJustifyContent: 'flex-end',
    },
    {
      busOperatorName: 'Dolphin Travels',
      sleeperBusType: 'Type 1',
      busDepartureTime: '04:30',
      busArrivalTime: '08:30',
      availableSeats: '20',
      busDepartureDate: 'Nov 16',
      busArrivalDate: 'Nov 17' ,
      journeyDuration: '8 hours',
      propHeight: '300px',
      propWidth : '900px',
      propJustifyContent: 'flex-end',
    },
    {
      busOperatorName: 'VRL Travels',
      sleeperBusType: 'Type 1',
      busDepartureTime: '04:30',
      busArrivalTime: '08:30',
      availableSeats: '20',
      busDepartureDate: 'Nov 16',
      busArrivalDate: 'Nov 17' ,
      journeyDuration: '8 hours',
      propHeight: '300px',
      propWidth : '900px',
      propJustifyContent: 'flex-end',
    },
  ];
  return (
    <div h-32 w-64>
    <ul className="m-0 relative w-[950px] h-[1222px] text-left text-sm text-gray-200 font-poppins overflow-hidden  ">
      <div className="relative top-[106px] left-[0px] h-[1117px] overflow-y-auto flex flex-col pt-0 px-0 pb-[136px] box-border items-center justify-start gap-[52px] scrollbar-thin scrollbar-track-white scrollbar-thumb-royalblue-400 scrollbar-thumb-rounded ">
      {busLinksData.map((busLinkData, index) => (
        <BusLink key={index} {...busLinkData} />
      ))}
      </div>
    </ul>
      <div className="absolute w-[927px] h-[78px] top-[0px] left-[800px] box-border w-[927px] flex flex-row p-[15px] items-center justify-between text-13xl border-b-[1.5px] border-solid border-gray-400">
        <div className="relative w-[927px] h-[78px] ml-0 flex flex-row items-center justify-start gap-[30px]">
          <div className="relative font-medium">Available Buses</div>
          <div className="relative text-xs font-medium text-gray-100">
            5 Buses available
          </div>
          <img
          className="absolute right-0 w-[30px] h-[30px]"
          alt=""
          src="/group-2876.svg"
        />
        </div>
        
      </div>
    </div>
    
  );
};

export default AvailableBusesList;
