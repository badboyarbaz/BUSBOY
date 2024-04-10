import { useSelector } from "react-redux";

const TicketDetailsForm = () => {
  const ticketDetails = useSelector((state) => state.ticket.ticketDetails);
  const passengerInfo = useSelector((state) => state.form.passengerDetails);
  return (
    <div className="rounded flex flex-col bg-white p-8  md:mx-4 items-center justify-center gap-8 text-left text-base text-gray-200 font-poppins rounded-3xs border border-gray-400 w-full md:w-2/3">
      {/* PNR and Transaction ID */}
      <div className="flex flex-col w-full items-start justify-start gap-6">
        <div className="flex flex-row items-center justify-between text-center w-full">
          <div className="font-medium">PNR No: {ticketDetails.ticketId}</div>
          <div className="font-medium">Transaction ID : 351511859256378</div>
        </div>

        {/* Bus Details */}
        <div className="text-xl font-medium w-full">
          {ticketDetails.selectedBus.name}
        </div>
        <div className="flex flex-row items-center justify-start gap-8 w-full">
          {/* Departure Details */}
          <div className="flex flex-col items-start justify-start gap-3">
            <div className="font-medium">Nov 16</div>
            <div>
              <p>{ticketDetails.selectedBus.departureTime}</p>
              <p>CIDCO, Aurangabad</p>
            </div>
          </div>

          {/* Duration */}
          <div className="flex flex-col items-center justify-start gap-2 text-xs text-nowrap text-gray-400">
            <div className="font-medium">8 hours</div>
            <img className="w-2/3 h-5 " alt="" src="/vector-12.svg" />
          </div>

          {/* Arrival Details */}
          <div className="flex flex-col items-end justify-start gap-3">
            <div className="font-medium">Nov 17</div>
            <div className="text-right">
              <p>{ticketDetails.selectedBus.arrivalTime}</p>
              <p>Dabuspet Highway</p>
              <p>Road, Bangalore</p>
            </div>
          </div>
        </div>
      </div>

      {/* E-Tickets Info */}
      <div className="flex flex-row items-center justify-between w-full">
        <div className="font-medium">E-Tickets has been sent to:</div>
        <div className="font-medium text-darkslategray text-right">
          <p>{passengerInfo.mobile}</p>
          <p>{passengerInfo.email}</p>
        </div>
      </div>

      {/* Traveller Details */}
      <div className="flex flex-col items-start justify-center gap-3 w-full">
        <div className="text-xl font-medium w-full">Traveller Details</div>
        <div className="font-medium">
          {ticketDetails.passengerDetails[0].name}
        </div>
        <div className="flex flex-row items-center justify-between w-full text-dimgray">
          <div className="font-medium">
            <p>Age : {ticketDetails.passengerDetails[0].age} Yrs</p>
            <p>Gender : {ticketDetails.passengerDetails[0].gender}</p>
          </div>
          <div className="font-medium text-right">
            <p>Booking Status : Confirmed</p>
            <p>
              Seat no. :{" "}
              {ticketDetails.selectedSeats.map((seat) => seat.id).join(", ")}
            </p>
          </div>
        </div>
      </div>

      {/* Total Fare */}
      <div className="flex flex-row items-start justify-between w-full text-xl">
        <div className="font-semibold">Total Fare</div>
        <div className="font-semibold text-darkslategray">
          ₹{ticketDetails.billDetails.totalAmount}
        </div>
      </div>
    </div>
  );
};

export default TicketDetailsForm;
