import Footer from "../components/Footer";
import TicketDetailsForm from "../components/TicketDetailsForm";
import QRCodeViewerContainer from "../components/QRCodeViewerContainer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { clearTicketDetails } from "../redux/ticketAction";
import { useDispatch } from "react-redux";

const BookedTicket = () => {
  const [ticketDetails, setTicketDetails] = useState(null);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //     return () => {
  //         dispatch(clearTicketDetails());
  //     };
  // }, [dispatch]);

  return (
    <div className="relative bg-whitesmoke w-full min-h-screen overflow-hidden text-left text-sm text-gray-100 font-poppins flex flex-col items-center">
      {/* Header */}
      <Header />

      {/* Congratulations Message */}
      <img className="flex flex-col py-2 px-4" src="/vector9.svg"></img>
      <div className="text-5xl text-limegreen mt-5 p-2 text-center">
        <div className="font-medium">
          Congratulations! You have successfully booked tickets
        </div>
        <div className="text-base font-medium text-gray-100 text-center mt-2">
          <p>Please carry SMS/Mail sent to your contact details,</p>
          <p>Please report yourself before 15 mins of departure time.</p>
        </div>
      </div>

      {/* Ticket and QR Code Section */}
      <div className="flex flex-col md:flex-row w-full justify-between mt-10 px-4 gap-3">
        <TicketDetailsForm details={ticketDetails} />
        <QRCodeViewerContainer details={ticketDetails} />
      </div>

      {/* Footer Links */}
      <div className="flex flex-row items-center justify-center gap-8 mt-10 mb-10">
        <div className="font-medium">Cancellation Policy</div>
        <div className="font-medium">Terms & Conditions</div>
        <div className="font-medium">Travel Insurance</div>
      </div>

      {/* Footer */}
      <Footer dimensionCode="/vector4.svg" />
    </div>
  );
};

export default BookedTicket;
