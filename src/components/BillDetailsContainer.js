const BillDetailsContainer = () => {
  return (
    <div className="self-stretch rounded-3xs bg-white flex flex-col p-[30px] items-start justify-center gap-[30px] text-left text-xl text-gray-200 font-poppins border-[1px] border-solid border-gray-400">
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
        <div className="relative font-medium inline-block w-[643px]">
          Bill details
        </div>
        <div className="self-stretch h-[74px] flex flex-col items-start justify-between text-xs text-gray-100">
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="relative font-medium">Base Ticket Fare</div>
            <div className="relative font-medium">₹1000.00</div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="relative font-medium">Total Travellers</div>
            <div className="relative font-medium">3</div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="relative font-medium">{`CGST & SGST`}</div>
            <div className="relative font-medium">₹500.00</div>
          </div>
        </div>
      </div>
      <div className="relative text-xs font-medium text-gray-100">{`After Applying discount & Other offers`}</div>
      <div className="self-stretch flex flex-row items-center justify-between text-darkslategray">
        <div className="relative font-medium">Total Charge</div>
        <div className="relative font-medium">₹3500.00</div>
      </div>
    </div>
  );
};

export default BillDetailsContainer;
