import Footer from "../components/Footer";
import TicketDetailsForm from "../components/TicketDetailsForm";
import QRCodeViewerContainer from "../components/QRCodeViewerContainer";
import Header from "../components/Header";

const BookedTicket = () => {
  return (
    <div className="relative bg-white w-full h-[1490px] overflow-hidden text-left text-sm text-gray-100 font-poppins">
      <Footer dimensionCode="/vector4.svg" socialTop="1203px" />
      <div className="absolute top-[1092px] left-[734px] flex flex-row items-start justify-start gap-[30px]">
        <div className="relative capitalize font-medium">
          Cancellation Policy
        </div>
        <div className="relative capitalize font-medium">{`Terms & Conditions`}</div>
        <div className="relative capitalize font-medium">Travel Insurance</div>
      </div>
      <div className="absolute top-[448px] left-[210px] w-[1500px] h-[584px] flex flex-row items-center justify-between">
        <TicketDetailsForm />
        <QRCodeViewerContainer />
      </div>
      <div className="absolute top-[176px] left-[515px] w-[881px] h-[236px] text-13xl text-limegreen">
        <div className="absolute top-[130px] left-[0px] flex flex-col items-center justify-start gap-[10px]">
          <div className="relative font-medium">
            Congratulations! You have successfully booked tickets
          </div>
          <div className="relative text-base font-medium text-gray-100 whitespace-pre-wrap text-center">
            <p className="m-0">{`please carry  SMS / Mail sent to your contact details, `}</p>
            <p className="m-0">
              Please report your self before 15 mins of departure time.
            </p>
          </div>
        </div>
        <img
          className="absolute h-[42.37%] w-[11.35%] top-[0%] right-[42.68%] bottom-[57.63%] left-[45.97%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector9.svg"
        />
      </div>
      <Header propTextDecoration="unset" propTextDecoration1="unset" />
    </div>
  );
};

export default BookedTicket;
