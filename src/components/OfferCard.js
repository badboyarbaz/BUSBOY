const OfferCard = () => {
  return (
    <div
      className="self-stretch rounded-xl bg-white flex flex-col p-[30px] items-start justify-center gap-[20px] text-left text-base text-gray-200 font-poppins border-[2px] border-dashed border-royalblue-100"
      id="offers"
    >
      <div className="relative text-5xl font-medium text-royalblue-100">
        Offers
      </div>
      <div className="self-stretch flex flex-row items-start justify-between">
        <div className="flex flex-row items-center justify-center gap-[10px]">
          <img className="relative w-5 h-5" alt="" src="/vector6.svg" />
          <div className="relative font-medium">
            50% off up to ₹100 | Use code BOOKNOW
          </div>
        </div>
        <div className="flex flex-row items-center justify-center text-royalblue-100">
          <div className="relative font-medium">Apply</div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-between">
        <div className="flex flex-row items-center justify-center gap-[10px]">
          <img className="relative w-5 h-5" alt="" src="/vector6.svg" />
          <div className="relative font-medium">
            20% off | Use code FIRSTTIME
          </div>
        </div>
        <div className="flex flex-row items-center justify-center text-royalblue-100">
          <div className="relative font-medium">Apply</div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
