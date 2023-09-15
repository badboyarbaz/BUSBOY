import BusSearchCard from "../components/BusSearchCard";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div className="relative bg-white w-full h-auto overflow-hidden flex flex-col min-h-screen flex-grow">
      <header className="absolute top-0 left-0 w-full flex flex-row py-10 justify-center lg:px-[100px] box-border lg:items-start lg:justify-start text-left text-[39px] text-royalblue-100 font-poppins">
        <a className="[text-decoration:none] relative font-semibold text-[inherit]">
          <span>BUS</span>
          <span className="text-gray-200">BOY</span>
        </a>
      </header>
      <main className="relative flex flex-col xl:flex-row items-start justify-between font-poppins mt-16 md:mt-20 xl:mt-24">
        <div className="flex flex-col m-10 ">
          <div className="flex flex-col ">
          <button
          className="cursor-pointer py-2.5 px-5 bg-royalblue-100 rounded-[30px] w-[250px] h-[60px] flex flex-row box-border items-center justify-center relative  ml-8"
          autoFocus
        >
          <a className="relative text-base text-center font-medium font-poppins text-white">
            Hello Travellers
          </a>
        </button>
          <h1
            className="max-w-[400px] sm:max-w-full xl:w-auto ml-0 xl:ml-8 mt-6 relative text-[inherit] text-[64px] leading-[90px] font-medium font-inherit inline-block"
          >
            <p className="m-0">made your booking</p>
            <p className="m-0">experience easy!</p>
          </h1>
          <h3 className="max-w-[400px] sm:max-w-full xl:w-auto ml-0 xl:ml-8 self-stretch relative text-[16px] leading-[24px] font-normal font-inherit text-dimgray inline-block">
            Unlock the gateway to effortless adventures
          </h3>
          <h3 className="max-w-[400px] sm:max-w-full xl:w-auto ml-0 xl:ml-8 self-stretch relative text-[16px] font-normal font-inherit text-dimgray inline-block">
          Where booking your dream ride becomes a luxurious breeze!
          </h3>
          </div>
          <div>
          <BusSearchCard />
          </div>
        </div>
        <div className="xl:block hidden">
        <img
          className="w-1/3 h-[900px] object-cover fixed top-0 right-0"
          alt=""
          src="/frame-3003@1x.png"
        />
        </div>
      </main>
      <Footer />
    </div>
  );
};


export default Homepage;
