import { Fragment } from "react";

const SectionSeatSelectionCard = () => {
  const seats = [
    { id: 0, type: "Available", price: 1600, selected: true },
    { id: 1, type: "Available", price: 1600, selected: false },
    { id: 2, type: "Unavailable", price: 1600, selected: false, },
    { id: 3, type: "Available", price: 1600, selected: false },
    { id: 4, type: "Female", price: 1600, selected: false },
    { id: 5, type: "Female", price: 1600, selected: false },
    { id: 6, type: "Available", price: 1600, selected: false },
    { id: 7, type: "Available", price: 1600, selected: false },
    { id: 8, type: "Unavailable", price: 1600, selected: false, },
    { id: 9, type: "Available", price: 1600, selected: false },
    { id: 10, type: "Female", price: 1600, selected: false },
    { id: 11, type: "Female", price: 1600, selected: false },
    { id: 12, type: "Available", price: 1600, selected: false },
    { id: 13, type: "Available", price: 1600, selected: false },
    { id: 14, type: "Unavailable", price: 1600, selected: false, },
    { id: 15, type: "Available", price: 1600, selected: false },
    { id: 16, type: "Female", price: 1600, selected: false },
    { id: 17, type: "Female", price: 1600, selected: false },
    { id: 18, type: "Available", price: 1600, selected: false },
    { id: 19, type: "Available", price: 1600, selected: false },
    { id: 20, type: "Unavailable", price: 1600, selected: false, },
    { id: 21, type: "Available", price: 1600, selected: false },
    { id: 22, type: "Female", price: 1600, selected: false },
    { id: 23, type: "Female", price: 1600, selected: false },
    { id: 24, type: "Unavailable", price: 1600, selected: false, },
    { id: 25, type: "Available", price: 1600, selected: false },
    { id: 26, type: "Female", price: 1600, selected: false },
    { id: 27, type: "Female", price: 1600, selected: false },
    { id: 28, type: "Female", price: 1600, selected: false },
    { id: 29, type: "Female", price: 1600, selected: false },
    { id: 30, type: "Female", price: 1600, selected: false },
  ];

    const UpperDeckSingleRow = seats.slice(0,5);
    const UpperDeckDoubleRow = seats.slice(5,15);
    const LowerDeckSingleRow = seats.slice(15,20);
    const LowerDeckDoubleRow = seats.slice(20,30);

  return (
    <section className="rounded-3xs bg-white box-border w-[913px] h-[1086px] flex flex-col p-[45px] items-start justify-start relative gap-[30px] text-left text-base text-black font-poppins border-[1px] border-solid border-gray-400">
      <div className="w-[823px] flex flex-row py-2.5 px-0 box-border items-center justify-between z-[0] text-xl text-gray-200">
        {/* Seat Selection Banner */}
        <div className="flex flex-row items-center justify-start gap-[30px]">
          <div className="relative font-medium">Seat Selection</div>
          <div className="relative text-xs px-5 font-medium text-gray-400">
            Click on an Available seat to proceed with your transaction.
          </div>
        </div>
        <div className="rounded-3xs bg-royalblue-300 w-[30px] h-[30px] flex flex-row p-[5px] box-border items-center justify-center">
          <img className="relative w-[15px] h-[15px]" alt="" src="/union.svg" />
        </div>
      </div>
      <div className="] absolute top-[144px] left-[63px] rounded-3xs bg-aliceblue overflow-hidden flex flex-row py-[29px] px-[145px] items-start justify-start gap-[50px] z-[1] text-lg">
        <div className="relative font-medium">SEAT PRICE</div>
        <button className="cursor-pointer py-2 px-[13px] bg-[transparent] rounded-3xs flex flex-row items-start justify-start border-[1px] border-solid border-royalblue-100">
          <div className="relative text-xs font-medium font-poppins text-royalblue-100 text-left">
            All
          </div>
        </button>
        <button className="cursor-pointer py-2 px-[13px] bg-[transparent] rounded-3xs flex flex-row items-start justify-start border-[1px] border-solid border-royalblue-100">
          <div className="relative text-xs font-medium font-poppins text-royalblue-100 text-left">
            1600
          </div>
        </button>
        <button className="cursor-pointer py-2 px-[13px] bg-[transparent] rounded-3xs flex flex-row items-start justify-start border-[1px] border-solid border-royalblue-100">
          <div className="relative text-xs font-medium font-poppins text-royalblue-100 text-left">
            1800
          </div>
        </button>
        <button className="cursor-pointer py-2 px-[13px] bg-[transparent] rounded-3xs flex flex-row items-start justify-start border-[1px] border-solid border-royalblue-100">
          <div className="relative text-xs font-medium font-poppins text-royalblue-100 text-left">
            2000
          </div>
        </button>
      </div>
      {/* Upper Deck */}
      <div className="absolute top-[283px] left-[63px] w-[770px] h-[610px] ">
        <div className="absolute top-[326px] left-[1px] w-[769px] h-[284px]">
          <div className="absolute top-[0px] left-[55px] w-[714px] h-[284px]">
            <div className="absolute top-[153px] left-[150px] w-[714px] h-[131px] flex flex-col items-start justify-start">
              <div className="upper-deck-single-seat-row">
                {UpperDeckSingleRow.map((seat, index) => (
                  <button
                  key={seat.id}
                  onClick={() => { console.log(index); alert(index); }}
                  className={`cursor-pointer  
                              p-0 
                              relative 
                              w-[90px] 
                              h-[50px] 
                              bg-cover 
                              bg-no-repeat 
                              bg-[top]
                              ${seat.type === "Female" ? 'bg-[url(../public/female.png)]' : ''}
                              ${seat.type === "Available" ? 'bg-[url(../public/availableseat.png)]' : 'bg-[url(../public/unavailableseat.png)]'}
                              ${seat.selected ? 'bg-[url(../public/selectedseat.png)]' : ''}`}
                >
                  {seat.price}
                </button>
                ))}
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] w-[42px] h-[42px] flex flex-col items-start justify-start">
              <div className="] absolute top-[33px] left-[153px] w-[500px] h-[100px] flex flex-row flex-wrap items-start justify-start gap-[8px] z-[0]">
              <div className="upper-deck-double-seat-row">
                {UpperDeckDoubleRow.map((seat, index) => (
                  <button
                  key={seat.id}
                  onClick={() => { console.log(index); alert(index); }}
                  className={`cursor-pointer
                              p-0 
                              relative 
                              w-[90px] 
                              h-[50px] 
                              bg-cover 
                              bg-no-repeat 
                              bg-[top]
                              ${seat.type === "Female" ? 'bg-[url(../public/female.png)]' : ''}
                              ${seat.type === "Available" ? 'bg-[url(../public/availableseat.png)]' : 'bg-[url(../public/unavailableseat.png)]'}
                              ${seat.selected ? 'bg-royalblue-100' : ''}`}
                >
                  {seat.price}
                </button>
                ))}
              </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[9px] left-[0px] font-medium">
            Upper Deck
          </div>
        </div>
        {/* Middle line */}
        <img
          className="absolute top-[310.5px] left-[125px] w-[600px] h-0.5"
          alt=""
          src="/line-1.svg"
        />
        {/* Lower Deck */}
        <div className="absolute top-[0px] left-[0px] w-[769px] h-[284px] flex flex-row pt-px px-0 pb-0 box-border items-start justify-start">
          <div className="relative font-medium">Lower Deck</div>
          <div className="relative w-[714px] h-[222px] ml-[-36px]">
            <div className="absolute top-[150px] left-[0px] w-[714px] h-[100px] flex flex-col items-start justify-start">
              <div className="] absolute top-[60px] left-[153px] flex flex-row items-center justify-center gap-[8px] z-[0]">
              <div className="lower-deck-single-seat-row">
                {LowerDeckSingleRow.map((seat, index) => (
                  <button
                  key={seat.id}
                  onClick={() => { console.log(index); alert(index); }}
                  className={`cursor-pointer
                              p-0 
                              relative 
                              w-[90px] 
                              h-[50px] 
                              bg-cover 
                              bg-no-repeat 
                              bg-[top]
                              ${seat.type === "Female" ? 'bg-[url(../public/female.png)]' : ''}
                              ${seat.type === "Available" ? 'bg-[url(../public/availableseat.png)]' : 'bg-[url(../public/unavailableseat.png)]'}
                              ${seat.selected ? 'bg-royalblue-100' : ''}`}
                >
                  {seat.price}
                </button>
                ))}
              </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] w-[42px] h-[42px] flex flex-col items-start justify-start">
              <div className="] absolute top-[74px] left-[154px] w-[500px] h-[100px] flex flex-row flex-wrap items-center justify-center gap-[8px] z-[0]">
              <div className="lower-deck-double-seat-row">
                {LowerDeckDoubleRow.map((seat,index) => (
                  <button
                  key={seat.id}
                  onClick={() => { console.log(index); alert(index); }}
                  className={`cursor-pointer 
                              p-0 
                              relative 
                              w-[90px] 
                              h-[50px] 
                              bg-cover 
                              bg-no-repeat 
                              bg-[top]
                              ${seat.type === "Female" ? 'bg-[url(../public/female.png)]' : ''}
                              ${seat.type === "Available" ? 'bg-[url(../public/availableseat.png)]' : 'bg-[url(../public/unavailableseat.png)]'}
                              ${seat.selected ? 'bg-royalblue-100' : ''}`}
                >
                  {seat.price}
                </button>
                ))}
              </div>
              </div>
            </div>
            <img
              className="absolute top-[95px] left-[94px] w-[35px] h-[42px] object-cover"
              alt=""
              src="/steering.png"
            />
          </div>
        </div>
      </div>
      <div className="] absolute top-[940px] left-[47px] rounded-3xs bg-aliceblue w-[800px] h-[102px] overflow-hidden shrink-0 flex flex-col py-[26px] px-[62px] box-border items-start justify-start z-[3]">
        <div className="self-stretch flex-1 flex flex-row items-start justify-start relative">
          <div className="] absolute top-[0px] left-[11px] flex flex-row items-start justify-start gap-[20px] z-[0]">
            <div className="relative font-medium inline-block w-[102px] h-[27px] shrink-0">{`SEAT LEGEND `}</div>
            <img
              className="relative w-[74px] h-[50px] object-cover"
              alt=""
              src="/availableseat.png"
            />
            <div className="relative font-medium">AVAILABLE</div>
            <img
              className="relative w-[74px] h-[50px] object-cover"
              alt=""
              src="/unavailableseat.png"
            />
            <div className="relative font-medium">UNAVAILABLE</div>
            <img
              className="relative w-[74px] h-[50px] object-cover"
              alt=""
              src="/femaleseat.png"
            />
            <div className="relative font-medium">FEMALE</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSeatSelectionCard;
