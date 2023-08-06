import BusSearchCard from "../components/BusSearchCard";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div className="relative bg-white w-full h-[1427px] overflow-hidden flex flex-col min-h-screen flex-grow">
      <header className="absolute top-[0px] left-[0px] w-[1912px] flex flex-row py-10 px-[100px] box-border items-start justify-start text-left text-[39px] text-royalblue-100 font-poppins">
        <a className="[text-decoration:none] relative font-semibold text-[inherit]">
          <span>BUS</span>
          <span className="text-gray-200">BOY</span>
        </a>
      </header>
      <main className="relative ml-8  top-[150px] left-[calc(50% - 390px)] w-full h-[800px] flex flex-col items-start justify-start font-poppins">
        <div className="flex flex-col ">
        <button
          className="cursor-pointer py-2.5 px-5 bg-royalblue-100 rounded-[30px] w-[250px] h-[60px] flex flex-row box-border items-center justify-center relative z-0"
          autoFocus
        >
          <div className="relative text-base text-center font-medium font-poppins text-white">
            Hello Travellers
          </div>
        </button>
          <h1
            className="mt-6 relative text-[inherit] text-[64px] leading-[90px] font-medium font-inherit inline-block"
          >
            <p className="m-0">made your booking</p>
            <p className="m-0">experience easy!</p>
          </h1>
          <h3 className="m-0 self-stretch relative text-[16px] leading-[24px] font-normal font-inherit text-dimgray inline-block">
            Unlock the gateway to effortless adventures
          </h3>
          <h3 className="m-0 self-stretch relative text-[16px] font-normal font-inherit text-dimgray inline-block">
          Where booking your dream ride becomes a luxurious breeze!
          </h3>
          <BusSearchCard />
        </div>
        <img
          className="w-[650px] h-[1140px] object-cover fixed top-0 right-0"
          alt=""
          src="/frame-3003@1x.png"
        />
      </main>
      <Footer />
    </div>
  );
};

/*      <footer className="absolute top-[1140px] left-[0px] bg-royalblue-100 w-[1915px] h-[287px] flex flex-col p-[100px] box-border items-start justify-start gap-[60px] text-left text-5xl text-white font-poppins">
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
      </footer> */
export default Homepage;
