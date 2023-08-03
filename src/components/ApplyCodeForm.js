import { useMemo } from "react";

const ApplyCodeForm = ({ propAlignSelf, propWidth }) => {
  const frameDiv1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div
      className="self-stretch rounded-3xs bg-white flex flex-col p-[30px] items-start justify-center text-left text-xl text-gray-200 font-poppins border-[1px] border-solid border-gray-400"
      id="offercode"
      style={frameDiv1Style}
    >
      <div className="self-stretch flex flex-row items-center justify-center gap-[30px]">
        <div className="flex flex-row items-center justify-start gap-[10px]">
          <img className="relative w-8 h-8" alt="" src="/vector7.svg" />
          <div className="relative font-medium">Apply Code</div>
        </div>
        <input
          className="[border:none] font-medium font-poppins text-sm bg-[transparent] flex-1 flex flex-col py-[18px] px-[25px] items-start justify-start border-b-[1px] border-solid border-gray-400"
          type="text"
          placeholder="Enter Code"
        />
      </div>
    </div>
  );
};

export default ApplyCodeForm;
