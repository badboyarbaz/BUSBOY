const PickupAndDropCard = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[30px] text-left text-sm text-gray-300 font-poppins">
      <div className="box-border w-[252px] overflow-hidden shrink-0 flex flex-row py-4 px-[25px] items-center justify-start gap-[10px] border-b-[1px] border-solid border-gray-400">
        <div className="relative font-medium">Select Pickup Location</div>
        <img className="relative w-5 h-2.5" alt="" src="/vector8.svg" />
      </div>
      <div className="box-border w-[252px] overflow-hidden shrink-0 flex flex-row py-4 px-[25px] items-center justify-start gap-[10px] border-b-[1px] border-solid border-gray-400">
        <div className="relative font-medium">Select Drop Location</div>
        <img className="relative w-5 h-2.5" alt="" src="/vector8.svg" />
      </div>
      <div className="rounded-3xs bg-royalblue-100 w-[175px] flex flex-row py-[15px] px-[25px] box-border items-center justify-between text-white">
        <div className="relative font-medium">Continue</div>
      </div>
    </div>
  );
};

export default PickupAndDropCard;
