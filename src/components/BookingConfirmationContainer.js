import { useSelector } from "react-redux";

const BookingConfirmationContainer = () => {
  const selectedBus = useSelector((state) => state.bus.selectedBus);
  const passengerInfo = useSelector((state) => state.form.passengerDetails);
  const passengerDetails = useSelector((state) => state.form.passengerDetails.passengers);
  const selectedSeats = useSelector((state) => state.seats.seats.filter(seat => seat.selected));

  return (
    <div className="rounded-3xs bg-royalblue-200 w-[937px] flex flex-col p-[30px] box-border items-start justify-start gap-[60px] text-left text-xl text-gray-200 font-poppins">
       {/* Selected Bus Details Container */}
      <div className="relative self-stretch flex flex-col items-start justify-start gap-[10px]">
        <div className="relative font-medium">Booking Details :</div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[30px]">
          <div className="self-stretch flex flex-row items-start justify-between relative">
            <div className="absolute top-[0px] left-[0px] font-medium">
              {selectedBus.name}
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between text-base">
            <div className="w-[163px] h-[82px] flex flex-col items-start justify-start gap-[10px]">
              <div className="relative font-medium">Nov 16</div>
              <div className="relative">
                <p className="m-0">{selectedBus.departureTime}</p>
                <p className="m-0">CIDCO, Aurangabad</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start gap-[5px] text-xs text-gray-400">
              <div className="relative font-medium">8 hours</div>
              <img
                className="relative w-[305.33px] h-[5.33px]"
                alt=""
                src="/vector-11.svg"
              />
            </div>
            <div className="w-[152px] h-[106px] flex flex-col items-end justify-start gap-[10px]">
              <div className="relative font-medium">Nov 17</div>
              <div className="relative text-right">
                <p className="m-0">{selectedBus.arrivalTime}</p>
                <p className="m-0">Dabuspet Highway</p>
                <p className="m-0">Road, Bangalore</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bill Details Container */}
      <div>
      {Object.entries(passengerDetails).map(([key, value], index) => (
        <div key={index} className="w-[880px] relative self-stretch flex flex-col items-start justify-center my-5" >
        <div className="self-stretch relative font-medium">
        Passenger {index + 1} Details :
        </div>
        <div className="relative self-stretch flex flex-row py-0 px-[3px] items-start justify-between space-x-52 my-10 text-base text-dimgray">
          <div className="relative tracking-wide font-medium text-gray-200">
          {value.name}
          </div>
          <div className="relative font-medium">{value.age} Yrs</div>
          <div className="relative font-medium">{value.gender}</div>
          <div className="relative font-medium">Seat: {selectedSeats[index]?.id || 'N/A'}</div>
        </div>
        </div>
        ))}
      </div>
         {/* E-mail Details Container */}
      <div className="self-stretch flex flex-row items-start justify-between text-base">
        <div className="relative font-medium">E-Tickets will be sent to:</div>
        <div className="relative font-medium text-darkslategray">
          <p className="m-0 uppercase">{passengerDetails[0].name} ({passengerInfo.mobile || 'N/A'})</p>
          <p className="m-0 uppercase">{passengerInfo.email || 'N/A'}</p>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmationContainer;
