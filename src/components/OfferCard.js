const OfferCard = () => {
  return (
    <div
      className="flex flex-col p-4 bg-white rounded-xl border border-dashed border-royalblue-100 gap-4 w-full"
      id="offers"
    >
      <p className=" text-2xl font-medium text-royalblue-100">Offers</p>

      {/* 50% off coupon section */}
      <div className="flex flex-row items-start justify-between">
        <div className="flex flex-row items-center justify-center gap-4 md:gap-3 lg:gap-2">
          <img
            className="w-5 h-5 md:w-4 md:h-4 lg:w-3 lg:h-3"
            alt=""
            src="/vector6.svg"
          />
          <p className="font-medium">50% off up to ₹100 | Use code BOOKNOW</p>
        </div>
        <div className="flex flex-row items-center justify-center ">
          <button className="font-medium text-royalblue-100">Apply</button>
        </div>
      </div>

      {/* 20% off coupon section */}
      <div className="self-stretch flex flex-row items-start justify-between">
        <div className="flex flex-row items-center justify-center gap-4 md:gap-3 lg:gap-2">
          <img
            className="w-5 h-5 md:w-4 md:h-4 lg:w-3 lg:h-3"
            alt=""
            src="/vector6.svg"
          />
          <div className="font-medium">20% off | Use code FIRSTTIME</div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <button className="font-medium text-royalblue-100">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
