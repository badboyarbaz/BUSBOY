import Footer from "../components/Footer";
import BookingConfirmationContainer from "../components/BookingConfirmationContainer";
import BillDetailsContainer from "../components/BillDetailsContainer";
import PaymentModeForm from "../components/PaymentModeForm";
import Header from "../components/Header";

const PaymentPortal = () => {
  return (
    <div className="relative bg-white w-full h-[1913px] overflow-hidden text-left text-sm text-royalblue-100 font-poppins">
        < Header />
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
        <Footer dimensionCode="/vector4.svg" socialTop="1626px" />
    </div>
  );
};

export default PaymentPortal;
