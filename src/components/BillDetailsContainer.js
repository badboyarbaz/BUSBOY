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
  console.log(billDetails)
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
      <div className="flex flex-col w-full md:w-full bg-white p-4 gap-4 rounded-3xs border border-s border-gray-400 text-black">
        <div className="text-xl font-medium">Bill Details</div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row justify-between items-center">
            <span className="font-medium ">Base Ticket Fare</span>
            <span className="font-medium ">₹{billDetails.baseFare ? billDetails.baseFare.toFixed(2) : '0.00'}</span>
          </div>
          <div className="flex flex-row justify-between">
            <span className="font-medium">Total Travellers</span>
            <span className="font-medium">{billDetails.totalSeats}</span>
          </div>
          <div className="flex flex-row justify-between">
            <span className="font-medium">CGST & SGST</span>
            <span className="font-medium">₹{billDetails.taxAmount ? billDetails.taxAmount.toFixed(2) : "0.00"}</span>
          </div>
        </div>
        <div className="text-sm font-medium text-gray-500">After Applying discount & Other offers</div>
        <div className="flex flex-row justify-between text-darkslategray">
          <span className="font-semibold ">Total Charge</span>
          <span className="font-semibold">₹{billDetails.totalAmount.toFixed(2)}</span>
        </div>
      </div>
  );
};

export default BillDetailsContainer;
