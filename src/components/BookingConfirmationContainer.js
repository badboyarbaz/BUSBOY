const BookingConfirmationContainer = () => {
  return (
    <div className="rounded-3xs bg-royalblue-200 w-[937px] flex flex-col p-[30px] box-border items-start justify-start gap-[60px] text-left text-xl text-gray-200 font-poppins">
      <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
        <div className="relative font-medium">Booking Details</div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[30px]">
          <div className="self-stretch flex flex-row items-start justify-between relative">
            <div className="absolute my-0 mx-[!important] top-[0px] left-[0px] font-medium z-[0]">
              Humsafar Travels
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between text-base">
            <div className="w-[163px] h-[82px] flex flex-col items-start justify-start gap-[10px]">
              <div className="relative font-medium">Nov 16</div>
              <div className="relative">
                <p className="m-0">4:30 pm</p>
                <p className="m-0">CIDCO, Aurangabad</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start gap-[5px] text-xs text-gray-400">
              <div className="relative font-medium">8 hours</div>
              <img
                className="relative w-[305.33px] h-[5.33px]"
                alt=""
                src="/vector-11.svg"
              />
            </div>
            <div className="w-[152px] h-[106px] flex flex-col items-end justify-start gap-[10px]">
              <div className="relative font-medium">Nov 17</div>
              <div className="relative text-right">
                <p className="m-0">8:30 am</p>
                <p className="m-0">Dabuspet Highway</p>
                <p className="m-0">Road, Bangalore</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[40px]">
        <div className="self-stretch relative font-medium">
          Passenger 1 Details
        </div>
        <div className="self-stretch flex flex-row py-0 px-[3px] items-center justify-between text-base text-dimgray">
          <div className="relative font-medium text-gray-200">
            John Woodspear
          </div>
          <div className="relative font-medium">30 Yrs</div>
          <div className="relative font-medium">Male</div>
          <div className="relative font-medium">L27</div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
          <div className="self-stretch relative font-medium">
            Passenger 2 Details
          </div>
          <div className="self-stretch flex flex-row py-0 px-1 items-center justify-between text-base text-dimgray">
            <div className="relative font-medium text-gray-200">
              John Kennedy
            </div>
            <div className="relative font-medium">24 Yrs</div>
            <div className="relative font-medium">Male</div>
            <div className="relative font-medium">L28</div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
          <div className="self-stretch relative font-medium">
            Passenger 3 Details
          </div>
          <div className="self-stretch flex flex-row py-0 px-[3px] items-center justify-between text-base text-dimgray">
            <div className="relative font-medium text-gray-200">
              Sarah Saint
            </div>
            <div className="relative font-medium">26 Yrs</div>
            <div className="relative font-medium">Female</div>
            <div className="relative font-medium">L30</div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-between text-base">
        <div className="relative font-medium">E-Tickets will be sent to:</div>
        <div className="relative font-medium text-darkslategray">
          <p className="m-0">John Woodspear (Primary)</p>
          <p className="m-0">John Woodspear@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmationContainer;
