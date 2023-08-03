import SearchResultsContainer from "../components/SearchResultsContainer";
import AvailableBusesList from "../components/AvailableBusesList";

const BusList = () => {
  return (
    <div className="relative bg-whitesmoke w-full h-[1718px] overflow-hidden">
      <footer className="absolute top-[1431px] left-[0px] bg-royalblue-100 w-[1920px] h-[287px] flex flex-col p-[100px] box-border items-start justify-start gap-[60px] text-left text-5xl text-white font-poppins">
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
            src="/vector3.svg"
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
        <div className="flex flex-col items-start justify-start">
          <SearchResultsContainer />
        </div>
        <AvailableBusesList />
      </div>
      <div className="absolute top-[0px] left-[0px] bg-white box-border w-[1920px] flex flex-row py-10 px-[100px] items-center justify-between border-b-[1px] border-solid border-gray-400">
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-5xl font-semibold font-poppins text-left inline-block"
          autoFocus
        >
          <span className="text-royalblue-100">BUS</span>
          <span className="text-gray-200">BOY</span>
        </button>
        <div className="flex flex-row items-start justify-start gap-[60px]">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm font-medium font-poppins text-darkslategray text-left inline-block"
            autoFocus
          >
            My Booking
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm font-medium font-poppins text-royalblue-100 text-left inline-block"
            autoFocus
          >
            Login / Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusList;
