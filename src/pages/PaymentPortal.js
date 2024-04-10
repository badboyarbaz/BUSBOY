import Footer from "../components/Footer";
import BookingConfirmationContainer from "../components/BookingConfirmationContainer";
import BillDetailsContainer from "../components/BillDetailsContainer";
import PaymentModeForm from "../components/PaymentModeForm";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import TermsAndCancellation from "../components/TermsAndCancellation";

const PaymentPortal = () => {
  const stripePromise = loadStripe(
    "pk_test_51Nk2OmSFsKpIJyxl3UNmPr3a3RdXUStn6KnXg6WShAtCvj2iUHL0K5Muj2KanUiqMIe25q7jSggXLrljyX6q14R300v0l81Akn",
  );
  const billDetails = useSelector((state) => state.bill.billDetails);

  return (
    <div className="flex flex-col min-h-screen bg-whitesmoke">
      <Header />
      <div className="flex text-xl m-auto font-medium py-2 lg:ml-12">
        <p className="text-royalblue-100">
          Pay <span className="text-tomato">₹{billDetails?.totalAmount}</span>{" "}
          to confirm booking
        </p>
      </div>
      <main className="flex flex-col lg:flex-row px-4 py-2 lg:px-10 gap-4">
        <div className="flex flex-col gap-2 w-full lg:w-2/3">
          <BookingConfirmationContainer />
        </div>
        <div className="flex flex-col gap-2 w-full lg:w-1/3">
          <BillDetailsContainer />
          <Elements stripe={stripePromise}>
            <PaymentModeForm />
          </Elements>
        </div>
      </main>
      <TermsAndCancellation />
      <Footer />
    </div>
  );
};

export default PaymentPortal;
