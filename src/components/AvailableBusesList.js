import BusLink from "./BusLink";



const AvailableBusesList = () => {
  const busLinksData = [
    {
      busOperatorName: 'Humsafar Travels',
      departureCity: 'Aurangabad',
      destinationCity: 'Bangalore',
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
      departureCity: 'Aurangabad',
      destinationCity: 'Bangalore',
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
      departureCity: 'Aurangabad',
      destinationCity: 'Bangalore',
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
      departureCity: 'Aurangabad',
      destinationCity: 'Bangalore',
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
      <div className="w-full h-screen md:h-auto overflow-y-auto">
        <div className="flex flex-col items-center justify-start">
          <div className="w-full flex justify-between items-center border-b border-gray-400 py-2">
            <div className="flex items-center gap-8 h-14">
              <div className="font-medium text-3xl ml-2">Available Buses</div>
              <div className="text-md font-medium text-gray-100">
                5 Buses available
              </div>
            </div>
            <img className="w-8 h-8 mr-2" alt="" src="/group-2876.svg" />
          </div>

          <ul className="w-full flex flex-col items-center pl-0">
            {busLinksData.map((busLinkData, index) => (
                <BusLink key={index} {...busLinkData} />
            ))}
          </ul>
        </div>
      </div>
  );
};

export default AvailableBusesList;
