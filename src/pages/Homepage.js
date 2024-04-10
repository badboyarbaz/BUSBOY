import BusSearchCard from "../components/BusSearchCard";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div className="relative flex flex-col flex-grow w-full h-auto min-h-screen overflow-hidden bg-white">
      <header className="w-full flex flex-row py-8 text-left text-3xl ">
        <a className="relative font-bold m-auto lg:ml-20">
          <span className="text-royalblue-100">BUS</span>
          <span className="text-gray-200">BOY</span>
        </a>
      </header>
      <main className="flex flex-col items-start justify-between lg:flex-row">
        <div className="flex flex-col px-4 py-2 lg:px-10">
          <div className="flex flex-col gap-5">
            <button className="cursor-pointer m-auto lg:ml-10 py-2 px-4 bg-royalblue-100 rounded-full w-36 h-12 text-sm font-medium text-center text-white font-poppins">
              Hello Travellers
            </button>
            <div className="flex flex-col m-auto lg:ml-9 lg:w-auto lg:text-5xl text-2xl font-bold ">
              <p className="">made your booking</p>
              <p className="">
                experience <span className="text-royalblue-100">easy!</span>
              </p>
            </div>
            <div className="flex flex-col lg:flex-row m-auto lg:ml-0 items-center justify-center gap-4">
              <p className="text-sm font-medium text-dimgray m-auto lg:ml-10">
                Unlock the gateway to effortless adventures
              </p>
              <span className="text-royalblue-100 hidden lg:block"> | </span>
              <div className="w-1/3 h-0.5 bg-royalblue-100 lg:hidden lg:w-0.5"></div>
              <p className="text-sm font-medium text-dimgray m-auto text-center">
                Where booking your dream ride becomes a luxurious breeze
              </p>
            </div>
          </div>
          <div>
            <BusSearchCard />
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            className="fixed top-0 right-0 object-cover w-1/3 h-full"
            alt=""
            src="/bus_.png"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
