import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchResultsContainer from "../components/SearchResultsContainer";
import AvailableBusesList from "../components/AvailableBusesList";

const BusList = () => {
    return (
        <div className="relative bg-whitesmoke w-full h-auto">
            <Header />
            <main className="relative w-full flex flex-col lg:flex-row ">
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:order-2">
                    <AvailableBusesList />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col items-center  lg:order-1">
                    <SearchResultsContainer />
                </div>
            </main>
            <Footer dimensionCode="/vector3.svg" />
        </div>
    );
};

export default BusList;
