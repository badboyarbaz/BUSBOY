const QRCodeViewerContainer = () => {
  return (
    <div className="flex flex-col bg-white items-center justify-center gap-5 text-right text-base text-gray-100 font-poppins px-4 py-2 w-full md:w-1/3 rounded-3xs border border-gray-400">
      {/* QR Code Image */}
      <img
        className="rounded-3xs w-56 h-56 object-cover"
        alt=""
        src="/image-15@2x.png"
      />

      {/* Scan the code text */}
      <div className="font-medium">
        Scan the code to view in any device
      </div>

      {/* Print Ticket (English) Button */}
      <button
        className="cursor-pointer py-4 px-6 bg-white w-full rounded-3xs border border-royalblue-100"
        autoFocus
      >
        <div className="text-base font-medium text-black">
          Print ticket (English)
        </div>
      </button>

      {/* Print Ticket (Hindi) Button */}
      <button
        className="cursor-pointer py-4 px-6 bg-white w-full rounded-3xs border border-royalblue-100"
        autoFocus
      >
        <div className="text-base font-medium text-black">
          Print ticket (Hindi)
        </div>
      </button>

      {/* Book Another Ticket Button */}
      <button
        className="cursor-pointer py-4 px-6 bg-royalblue-100 w-full rounded-3xs"
        autoFocus
      >
        <div className="text-base font-medium text-white">
          Book another ticket
        </div>
      </button>

      {/* Download Ticket Button */}
      <button
        className="cursor-pointer py-4 px-6 bg-royalblue-100 w-full rounded-3xs"
        autoFocus
      >
        <div className="text-base font-medium text-white">
          Download Ticket
        </div>
      </button>
    </div>
  );
};

export default QRCodeViewerContainer;
