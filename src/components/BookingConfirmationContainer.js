import { useSelector } from "react-redux";

const BookingConfirmationContainer = () => {
  const selectedBus = useSelector((state) => state.bus.selectedBus);
  const passengerInfo = useSelector((state) => state.form.passengerDetails);
  const passengerDetails = useSelector(
    (state) => state.form.passengerDetails.passengers,
  );
  const selectedSeats = useSelector((state) =>
    state.seats.seats.filter((seat) => seat.selected),
  );

  return (
    <div className="rounded-xl bg-royalblue-200 flex flex-col px-4 py-2 md:p-8 lg:p-12 items-start gap-4 md:gap-8 text-left text-lg md:text-xl text-gray-200 font-poppins w-full">
      {/* Selected Bus Details Container */}
      <div className="flex flex-col items-start gap-2 md:gap-4 w-full">
        <div className="font-medium">Booking Details :</div>
        <div className="flex flex-col items-start gap-4 md:gap-8 w-full">
          <div className="flex flex-row items-start justify-between w-full">
            <div className="font-medium">{selectedBus.name}</div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between text-base">
            <div className="w-40 h-20 flex flex-col items-start justify-start gap-2">
              <div className="relative font-medium">Nov 16</div>
              <div className="relative">
                <p className="m-0">{selectedBus.departureTime}</p>
                <p className="m-0">CIDCO, Aurangabad</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start gap-2 text-xs text-gray-400">
              <div className="relative font-medium">8 hours</div>
              <img className="relative w-2/3 h-2" alt="" src="/vector-11.svg" />
            </div>
            <div className="w-40 h-20 flex flex-col items-end justify-start gap-2">
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
      <div className="w-full py-10">
        {Object.entries(passengerDetails).map(([key, value], index) => (
          <div key={index} className="flex flex-col items-start my-5 w-full">
            <div className="font-medium">Passenger {index + 1} Details :</div>
            <div className="flex flex-row items-start justify-between space-x-4 my-10 text-base text-dimgray w-full">
              <div className="font-medium text-gray-200">{value.name}</div>
              <div className="font-medium">{value.age} Yrs</div>
              <div className="font-medium">{value.gender}</div>
              <div className="font-medium">
                Seat: {selectedSeats[index]?.id || "N/A"}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* E-mail Details Container */}
      <div className="flex flex-col md:flex-row items-start justify-between text-base w-full">
        <div className="font-medium">E-Tickets will be sent to:</div>
        <div className="font-medium text-darkslategray">
          <p className="m-0 uppercase">
            {passengerDetails[0].name} ({passengerInfo.mobile || "N/A"})
          </p>
          <p className="m-0 uppercase">{passengerInfo.email || "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmationContainer;
