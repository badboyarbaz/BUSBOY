import PassengerDetailsForm from "../components/PassengerDetailsForm";
import OfferCard from "../components/OfferCard";
import ApplyCodeForm from "../components/ApplyCodeForm";
import SectionSeatSelectionCard from "../components/SectionSeatSelectionCard";
import PickupAndDropCard from "../components/PickupAndDropCard";
import Header from "../components/Header";

const ReviewBookingTravellerDet = () => {
  return (
    <div className="relative bg-white w-full h-[2164px] overflow-hidden text-left text-xl text-gray-200 font-poppins">
      <footer className="absolute top-[1877px] left-[0px] bg-royalblue-100 w-[1920px] h-[287px] flex flex-col p-[100px] box-border items-start justify-start gap-[60px] text-left text-5xl text-white font-poppins">
        <div className="my-0 mx-[!important] absolute top-[208px] left-[1519px] w-[241px] flex flex-row items-center justify-between z-[0]">
          <img
            className="relative w-[27.5px] h-[32.5px]"
            alt=""
            src="/vector.svg"
          />
          <img
            className="relative w-[30px] h-[30px]"
            alt=""
            src="/vector1.svg"
          />
          <img
            className="relative w-[32.5px] h-[32.5px]"
            alt=""
            src="/vector2.svg"
          />
        </div>
        <a className="[text-decoration:none] absolute my-0 mx-[!important] top-[74px] left-[100px] font-semibold inline-block z-[1] text-[inherit]">
          <span>BUS</span>
          <span className="text-gray-200">BOY</span>
        </a>
        <div className="my-0 mx-[!important] absolute top-[65px] left-[573px] w-[457px] flex flex-col items-start justify-start z-[2]">
          <div className="relative font-semibold z-[0]">
            Planning your next trip?
          </div>
          <div className="relative text-sm font-medium z-[1]">{`Subscribe to our newsletter. Get the latest travel trends & deals!`}</div>
          <input
            className="[border:none] font-medium font-poppins text-sm bg-[transparent] absolute my-0 mx-[!important] top-[2px] left-[610px] text-white text-left flex items-center w-[568px] h-[57px] shrink-0 z-[2]"
            type="email"
            placeholder="Enter Email ID"
            required
            autoFocus
          />
          <img
            className="absolute my-0 mx-[!important] h-[52.63%] w-[6.56%] top-[28.07%] right-[-163.05%] bottom-[19.3%] left-[256.48%] max-w-full overflow-hidden max-h-full z-[3]"
            alt=""
            src="/vector4.svg"
          />
        </div>
        <div className="my-0 mx-[!important] absolute top-[223px] left-[99px] w-[829px] flex flex-row items-start justify-start z-[3] text-base">
          <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block w-[132px] h-[30px] shrink-0">
            About us
          </a>
          <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block w-[132px] h-[30px] shrink-0">
            Mobile
          </a>
          <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block w-[132px] h-[30px] shrink-0">
            Privacy
          </a>
          <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block w-[133px] h-[30px] shrink-0">
            Terms of use
          </a>
          <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block w-[132px] h-[30px] shrink-0">
            Career
          </a>
          <a className="[text-decoration:none] relative font-medium text-[inherit] hover:[text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
            Customer Service
          </a>
        </div>
      </footer>
      <div className="absolute top-[146px] left-[100px] w-[1720px] flex flex-row items-start justify-between">
        <section className="my-0 mx-[!important] absolute top-[6px] left-[942px] h-[1478px] flex flex-col items-start justify-start gap-[30px] z-[0] text-left text-xl text-gray-200 font-poppins">
          <PassengerDetailsForm />
          <div className="rounded-3xs bg-white box-border w-[778px] flex flex-col p-[50px] items-start justify-start gap-[30px] border-[1px] border-solid border-gray-400">
            <div className="self-stretch flex flex-row py-2.5 px-0 items-center justify-start relative gap-[622px]">
              <h1 className="m-0 relative text-[inherit] font-medium font-inherit z-[0]">
                Contact Details
              </h1>
              <h3 className="my-0 mx-[!important] absolute top-[16px] left-[243px] text-xs font-medium font-inherit text-gray-400 z-[1]">
                Your ticket info will be sent here
              </h3>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[30px]">
              <input
                className="[border:none] font-medium font-poppins text-sm bg-[transparent] flex-1 flex flex-row items-start justify-start"
                type="text"
                placeholder="Mobile Number"
                required
              />
              <input
                className="[border:none] font-medium font-poppins text-sm bg-[transparent] flex-1 flex flex-row items-start justify-start"
                type="email"
                placeholder="Email ID"
                required
              />
            </div>
          </div>
          <OfferCard />
          <ApplyCodeForm />
          <div
            className="self-stretch rounded-3xs bg-white flex flex-col p-[30px] items-start justify-center gap-[30px] border-[1px] border-solid border-gray-400"
            id="billdetails"
          >
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <div className="relative font-medium inline-block w-[643px]">
                Bill details
              </div>
              <div className="self-stretch h-[74px] flex flex-col items-start justify-between text-xs text-gray-100">
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="relative font-medium">Base Ticket Fare</div>
                  <div className="relative font-medium">₹2000.00</div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="relative font-medium">Total Travellers</div>
                  <div className="relative font-medium">3</div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="relative font-medium">{`CGST & SGST`}</div>
                  <div className="relative font-medium">₹500.00</div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between text-darkslategray">
              <div className="relative font-medium">Total Charge</div>
              <div className="relative font-medium">₹6500.00</div>
            </div>
          </div>
          <div className="flex flex-col py-2.5 px-0 items-center justify-center gap-[20px] text-xs text-gray-100">
            <div className="relative font-medium">
              Discounts, offers and price concessions will be applied later
              during payment
            </div>
            <button
              className="cursor-pointer [border:none] py-[15px] px-0 bg-royalblue-100 rounded-3xs w-[703px] flex flex-row box-border items-center justify-between"
              autoFocus
            >
              <div className="self-stretch flex-1 relative text-base font-semibold font-poppins text-white text-center">
                Book Now
              </div>
            </button>
            <button
              className="cursor-pointer [border:none] py-[15px] px-0 bg-[transparent] rounded-3xs w-[703px] flex flex-row box-border items-center justify-between"
              autoFocus
            >
              <div className="self-stretch flex-1 relative text-base font-semibold font-poppins text-tomato text-center">
                Cancel
              </div>
            </button>
          </div>
        </section>
        <div className="my-0 mx-[!important] absolute top-[6px] left-[4px] h-[1460px] flex flex-col items-start justify-start z-[1]">
          <SectionSeatSelectionCard />
        </div>
        <div className="my-0 mx-[!important] absolute top-[1119px] left-[0px] rounded-3xs bg-white flex flex-col p-[45px] items-start justify-start gap-[30px] z-[2] border-[1px] border-solid border-gray-400">
          <div className="w-[823px] flex flex-row py-2.5 px-0 box-border items-center justify-start">
            <div className="flex flex-row items-center justify-start gap-[30px]">
              <div className="relative font-medium">{`Pickup & Drop`}</div>
              <div className="relative text-xs font-medium text-gray-400">{`Please select your pickup point and drop point  `}</div>
            </div>
          </div>
          <PickupAndDropCard />
        </div>
        <div
          className="my-0 mx-[!important] absolute top-[1390px] left-[4px] flex flex-row items-start justify-start gap-[30px] z-[3] text-sm text-gray-100"
          id="privacycard"
        >
          <div className="relative capitalize font-medium">
            Cancellation Policy
          </div>
          <div className="relative capitalize font-medium">{`Terms & Conditions`}</div>
          <div className="relative capitalize font-medium">
            Travel Insurance
          </div>
        </div>
        <div className="absolute my-0 mx-[!important] top-[0px] left-[11px] text-13xl font-semibold text-royalblue-100 z-[4]">
          Review your booking
        </div>
      </div>
      <Header />
    </div>
  );
};

export default ReviewBookingTravellerDet;
