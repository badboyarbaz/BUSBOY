import Footer from "../components/Footer";
import BookingConfirmationContainer from "../components/BookingConfirmationContainer";
import BillDetailsContainer from "../components/BillDetailsContainer";
import PaymentModeForm from "../components/PaymentModeForm";
import Header from "../components/Header";
import { useSelector } from "react-redux";
const PaymentPortal = () => {
  const billDetails = useSelector((state) => state.bill.billDetails);

  return (
    <div className="flex flex-col min-h-screen bg-white text-royalblue-100 font-poppins">
      <Header />
      <div className="relative top-[130px] text-13xl font-semibold p-[20px] ml-20">
        <span>{`Pay `}</span>
        <span className="text-tomato">₹{billDetails?.totalAmount}</span>
        <span> to confirm booking</span>
      </div>
      <main className="relative mt-[50px] flex-grow flex flex-row p-[100px] gap-[60px]">
        <div className="flex flex-col gap-[60px]">
          <BookingConfirmationContainer />
          <BillDetailsContainer />
        </div>
        <PaymentModeForm />
      </main>
     
      <div className="flex flex-row p-[100px] gap-[30px] text-gray-100">
        <div className="font-medium">Cancellation Policy</div>
        <div className="font-medium">{`Terms & Conditions`}</div>
        <div className="font-medium">Travel Insurance</div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentPortal;
