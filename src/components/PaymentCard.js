const PaymentCard = ({
  paymentMethodIcon,
  paymentMethodDescription,
  paymentOptions,
  setSelectedPaymentMethod,
  toggleModal,
}) => {

    const handleClick = () => {
      setSelectedPaymentMethod(paymentMethodDescription);
      toggleModal();
    };

    return (
      // Main button container
      <button 
        onClick={handleClick} 
        className="cursor-pointer border-0 p-6 bg-white box-border w-full md:w-full flex flex-row items-center justify-between border-b border-gray-400"
      >
        {/* Left-side container */}
        <div className="flex flex-row items-center justify-start gap-8">
          {/* Payment method icon */}
          <img
            className="rounded w-10 h-10 object-cover"
            alt=""
            src={paymentMethodIcon}
          />
          {/* Payment method details */}
          <div className="flex flex-col items-start justify-start">
            {/* Payment method description */}
            <div className="flex text-base font-medium text-gray-200">
              {paymentMethodDescription}
            </div>
            {/* Payment options */}
            <div className="text-xs font-medium text-gray-100">
              {paymentOptions}
            </div>
          </div>
        </div>
        {/* Right-side arrow icon */}
        <img className="w-2 h-2 md:w-4 md:h-4" alt="" src="/3.svg" />
      </button>
    );
};

export default PaymentCard;
