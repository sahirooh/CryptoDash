import { HiPlusCircle } from "react-icons/hi";
import { HiMinusCircle } from "react-icons/hi";
import { GoArrowUpRight } from "react-icons/go";

const PriceSection = () => {

    const timeline = ["1H", "1D", "1W", "1M"]

  return (
    <div className="w-[468px] h-[345px] bg-white rounded-xl">
      <div className="flex justify-between mx-6 mt-6">
        <div>
          <h1 className="font-medium text-[14px] text-[#535D66]">
            Current Price
          </h1>
          <p className="font-medium gap-2 flex text-2xl">
            77777{" "}
            <span className="flex font-bold mt-[8px] text-sm text-green-500">
              <GoArrowUpRight className="mt-1" /> 7.77%
            </span>
          </p>
        </div>

        <div className="gap-2 flex text-[14px] items-center">
          <button className="bg-purple-600 px-4 font-medium text-white py-2 flex items-center gap-1 rounded-[10px]">
            <HiPlusCircle className="" />
            Buy
          </button>
          <button className="bg-purple-600 px-4 py-2 font-medium text-white flex items-center gap-1 rounded-[10px]">
            <HiMinusCircle className="" />
            Sell
          </button>
        </div>
      </div>

      <div className="flex mr-6 mt-4 justify-end">
        <div className="flex w-[147px] gap-2 p-[3px] rounded-[6px] bg-[#EEEEF4] ">
          {timeline.map((time) => {
            return (
              <p className=" hover:bg-white cursor-pointer justify-center flex w-full hover:rounded text-[#535D66] font-medium text-xs px-[6px] py-1">
                {time}
              </p>
            );
          })}
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default PriceSection