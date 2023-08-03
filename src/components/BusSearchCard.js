import { useCallback } from "react";
import { Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const BusSearchCard = () => {
  const navigate = useNavigate();

  const onSearchButtonClick = useCallback(() => {
    navigate("/bus-list");
  }, [navigate]);

  return (
    <div className="absolute top-[660px] left-[100px] w-[660px] h-[257px] flex flex-row items-start justify-start gap-[24px]">
      <button
        className="cursor-pointer [border:none] py-4 px-[25px] bg-royalblue-100 my-0 mx-[!important] absolute top-[204px] left-[0px] rounded-3xs w-[660px] overflow-hidden shrink-0 flex flex-row flex-wrap box-border items-center justify-center z-[0] active:animate-[0.5s_ease_0s_infinite_normal_none_shadow-pop-tr] active:opacity-[1]"
        autoFocus
        id="search"
        onClick={onSearchButtonClick}
      >
        <div className="relative text-sm font-medium font-poppins text-white text-center">
          Search for buses
        </div>
      </button>
      <Input
        className="my-0 mx-[!important] absolute top-[103px] left-[0px] z-[1]"
        variant="outline"
        width="334px"
        type="date"
      />
      <input
        className="[border:none] font-medium font-poppins text-sm bg-[transparent] my-0 mx-[!important] absolute top-[0px] left-[356px] box-border w-[304px] overflow-hidden shrink-0 flex flex-row py-4 px-[25px] items-center justify-center z-[2] border-b-[1px] border-solid border-gray-400"
        type="text"
        placeholder="Bangalore, Karnataka"
        required
        autoFocus
      />
      <input
        className="[border:none] font-medium font-poppins text-sm bg-[transparent] my-0 mx-[!important] absolute top-[0px] left-[0px] shadow-[0px_3px_4px_rgba(0,_0,_0,_0.25)] box-border w-[334px] overflow-hidden shrink-0 flex flex-row py-4 px-[25px] items-center justify-center z-[3] border-b-[1px] border-solid border-gray-400"
        type="text"
        placeholder="Aurangabad, Maharashtra"
        required
        autoFocus
      />
    </div>
  );
};

export default BusSearchCard;
