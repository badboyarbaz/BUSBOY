import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { updateBillDetails } from "../redux/billActions";
import { calculateFareDetails } from "../redux/utils";
import { useMemo } from "react";
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
    <div className="relative rounded-3xs bg-white flex flex-col p-[30px] items-start justify-center gap-[30px] text-left text-xl text-gray-200 font-poppins border-[1px] border-solid border-gray-400 flex-1 self-stretch">
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
        <div className="relative font-medium inline-block w-[643px]">
          Bill details
        </div>
        <div className="self-stretch h-[74px] flex flex-col items-start justify-between text-xs text-gray-100">
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="relative font-medium">Base Ticket Fare</div>
            <div className="relative font-medium">₹{billDetails.baseFare ? billDetails.baseFare.toFixed(2) : '0.00'}</div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="relative font-medium">Total Travellers</div>
            <div className="relative font-medium">{billDetails.totalSeats}</div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="relative font-medium">{`CGST & SGST`}</div>
            <div className="relative font-medium">₹{billDetails.taxAmount ? billDetails.taxAmount.toFixed(2) : "0.00"}</div>
          </div>
        </div>
      </div>
      <div className="relative text-xs font-medium text-gray-100">{`After Applying discount & Other offers`}</div>
      <div className="self-stretch flex flex-row items-center justify-between text-darkslategray">
        <div className="relative font-medium">Total Charge</div>
        <div className="relative font-medium">₹{billDetails.totalAmount.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default BillDetailsContainer;
