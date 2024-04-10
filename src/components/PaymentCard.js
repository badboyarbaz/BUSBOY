import { AiFillRightCircle } from "react-icons/ai";
const PaymentCard = ({
  paymentMethodIcon,
  paymentMethodDescription,
  paymentOptions,
  setSelectedPaymentMethod,
  toggleModal,
  isLastCard,
}) => {
  const handleClick = () => {
    setSelectedPaymentMethod(paymentMethodDescription);
    toggleModal();
  };

  const buttonClass = `w-full flex flex-row items-center justify-between px-6 py-4 ${
    isLastCard ? "" : "border-b border-gray-400"
  }`;

  return (
    // Main button container
    <button onClick={handleClick} className={buttonClass}>
      {/* Left-side container */}
      <div className="flex flex-row gap-5">
        {/* Payment method icon */}
        <img
          className="rounded w-10 h-10 object-cover"
          alt=""
          src={paymentMethodIcon}
        />
        {/* Payment method details */}
        <div className="flex flex-col items-start justify-start">
          {/* Payment method description */}
          <p className="flex text-base font-medium text-gray-200">
            {paymentMethodDescription}
          </p>

          {/* Payment options */}
          <p className="text-xs font-normal text-gray-100 text-start">
            {paymentOptions}
          </p>
        </div>
      </div>

      {/* Right-side arrow icon */}
      <AiFillRightCircle className="w-4 h-4 lg:w-6 lg:h-6" />
    </button>
  );
};

export default PaymentCard;
