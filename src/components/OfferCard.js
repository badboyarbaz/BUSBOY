const OfferCard = () => {
  return (
    <div
      className="self-stretch rounded-xl bg-white flex flex-col p-8 md:p-6 lg:p-4 items-start justify-center gap-6 md:gap-4 lg:gap-2 text-left text-base md:text-sm lg:text-xs text-gray-200 font-poppins border-2 border-dashed border-royalblue-100"
      id="offers"
    >
      <div className=" text-5xl font-medium text-royalblue-100">
        Offers
      </div>
      <div className="self-stretch flex flex-row items-start justify-between text-lg">
        <div className="flex flex-row items-center justify-center gap-4 md:gap-3 lg:gap-2">
          <img className="w-5 h-5 md:w-4 md:h-4 lg:w-3 lg:h-3" alt="" src="/vector6.svg" />
          <div className="font-medium">
            50% off up to ₹100 | Use code BOOKNOW
          </div>
        </div>
        <div className="flex flex-row items-center justify-center text-royalblue-100">
          <div className="font-medium">Apply</div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-between text-lg">
        <div className="flex flex-row items-center justify-center gap-4 md:gap-3 lg:gap-2">
          <img className="w-5 h-5 md:w-4 md:h-4 lg:w-3 lg:h-3" alt="" src="/vector6.svg" />
          <div className="font-medium">
            20% off | Use code FIRSTTIME
          </div>
        </div>
        <div className="flex flex-row items-center justify-center text-royalblue-100">
          <div className="font-medium">Apply</div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
