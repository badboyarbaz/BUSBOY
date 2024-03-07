const PickupAndDropCard = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-start gap-8 p-2  text-left text-sm text-gray-300 font-poppins">
      <div className="flex flex-col lg:flex-row py-3 px-6 items-center justify-start gap-2 border-b border-gray-400 w-full lg:w-auto">
        <div className="font-medium">Select Pickup Location</div>
        <img className="w-5 h-2.5" alt="" src="/vector8.svg" />
      </div>
      <div className="flex flex-col lg:flex-row py-3 px-6 items-center justify-start gap-2 border-b border-gray-400 w-full lg:w-auto">
        <div className="font-medium">Select Drop Location</div>
        <img className="w-5 h-2.5" alt="" src="/vector8.svg" />
      </div>
      <div className="rounded bg-royalblue-100 flex flex-row py-3 px-6  items-center justify-center text-center text-white w-full lg:w-auto">
        <div className="font-medium">Continue</div>
      </div>
    </div>
  );
};

export default PickupAndDropCard;
