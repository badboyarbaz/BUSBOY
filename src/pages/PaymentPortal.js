import Footer from "../components/Footer";
import BookingConfirmationContainer from "../components/BookingConfirmationContainer";
import BillDetailsContainer from "../components/BillDetailsContainer";
import PaymentModeForm from "../components/PaymentModeForm";

const PaymentPortal = () => {
  return (
    <div className="relative bg-white w-full h-[1913px] overflow-hidden text-left text-sm text-royalblue-100 font-poppins">
      <Footer dimensionCode="/vector4.svg" socialTop="1626px" />
      <div className="absolute top-[1515px] left-[127px] flex flex-row items-start justify-start gap-[30px] text-gray-100">
        <div className="relative capitalize font-medium">
          Cancellation Policy
        </div>
        <div className="relative capitalize font-medium">{`Terms & Conditions`}</div>
        <div className="relative capitalize font-medium">Travel Insurance</div>
      </div>
      <div className="absolute top-[254px] left-[100px] overflow-hidden flex flex-row items-start justify-start gap-[60px]">
        <div className="overflow-hidden flex flex-col items-start justify-start gap-[60px]">
          <BookingConfirmationContainer />
          <BillDetailsContainer />
        </div>
        <PaymentModeForm />
      </div>
      <div className="absolute top-[161px] left-[100px] text-13xl font-semibold">
        <span>{`Pay `}</span>
        <span className="text-tomato">₹6500</span>
        <span> to confirm booking</span>
      </div>
      <div className="absolute top-[0px] left-[0px] bg-white box-border w-[1920px] flex flex-row py-10 px-[100px] items-center justify-between text-5xl border-[1px] border-solid border-gray-400">
        <a className="[text-decoration:none] relative font-semibold text-[inherit]">
          <span>BUS</span>
          <span className="text-gray-200">BOY</span>
        </a>
        <div className="flex flex-row items-start justify-start gap-[60px] text-sm text-darkslategray">
          <div className="relative font-medium">My Booking</div>
          <a className="[text-decoration:none] relative font-medium text-royalblue-100">
            Login / Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentPortal;
