import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchResultsContainer from "../components/SearchResultsContainer";
import AvailableBusesList from "../components/AvailableBusesList";

const BusList = () => {
  return (
    <div className="relative bg-whitesmoke w-full h-[1718px] overflow-hidden">
        <Header />
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
