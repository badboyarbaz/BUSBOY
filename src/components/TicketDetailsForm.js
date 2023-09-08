import { useSelector } from 'react-redux';

const TicketDetailsForm = () => {

  const ticketDetails = useSelector((state) => state.ticket.ticketDetails);
  const passengerInfo = useSelector((state) => state.form.passengerDetails);

  return (
    <div className="rounded-3xs flex flex-col p-[50px] items-center justify-center gap-[30px] text-left text-base text-gray-200 font-poppins border-[1px] border-solid border-gray-400">
      <div className="flex flex-col items-start justify-start gap-[20px]">
        <div className="self-stretch flex flex-row items-center justify-between text-center">
          <div className="relative font-medium">PNR No: {ticketDetails.ticketId}</div>
          <div className="relative font-medium">
            Transaction ID : 351511859256378
          </div>
        </div>
        <div className="self-stretch relative text-xl font-medium"> {ticketDetails.selectedBus.name}</div>
        <div className="w-[877px] flex flex-row items-center justify-start gap-[57px]">
          <div className="w-[163px] h-[81px] flex flex-col items-start justify-start gap-[9px]">
            <div className="relative font-medium">Nov 16</div>
            <div className="relative">
              <p className="m-0">{ticketDetails.selectedBus.departureTime}</p>
              <p className="m-0">CIDCO, Aurangabad</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-start gap-[5px] text-xs text-gray-400">
            <div className="relative font-medium">8 hours</div>
            <img
              className="self-stretch relative max-w-full overflow-hidden h-[5.33px] shrink-0"
              alt=""
              src="/vector-12.svg"
            />
          </div>
          <div className="w-[152px] h-[106px] flex flex-col items-end justify-start gap-[10px]">
            <div className="relative font-medium">Nov 17</div>
            <div className="relative text-right">
              <p className="m-0">{ticketDetails.selectedBus.arrivalTime}</p>
              <p className="m-0">Dabuspet Highway</p>
              <p className="m-0">Road, Bangalore</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[877px] flex flex-row items-center justify-between">
        <div className="relative font-medium">E-Tickets has been sent to:</div>
        <div className="relative font-medium text-darkslategray text-right">
          <p className="m-0">{passengerInfo.mobile}</p>
          <p className="m-0">{passengerInfo.email}</p>
        </div>
      </div>
      <div className="w-[877px] flex flex-col items-start justify-center gap-[10px]">
        <div className="relative text-xl font-medium inline-block w-[877px]">
          Traveller Details
        </div>
        <div className="relative font-medium">{ticketDetails.passengerDetails[0].name}</div>
        <div className="self-stretch flex flex-row items-center justify-between text-dimgray">
          <div className="relative font-medium">
            <p className="m-0">Age : {ticketDetails.passengerDetails[0].age} Yrs</p>
            <p className="m-0">Gender : {ticketDetails.passengerDetails[0].gender}</p>
          </div>
          <div className="relative font-medium text-right">
            <p className="m-0">Booking Status : Confirmed</p>
            <p className="m-0">Seat no. : {ticketDetails.selectedSeats.map((seat) => seat.id).join(', ')}</p>
          </div>
        </div>
      </div>
      <div className="w-[877px] flex flex-row items-start justify-between text-xl">
        <div className="relative font-semibold">Total Fare</div>
        <div className="relative font-semibold text-darkslategray">
          ₹{ticketDetails.billDetails.totalAmount}
        </div>
      </div>
    </div>
  );
};

export default TicketDetailsForm;
