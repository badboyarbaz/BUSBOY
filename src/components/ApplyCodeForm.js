const ApplyCodeForm = () => {
  return (
    <div
      className="bg-white flex flex-col p-8 md:p-6 lg:p-4 items-start justify-start rounded-lg border border-gray-400 w-full"
      id="offercode"
    >
      <div className="flex flex-row items-center justify-center gap-5 md:gap-6 lg:gap-4">
        <div className="flex flex-row items-center justify-start gap-1 lg:gap-3">
          <img className="w-4 h-4 lg:w-6 lg:h-6" alt="" src="/vector7.svg" />
          <p className="font-medium text-xs lg:text-sm">Apply Code</p>
          <input
            className="outline-none font-medium text-sm bg-transparent p-4 w-28 lg:w-auto border-b border-gray-400"
            type="text"
            placeholder="Enter Code"
          />
          <button className="font-medium text-white rounded-full px-4 py-2 bg-royalblue-100">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplyCodeForm;
