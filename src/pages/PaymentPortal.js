import Footer from "../components/Footer";
import BookingConfirmationContainer from "../components/BookingConfirmationContainer";
import BillDetailsContainer from "../components/BillDetailsContainer";
import PaymentModeForm from "../components/PaymentModeForm";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import TermsAndCancellation from "../components/TermsAndCancellation";


const PaymentPortal = () => {
  const stripePromise = loadStripe('pk_test_51Nk2OmSFsKpIJyxl3UNmPr3a3RdXUStn6KnXg6WShAtCvj2iUHL0K5Muj2KanUiqMIe25q7jSggXLrljyX6q14R300v0l81Akn');
  const billDetails = useSelector((state) => state.bill.billDetails);

  return (
    <div className="flex flex-col min-h-screen bg-whitesmoke text-royalblue-100 font-poppins">
      <Header />
      <div className="flex text-2xl md:text-4xl lg:text-5xl font-semibold p-4 md:ml-5 text-center justify-start">
        <span>Pay </span>
        <span className="text-tomato">₹{billDetails?.totalAmount}</span>
        <span> to confirm booking</span>
      </div>
      <main className="flex-grow flex flex-col md:flex-row p-4 md:p-8 gap-4 md:gap-8">
        <div className="flex flex-col gap-4 md:gap-8 w-full md:w-1/2">
          <BookingConfirmationContainer />
          <BillDetailsContainer />
        </div>
        <div className="flex flex-col gap-4 md:gap-8 w-full md:w-1/2">
        <Elements stripe={stripePromise}>
          <PaymentModeForm />
        </Elements>
        </div>
      </main>
     < TermsAndCancellation />
      <Footer />
    </div>
  );
};


export default PaymentPortal;
