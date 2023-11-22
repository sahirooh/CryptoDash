import { IoSearchOutline } from "react-icons/io5";

const History = () => {
  const filters = [
    {
      title: "All",
      value: "349",
    },
    {
      title: "Deposit",
      value: "114",
    },
    {
      title: "Withdraw",
      value: "213",
    },
    {
      title: "Trade",
      value: "22",
    },
  ];

  return (
    <div className="bg-white w-[1050px] rounded-2xl h-[508px]">
      <div className="flex mt-4 border-b justify-between">
        <div className="flex mx-4 gap-4">
          {filters.map((item) => (
            <div className="flex h-full px-6 py-4 hover:border-b hover:border-b-purple-500 text-sm gap-2">
              <h1 className="text-gray-500 font-medium">{item.title}</h1>
              <p className="bg-[#EEEEF4] text-gray-500 rounded-full px-[6px]">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="flex mx-4 py-4 text-gray-400 gap-1 items-center">
          <IoSearchOutline className="mb-1" />
          <input
            className="w-[200px] px-1 outline-none mb-[1px] text-sm"
            type="text"
            placeholder="Search by ID or Destination"
          />
        </div>
      </div>
      
      <div></div>
    </div>
  );
};

export default History;
