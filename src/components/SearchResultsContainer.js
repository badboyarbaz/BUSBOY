const SearchResultsContainer = () => {
  return (
    <div className="relative w-[650px] h-[868px] text-left text-13xl text-royalblue-100 font-poppins">
      <div className="absolute top-[0px] left-[0px] font-semibold">
        Your Search Results
      </div>
      <ul className="m-0 absolute top-[108px] left-[0px] w-[650px] flex flex-row items-center justify-between">
        <img className="relative w-[16.48px] h-5" alt="" src="/1.svg" />
        <button
          className="cursor-pointer [border:none] p-[15px] bg-white rounded-3xs w-20 flex flex-col box-border items-center justify-center"
          autoFocus
        >
          <div className="relative text-xl font-medium font-poppins text-gray-200 text-center">
            <p className="m-0">Tue</p>
            <p className="m-0">15</p>
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] p-[15px] bg-royalblue-100 rounded-3xs w-20 flex flex-col box-border items-center justify-center"
          autoFocus
        >
          <div className="relative text-xl font-medium font-poppins text-white text-center">
            <p className="m-0">Wed</p>
            <p className="m-0">16</p>
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] p-[15px] bg-white rounded-3xs w-20 flex flex-col box-border items-center justify-center"
          autoFocus
        >
          <div className="relative text-xl font-medium font-poppins text-gray-200 text-center">
            <p className="m-0">Thu</p>
            <p className="m-0">17</p>
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] p-[15px] bg-white rounded-3xs w-20 flex flex-col box-border items-center justify-center"
          autoFocus
        >
          <div className="relative text-xl font-medium font-poppins text-gray-200 text-center">
            <p className="m-0">Fri</p>
            <p className="m-0">18</p>
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] p-[15px] bg-white rounded-3xs w-20 flex flex-col box-border items-center justify-center"
          autoFocus
        >
          <div className="relative text-xl font-medium font-poppins text-gray-200 text-center">
            <p className="m-0">Sat</p>
            <p className="m-0">19</p>
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] p-[15px] bg-white rounded-3xs w-20 flex flex-col box-border items-center justify-center"
          autoFocus
        >
          <div className="relative text-xl font-medium font-poppins text-gray-200 text-center">
            <p className="m-0">Sun</p>
            <p className="m-0">20</p>
          </div>
        </button>
        <img className="relative w-[16.48px] h-5" alt="" src="/11.svg" />
      </ul>
      <div className="absolute top-[258px] left-[0px] w-[650px] h-[136px]">
        <input
          className="[border:none] font-medium font-poppins text-sm bg-[transparent] absolute top-[0px] left-[0px] box-border w-[312.85px] overflow-hidden flex flex-row py-4 px-0 items-center justify-start border-b-[1px] border-solid border-gray-400"
          type="text"
          placeholder="Aurangabad, Maharashtra"
          required
          autoFocus
        />
        <input
          className="[border:none] font-medium font-poppins text-sm bg-[transparent] absolute top-[0px] left-[336.85px] box-border w-[312.85px] overflow-hidden flex flex-row py-4 px-0 items-center justify-start border-b-[1px] border-solid border-gray-400"
          type="text"
          placeholder="Bangalore, Karnataka"
          required
          autoFocus
        />
        <button
          className="cursor-pointer [border:none] py-4 px-[25px] bg-royalblue-100 absolute top-[83px] left-[0px] rounded-3xs w-[650px] overflow-hidden flex flex-row box-border items-center justify-center"
          autoFocus
        >
          <div className="relative text-sm font-medium font-poppins text-white text-left">
            Search for bus
          </div>
        </button>
      </div>
      <div className="absolute top-[454px] left-[0px] flex flex-col items-start justify-start gap-[30px] text-xl text-white">
        <div className="flex flex-col items-start justify-start gap-[30px]">
          <a className="[text-decoration:none] rounded-3xs w-[650px] h-[150px] flex flex-row py-2.5 px-[25px] box-border items-center justify-start gap-[10px] bg-[url(/public/frame-5@3x.png)] bg-cover bg-no-repeat bg-[top] text-[inherit]">
            <div className="relative font-medium">Planning your holidays</div>
            <img className="relative w-[8.24px] h-2.5" alt="" src="/2.svg" />
          </a>
          <a className="[text-decoration:none] rounded-3xs w-[650px] h-[150px] flex flex-row py-2.5 px-[25px] box-border items-center justify-start gap-[10px] bg-[url(/public/frame-6@3x.png)] bg-cover bg-no-repeat bg-[top] text-[inherit]">
            <div className="relative font-medium">Train tourism packages</div>
            <img className="relative w-[8.24px] h-2.5" alt="" src="/2.svg" />
          </a>
        </div>
        <textarea
          className="[border:none] bg-[transparent] font-poppins text-xs relative text-gray-100 text-left inline-block w-[650px]"
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et olore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et olore magna aliqua"
          readOnly
        />
      </div>
    </div>
  );
};

export default SearchResultsContainer;
