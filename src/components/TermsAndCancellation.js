const TermsAndCancellation = () => {
  return (
    <div
      className="flex flex-row items-start justify-start gap-8 text-sm text-gray-100"
      id="privacycard"
    >
      <a href="#" className="relative capitalize font-medium">
        Cancellation Policy
      </a>
      <a
        href="#"
        className="relative capitalize font-medium"
      >{`Terms & Conditions`}</a>
      <a href="#" className="relative capitalize font-medium">
        Travel Insurance
      </a>
    </div>
  );
};

export default TermsAndCancellation;
