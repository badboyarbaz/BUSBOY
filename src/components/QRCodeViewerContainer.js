const QRCodeViewerContainer = () => {
  return (
    <div className="w-[400px] h-[584px] flex flex-col items-center justify-center gap-[20px] text-right text-base text-gray-100 font-poppins">
      <img
        className="relative rounded-3xs w-[220px] h-[220px] object-cover"
        alt=""
        src="/image-15@2x.png"
      />
      <div className="relative font-medium">
        Scan the code to view in any device
      </div>
      <button
        className="cursor-pointer py-[18px] px-[25px] bg-white self-stretch rounded-3xs flex flex-row items-center justify-center border-[1px] border-solid border-royalblue-100"
        autoFocus
      >
        <div className="relative text-base font-medium font-poppins text-black text-right">
          Print ticket (English)
        </div>
      </button>
      <button
        className="cursor-pointer py-[18px] px-[25px] bg-white self-stretch rounded-3xs flex flex-row items-center justify-center border-[1px] border-solid border-royalblue-100"
        autoFocus
      >
        <div className="relative text-base font-medium font-poppins text-black text-right">
          Print ticket (Hindi)
        </div>
      </button>
      <button
        className="cursor-pointer [border:none] py-[18px] px-[25px] bg-royalblue-100 self-stretch rounded-3xs flex flex-row items-center justify-center"
        autoFocus
      >
        <div className="relative text-base font-medium font-poppins text-white text-right">
          Book another ticket
        </div>
      </button>
      <button
        className="cursor-pointer [border:none] py-[18px] px-[25px] bg-royalblue-100 self-stretch rounded-3xs flex flex-row items-center justify-center"
        autoFocus
      >
        <div className="relative text-base font-medium font-poppins text-white text-right">
          Download Ticket
        </div>
      </button>
    </div>
  );
};

export default QRCodeViewerContainer;
