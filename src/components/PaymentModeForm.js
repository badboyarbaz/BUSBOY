import ApplyCodeForm from "./ApplyCodeForm";
import PaymentCard from "./PaymentCard";

const PaymentModeForm = () => {
  return (
    <div className="h-[1131px] flex flex-col items-start justify-start gap-[30px] text-left text-5xl text-royalblue-100 font-poppins">
      <div className="rounded-xl bg-white box-border w-[723px] flex flex-col p-[30px] items-start justify-center gap-[20px] border-[2px] border-dashed border-royalblue-100">
        <div className="relative font-medium">Offers</div>
        <div className="w-[353px] h-[68px] flex flex-col py-0 pr-0 pl-px box-border items-start justify-start gap-[20px] text-base text-gray-200">
          <div className="flex flex-row items-center justify-center gap-[10px]">
            <img className="relative w-5 h-5" alt="" src="/vector6.svg" />
            <div className="relative font-medium">
              50% off up to ₹100 | Use code BOOKNOW
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[10px]">
            <img className="relative w-5 h-5" alt="" src="/vector6.svg" />
            <div className="relative font-medium">
              20% off | Use code FIRSTTIME
            </div>
          </div>
        </div>
      </div>
      <ApplyCodeForm propAlignSelf="unset" propWidth="723px" />
      <div className="w-[736px] h-[686px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[30px] text-xl text-gray-200">
        <div className="w-[937px] flex flex-row py-2.5 px-[25px] box-border items-center justify-start">
          <div className="relative font-medium">All Payment Options</div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[30px]">
          <PaymentCard
            paymentMethodIcon="/rectangle-104@2x.png"
            paymentMethodDescription="UPI Payment"
            paymentOptions="Pay instantly with UPI Apps"
          />
          <PaymentCard
            paymentMethodIcon="/rectangle-1041@2x.png"
            paymentMethodDescription="Credit / Debit Card"
            paymentOptions="Visa, Mastercard, amex, Rupay and more"
            propDisplay="inline-block"
            propWidth="153px"
          />
          <PaymentCard
            paymentMethodIcon="/rectangle-1042@2x.png"
            paymentMethodDescription="Paylater"
            paymentOptions="LazyPay, Simpl, ZestMoney, ICICI PayLater, HDFC Flexipay and more"
            propDisplay="inline-block"
            propWidth="unset"
          />
          <PaymentCard
            paymentMethodIcon="/rectangle-1043@2x.png"
            paymentMethodDescription="Net Banking"
            paymentOptions="We Support all major banks"
            propDisplay="inline-block"
            propWidth="unset"
          />
          <PaymentCard
            paymentMethodIcon="/rectangle-1044@2x.png"
            paymentMethodDescription="Mobile Wallets"
            paymentOptions="Amazonpay, Mobikwik, Payzapp, PayPal"
            propDisplay="inline-block"
            propWidth="unset"
          />
        </div>
      </div>
      <div className="rounded-3xs w-[723px] flex flex-row py-[15px] px-0 box-border items-center justify-between text-base text-tomato">
        <div className="relative font-semibold">Cancel</div>
      </div>
    </div>
  );
};

export default PaymentModeForm;
