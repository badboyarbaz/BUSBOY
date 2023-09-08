import { useMemo } from "react";

const PaymentCard = ({
  paymentMethodIcon,
  paymentMethodDescription,
  paymentOptions,
  propDisplay,
  propWidth,
  setSelectedPaymentMethod,
  toggleModal,
}) => {
  const uPIPaymentStyle = useMemo(() => {
    return {
      display: propDisplay,
      width: propWidth,
    };
  }, [propDisplay, propWidth]);

    const handleClick = () => {
      setSelectedPaymentMethod(paymentMethodDescription);
      toggleModal();
    };

  return (
    <button onClick={handleClick} className="cursor-pointer [border:none] p-[25px] bg-white box-border w-[933.67px] flex flex-row items-center justify-between border-b-[1px] border-solid border-gray-400">
      <div className="flex flex-row items-center justify-start gap-[30px]">
        <img
          className="relative rounded-3xs w-10 h-10 object-cover"
          alt=""
          src={paymentMethodIcon}
        />
        <div className="flex flex-col items-start justify-start">
          <div
            className="relative text-base font-medium font-poppins text-gray-200 text-left"
            style={uPIPaymentStyle}
          >
            {paymentMethodDescription}
          </div>
          <div className="relative text-xs font-medium font-poppins text-gray-100 text-left">
            {paymentOptions}
          </div>
        </div>
      </div>
      <img className="relative w-[7.48px] h-[9.08px]" alt="" src="/3.svg" />
    </button>
  );
};

export default PaymentCard;
