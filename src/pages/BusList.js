import Footer from "../components/Footer";
import SearchResultsContainer from "../components/SearchResultsContainer";
import AvailableBusesList from "../components/AvailableBusesList";

const BusList = () => {
  return (
    <div className="relative bg-whitesmoke w-full h-[1718px] overflow-hidden">
       <header className="absolute top-[0px] left-[0px] bg-white box-border w-[1920px] flex flex-row py-10 px-[100px] items-center justify-between border-b-[1px] border-solid border-gray-400">
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
      </header>
      <main className="relative top-[146px] left-[100px] w-screen flex flex-row items-start justify-between">
        <div className="flex flex-col items-start justify-start ">
          <SearchResultsContainer />
        </div>
        <div className="flex flex-col items-start justify-start mr-[200px]">
          <AvailableBusesList /></div>
      </main>
      <Footer dimensionCode="/vector3.svg" />
    </div>
  );
};

export default BusList;
