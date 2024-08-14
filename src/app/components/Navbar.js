import { RiWirelessChargingFill } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { TbCategoryFilled } from "react-icons/tb";

export default function Navbar() {
  return (
    <nav className="bg-[#0D0D10] px-4 py-5">
      <div className="container mx-auto flex justify-between">
        <ul className="flex space-x-6">
          <li className="text-white cursor-pointer hover:text-white transition-all duration-300">
            Movies
          </li>
          <li className="cursor-pointer hover:text-white transition-all duration-300">
            Series
          </li>
          <li className="cursor-pointer hover:text-white transition-all duration-300">
            TV Shows
          </li>
        </ul>
        <ul className="flex space-x-6">
          <li className="cursor-pointer hover:text-white transition-all duration-300">
            <RiWirelessChargingFill size={26} />
          </li>
          <li className="cursor-pointer hover:text-white transition-all duration-300 relative">
            <IoNotificationsOutline size={26} />
            <div className="w-2 h-2 bg-[#EB1B23] rounded-full absolute top-0 right-0"></div>
          </li>
          <li className="cursor-pointer hover:text-white transition-all duration-300">
            <TbCategoryFilled size={26} />
          </li>
        </ul>
      </div>
    </nav>
  );
}
