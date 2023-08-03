import BusSearchCard from "../components/BusSearchCard";

const Homepage = () => {
  return (
    <div className="relative bg-white w-full h-[1427px] overflow-hidden">
      <footer className="absolute top-[1140px] left-[0px] bg-royalblue-100 w-[1915px] h-[287px] flex flex-col p-[100px] box-border items-start justify-start gap-[60px] text-left text-5xl text-white font-poppins">
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
      <BusSearchCard />
      <main className="absolute top-[285px] left-[100px] w-[706px] h-[312px] flex flex-col items-start justify-start gap-[20px] text-left text-[64px] text-gray-200 font-poppins">
        <button
          className="cursor-pointer [border:none] py-2.5 px-5 bg-royalblue-100 rounded-[30px] w-[180px] h-[50px] flex flex-row box-border items-start justify-start relative z-[0]"
          autoFocus
        >
          <div className="absolute my-0 mx-[!important] top-[calc(50%_-_12px)] left-[calc(50%_-_61px)] text-base font-medium font-poppins text-white text-left z-[0]">
            Hello Travellers
          </div>
        </button>
        <h1 className="m-0 self-stretch flex-1 relative text-[inherit] leading-[90px] font-medium font-inherit z-[1]">
          <p className="m-0">{`made your booking `}</p>
          <p className="m-0">experience easy!</p>
        </h1>
        <h3 className="m-0 self-stretch relative text-base font-normal font-inherit text-dimgray inline-block h-[70px] shrink-0 z-[2]">
          Unlock the gateway to effortless adventures - Where booking your dream
          ride becomes a luxurious breeze!
        </h3>
        <img
          className="my-0 mx-[!important] absolute top-[-285px] left-[794px] w-[1020px] h-[1144px] object-cover z-[3]"
          alt=""
          src="/frame-3003@1x.png"
        />
      </main>
      <header className="absolute top-[0px] left-[0px] w-[1912px] flex flex-row py-10 px-[100px] box-border items-start justify-start text-left text-[39px] text-royalblue-100 font-poppins">
        <a className="[text-decoration:none] relative font-semibold text-[inherit]">
          <span>BUS</span>
          <span className="text-gray-200">BOY</span>
        </a>
      </header>
    </div>
  );
};

export default Homepage;
