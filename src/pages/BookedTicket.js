import TicketDetailsForm from "../components/TicketDetailsForm";
import QRCodeViewerContainer from "../components/QRCodeViewerContainer";
import Header from "../components/Header";

const BookedTicket = () => {
  return (
    <div className="relative bg-white w-full h-[1490px] overflow-hidden text-left text-sm text-gray-100 font-poppins">
      <footer className="absolute top-[1203px] left-[0px] bg-royalblue-100 w-[1920px] h-[287px] flex flex-col p-[100px] box-border items-start justify-start gap-[60px] text-left text-5xl text-white font-poppins">
        <div className="my-0 mx-[!important] absolute top-[208px] left-[1519px] w-[241px] flex flex-row items-center justify-between z-[0]">
          <img
            className="relative w-[27.5px] h-[32.5px]"
            alt=""
            src="/vector.svg"
          />
          <img
            className="relative w-[30px] h-[30px]"
            alt=""
            src="/vector1.svg"
          />
          <img
            className="relative w-[32.5px] h-[32.5px]"
            alt=""
            src="/vector2.svg"
          />
        </div>
        <a className="[text-decoration:none] absolute my-0 mx-[!important] top-[74px] left-[100px] font-semibold inline-block z-[1] text-[inherit]">
          <span>BUS</span>
          <span className="text-gray-200">BOY</span>
        </a>
        <div className="my-0 mx-[!important] absolute top-[65px] left-[573px] w-[457px] flex flex-col items-start justify-start z-[2]">
          <div className="relative font-semibold z-[0]">
            Planning your next trip?
          </div>
          <div className="relative text-sm font-medium z-[1]">{`Subscribe to our newsletter. Get the latest travel trends & deals!`}</div>
          <input
            className="[border:none] font-medium font-poppins text-sm bg-[transparent] absolute my-0 mx-[!important] top-[2px] left-[610px] text-white text-left flex items-center w-[568px] h-[57px] shrink-0 z-[2]"
            type="email"
            placeholder="Enter Email ID"
            required
            autoFocus
          />
          <img
            className="absolute my-0 mx-[!important] h-[52.63%] w-[6.56%] top-[28.07%] right-[-163.05%] bottom-[19.3%] left-[256.48%] max-w-full overflow-hidden max-h-full z-[3]"
            alt=""
            src="/vector4.svg"
          />
        </div>
        <div className="my-0 mx-[!important] absolute top-[223px] left-[99px] w-[829px] flex flex-row items-start justify-start z-[3] text-base">
          <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block w-[132px] h-[30px] shrink-0">
            About us
          </a>
          <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block w-[132px] h-[30px] shrink-0">
            Mobile
          </a>
          <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block w-[132px] h-[30px] shrink-0">
            Privacy
          </a>
          <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block w-[133px] h-[30px] shrink-0">
            Terms of use
          </a>
          <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block w-[132px] h-[30px] shrink-0">
            Career
          </a>
          <a className="[text-decoration:none] relative font-medium text-[inherit] hover:[text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
            Customer Service
          </a>
        </div>
      </footer>
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
