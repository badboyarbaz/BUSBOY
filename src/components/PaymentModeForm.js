import React, { useState } from "react";
import ApplyCodeForm from "./ApplyCodeForm";
import PaymentCard from "./PaymentCard";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useDispatch } from "react-redux";
import { paymentSuccess, paymentFailure } from "../redux/paymentAction";
import { setTicketDetails } from "../redux/ticketAction";
import OfferCard from "./OfferCard";

const PaymentModeForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const selectedBus = useSelector((state) => state.bus.selectedBus);
  const allSeats = useSelector((state) => state.seats.seats);
  const selectedSeats = allSeats.filter((seat) => seat.selected);
  const selectedCity = useSelector((state) => state.city.selectedCity);
  const passengerDetails = useSelector(
    (state) => state.form.passengerDetails.passengers
  );
  const billDetails = useSelector((state) => state.bill.billDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);

  const generateID = () => {
    return Math.floor(Math.random() * 1e10);
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setPaymentStatus(null);
  };

  const ticketId = generateID();
  const ticketDetails = {
    ticketId,
    selectedBus,
    selectedSeats,
    selectedCity,
    passengerDetails,
    billDetails,
  };

  
  const fetchClientSecret = async () => {
    const apiUrl = process.env.NODE_ENV === "production" ? process.env.REACT_APP_API_URL_PROD : process.env.REACT_APP_API_URL_DEV;
    try {
      const response = await axios.post(`${apiUrl}/api/payments`, {
        amount: billDetails.totalAmount * 100,
      });
      console.log("Backend response:", response.data);
      return response.data.clientSecret;
    } catch (error) {
      console.error("Error fetching client secret:", error);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const clientSecret = await fetchClientSecret();

    const paymentMethodReq = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (paymentMethodReq.error) {
      console.log(paymentMethodReq.error);
      return;
    }

    const confirmPaymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: paymentMethodReq.paymentMethod.id,
    });

    if (confirmPaymentResult.error) {
      console.log(confirmPaymentResult.error);
      setPaymentStatus("Payment Failed!");
      dispatch(paymentFailure(confirmPaymentResult.error));
    } else {
      if (confirmPaymentResult.paymentIntent.status === "succeeded") {
        setPaymentStatus("Payment Successful!");
        console.log("Payment successful!");
        const paymentDetails = {
          paymentIntentId: confirmPaymentResult.paymentIntent.id,
          amount: confirmPaymentResult.paymentIntent.amount,
          paymentMethod: paymentMethodReq.paymentMethod.type,
        };
        dispatch(paymentSuccess(paymentDetails));
      }
      dispatch(setTicketDetails(ticketDetails));
      navigate('/booked-ticket');
    }
  };

return (
  <div className="flex flex-col items-start gap-8 text-5xl text-royalblue-100 font-poppins w-full">
    {/* Offer Card */}
    <OfferCard />

    {/* Apply Code Form */}
    <ApplyCodeForm />

    {/* Payment Options Container */}
    <div className="flex flex-col items-start gap-8 bg-white text-xl text-gray-200 w-full rounded-3xs border border-gray-400">
      {/* Payment Options Header */}
      <div className="flex flex-row py-2 px-4 items-center justify-start w-full">
        <div className="font-medium">All Payment Options</div>
      </div>

      {/* Payment Cards */}
      <div className="flex flex-col items-start gap-8 w-full">
        <PaymentCard
            toggleModal={toggleModal}
            paymentMethodIcon="/rectangle-104@2x.png"
            setSelectedPaymentMethod={setSelectedPaymentMethod}
            paymentMethodDescription="UPI Payment"
            paymentOptions="Pay instantly with UPI Apps"
          />
          <PaymentCard
            toggleModal={toggleModal}
            paymentMethodIcon="/rectangle-1041@2x.png"
            setSelectedPaymentMethod={setSelectedPaymentMethod}
            paymentMethodDescription="Credit / Debit Card"
            paymentOptions="Visa, Mastercard, amex, Rupay and more"
            propDisplay="inline-block"
            propWidth="153px"
          />
          <PaymentCard
            toggleModal={toggleModal}
            paymentMethodIcon="/rectangle-1042@2x.png"
            setSelectedPaymentMethod={setSelectedPaymentMethod}
            paymentMethodDescription="Paylater"
            paymentOptions="LazyPay, Simpl, ZestMoney, ICICI PayLater, HDFC Flexipay and more"
            propDisplay="inline-block"
            propWidth="unset"
          />
          <PaymentCard
            toggleModal={toggleModal}
            paymentMethodIcon="/rectangle-1043@2x.png"
            setSelectedPaymentMethod={setSelectedPaymentMethod}
            paymentMethodDescription="Net Banking"
            paymentOptions="We Support all major banks"
            propDisplay="inline-block"
            propWidth="unset"
          />
          <PaymentCard
            toggleModal={toggleModal}
            paymentMethodIcon="/rectangle-1044@2x.png"
            setSelectedPaymentMethod={setSelectedPaymentMethod}
            paymentMethodDescription="Mobile Wallets"
            paymentOptions="Amazonpay, Mobikwik, Payzapp, PayPal"
            propDisplay="inline-block"
            propWidth="unset"
          />
      </div>
    </div>

    {/* Cancel Button */}
    <div className="rounded flex flex-row py-4 px-0 items-center justify-center text-base border border-tomato rounded-3xs text-tomato w-full">
      <div className="font-semibold">Cancel</div>
    </div>

    {/* Stripe Form (Conditional Rendering) */}
    {selectedPaymentMethod === "Credit / Debit Card" && isModalOpen && (
      <div className="fixed inset-0 flex flex-col items-center justify-center z-50">
        <span className="text-sm text-tomato bg-white">
            use 424242424242424242 as the card number <br/>
            and any future month/year as the expiration <br/>
            random number for cvv/zip <br/>
          </span>
        <div className="bg-white p-4 m-4 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3">
          {/* Close Button */}
          <span
            className="relative top-0 inset-x-3/4 text-base cursor-pointer"
            onClick={toggleModal}
          >
            &times; Close
          </span>

          {/* Stripe Form */}
          <form className="space-y-4">
            <div className="flex flex-col">
              <label className="text-lg font-medium p-2">Card Details</label>
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "20px",
                      color: "#4A5568",
                    },
                  },
                }}
                className="p-4 border rounded"
              />
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-blue-500 text-white p-2 rounded"
              disabled={!stripe}
            >
              Pay
            </button>
            {paymentStatus && (
              <div className="text-center text-lg">{paymentStatus}</div>
            )}
          </form>
        </div>
      </div>
    )}
  </div>
);
};

export default PaymentModeForm;
