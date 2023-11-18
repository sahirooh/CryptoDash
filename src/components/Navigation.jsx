import { BiSupport } from "react-icons/bi";
import { BiSolidDashboard } from "react-icons/bi";
import { LiaExchangeAltSolid } from "react-icons/lia";

const Navigation = () => {
  return (
    <div className="flex flex-col max-w-[200px] justify-between h-[100vh]">
      <div className="">
        <img className="max-w-[170px]" src="/mylogo.png" alt="logo" />
        <div className="flex items-center hover:bg-slate-500 ml-6 gap-2 border rounded-lg ">
          <BiSolidDashboard className="ml-2" />
          <h1>Dashboard</h1>
        </div>
        <div className="flex items-center border rounded-lg ml-6 gap-2 ">
          <LiaExchangeAltSolid className="ml-2" />
          <h1>Transactions</h1>
        </div>
      </div>

      <div className="flex items-center gap-2 ml-6">
        <BiSupport />
        <h1>Support</h1>
      </div>
    </div>
  );
};

export default Navigation;
