const ApplyCodeForm = () => {


  return (
    <div
      className="self-stretch rounded-md bg-white flex flex-col p-8 md:p-6 lg:p-4 items-start justify-center text-left text-xl md:text-lg lg:text-base text-gray-200 font-poppins border border-gray-400"
      id="offercode"
    >
      <div className="self-stretch flex flex-row items-center justify-center gap-5 md:gap-6 lg:gap-4">
        <div className="flex flex-row items-center justify-start gap-4 md:gap-3 lg:gap-2">
          <img className="w-6 h-6 md:w-7 md:h-7 lg:w-6 lg:h-6" alt="" src="/vector7.svg" />
          <div className="font-medium">Apply Code</div>
        </div>
        <input
          className="border-none font-medium text-sm bg-transparent flex-1 flex flex-col py-4 md:py-3 lg:py-2 px-3 md:px-5 lg:px-4 items-start justify-start border-b border-gray-400"
          type="text"
          placeholder="Enter Code"
        />
      </div>
    </div>
  );
};

export default ApplyCodeForm;
