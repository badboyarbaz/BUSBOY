import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { updateBillDetails } from "../redux/billActions";
import { calculateFareDetails } from "../redux/utils";
import { getSelectedSeats } from "../redux/selectors";

const BillDetailsContainer = () => {
  const dispatch = useDispatch();
  const selectedSeats = useSelector(getSelectedSeats);
  const billDetails = useSelector((state) => state.bill.billDetails);
  console.log(billDetails);
  const [prevFareDetails, setPrevFareDetails] = useState(null);

  useEffect(() => {
    console.log("Selected Seats in useEffect: ", selectedSeats);
    if (Array.isArray(selectedSeats)) {
      const fareDetails = calculateFareDetails(selectedSeats);
      console.log("Dispatching fare details:", billDetails);
      if (JSON.stringify(fareDetails) !== JSON.stringify(prevFareDetails)) {
        dispatch(updateBillDetails(fareDetails));
        setPrevFareDetails(fareDetails);
      }
    }
  }, [selectedSeats, dispatch, prevFareDetails]);

  if (!billDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col w-full md:w-full bg-white p-4 gap-4 rounded-xl border border-s border-gray-400 text-black">
      <h1 className="text-xl font-medium">Bill Details</h1>
      <div className="flex flex-col gap-3">
        <div className="flex flex-row justify-between items-center">
          <p className="font-medium ">Base Ticket Fare</p>
          <span className="font-normal ">
            ₹{billDetails.baseFare ? billDetails.baseFare.toFixed(2) : "0.00"}
          </span>
        </div>
        <div className="flex flex-row justify-between">
          <p className="font-medium">Total Travellers</p>
          <span className="font-normal">{billDetails.totalSeats}</span>
        </div>
        <div className="flex flex-row justify-between">
          <p className="font-medium">CGST & SGST</p>
          <span className="font-normal">
            ₹{billDetails.taxAmount ? billDetails.taxAmount.toFixed(2) : "0.00"}
          </span>
        </div>
      </div>
      <hr className="border-t border-dotted border-royalblue-100 my-4" />
      <p className="text-xs text-gray-500">
        After Applying discount & Other offers
      </p>
      <div className="flex flex-row justify-between text-darkslategray">
        <p className="font-semibold ">Total Charge</p>
        <span className="font-semibold">
          ₹{billDetails.totalAmount.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default BillDetailsContainer;
