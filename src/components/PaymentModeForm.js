import React, { useState } from "react";
import PaymentCard from "./PaymentCard";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useDispatch } from "react-redux";
import { paymentSuccess, paymentFailure } from "../redux/paymentAction";
import { setTicketDetails } from "../redux/ticketAction";

const PaymentModeForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const selectedBus = useSelector((state) => state.bus.selectedBus);
  const allSeats = useSelector((state) => state.seats.seats);
  const selectedSeats = allSeats.filter((seat) => seat.selected);
  const selectedCity = useSelector((state) => state.city.selectedCity);
  const passengerDetails = useSelector(
    (state) => state.form.passengerDetails.passengers,
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
    const apiUrl =
      process.env.NODE_ENV === "production"
        ? process.env.REACT_APP_API_URL_PROD
        : process.env.REACT_APP_API_URL_DEV;
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
      navigate("/booked-ticket");
    }
  };

  return (
    <div className="flex flex-col w-full items-start gap-2">
      {/* Payment Options Container */}
      <div className="flex flex-col items-start bg-white w-full rounded-xl border border-gray-400">
        {/* Payment Options Header */}
        <div className="flex flex-row py-2 px-4 items-center justify-start w-full">
          <h1 className="font-medium">All Payment Options</h1>
        </div>

        {/* Payment Cards */}
        <div className="flex flex-col gap-2 w-full rounded-xl">
          <PaymentCard
            toggleModal={toggleModal}
            paymentMethodIcon="/upi.png"
            setSelectedPaymentMethod={setSelectedPaymentMethod}
            paymentMethodDescription="UPI Payment"
            paymentOptions="Pay instantly with UPI Apps"
            className=""
          />
          <PaymentCard
            toggleModal={toggleModal}
            paymentMethodIcon="/credit_debit_card.png"
            setSelectedPaymentMethod={setSelectedPaymentMethod}
            paymentMethodDescription="Credit / Debit Card"
            paymentOptions="Visa, Mastercard, amex, Rupay and more"
            propDisplay="inline-block"
          />
          <PaymentCard
            toggleModal={toggleModal}
            paymentMethodIcon="/paylater.png"
            setSelectedPaymentMethod={setSelectedPaymentMethod}
            paymentMethodDescription="Paylater"
            paymentOptions="LazyPay, Simpl, ZestMoney and more"
            propDisplay="inline-block"
          />
          <PaymentCard
            toggleModal={toggleModal}
            paymentMethodIcon="/net_banking.png"
            setSelectedPaymentMethod={setSelectedPaymentMethod}
            paymentMethodDescription="Net Banking"
            paymentOptions="We Support all major banks"
            propDisplay="inline-block"
          />
          <PaymentCard
            toggleModal={toggleModal}
            paymentMethodIcon="/mobile_wallets.png"
            setSelectedPaymentMethod={setSelectedPaymentMethod}
            paymentMethodDescription="Mobile Wallets"
            paymentOptions="Amazonpay, Mobikwik, Payzapp, PayPal"
            propDisplay="inline-block"
            isLastCard={true}
          />
        </div>
      </div>

      {/* Cancel Button */}
      <button className="rounded-lg flex py-4 justify-center hover:bg-tomato hover:text-white border border-tomato text-tomato w-full ">
        Cancel
      </button>

      {/* Stripe Form (Conditional Rendering) */}
      {selectedPaymentMethod === "Credit / Debit Card" && isModalOpen && (
        <div className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-black bg-opacity-70">
          <span className="text-sm text-tomato uppercase bg-white px-6 py-4 rounded-xl">
            use 424242424242424242 as the card number <br />
            and any future month/year as the expiration <br />
            random number for cvv/zip <br />
          </span>
          <div className="relative flex flex-col bg-white p-4 m-4 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3">
            {/* Close Button */}
            <button
              className="flex justify-end hover:text-tomato"
              onClick={toggleModal}
            >
              &times; Close
            </button>

            {/* Stripe Form */}
            <form className=" flex flex-col space-y-4">
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
