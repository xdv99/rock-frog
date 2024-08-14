import { GoHomeFill } from "react-icons/go";
import { FaRegCompass } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { LuAlarmClock } from "react-icons/lu";
import { MdOutlineAccessAlarm } from "react-icons/md";
import { CiBookmarkMinus } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { FiHelpCircle } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="pl-6 bg-[#1B171D] h-dvh w-2/12 text-[#74777C] flex-col justify-between fixed hidden lg:flex">
      {/* Avatar */}
      <div className="flex items-center space-x-2 mt-4">
        <div className="avatar">
          <div className="w-14 rounded-full bg-[#732124] p-2">
            <Image src="/logo.png" width={50} height={50} alt="avatar" />
          </div>
        </div>
        <div>
          <p className="text-sm text-white font-bold">Dawood Alkawaz</p>
          <p className="text-xs">dalkawaz@gmail.com</p>
        </div>
      </div>
      {/* Menus */}
      <div>
        <h3 className="uppercase text-xs mb-2">Menu</h3>
        <ul className="space-y-2">
          <Link href="/">
            <li className="flex items-center space-x-2 relative cursor-pointer">
              <GoHomeFill color="#EB1B23" />{" "}
              <span className="text-white">Home</span>
              <div className="h-5 w-1 bg-[#EB1B23] rounded-l-xl absolute right-0"></div>
            </li>
          </Link>
          <li className="flex items-center space-x-2 cursor-pointer hover:text-white transition-all duration-300">
            <FaRegCompass /> <span>Discovery</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer hover:text-white transition-all duration-300">
            <BsPeople /> <span>Community</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer hover:text-white transition-all duration-300 relative">
            <LuAlarmClock /> <span>Coming soon</span>
            <div className="badge bg-[#EB1B23] text-black font-bold absolute right-5">
              2
            </div>
          </li>
        </ul>
        <div className="divider"></div>
        <h3 className="uppercase text-xs mb-2">Library</h3>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2 cursor-pointer hover:text-white transition-all duration-300">
            <MdOutlineAccessAlarm /> <span>Recent</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer hover:text-white transition-all duration-300">
            <CiBookmarkMinus /> <span>Bookmarked</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer hover:text-white transition-all duration-300">
            <FaRegStar /> <span>Top rated</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer hover:text-white transition-all duration-300">
            <LuDownload /> <span>Downloaded</span>
          </li>
        </ul>
        <div className="divider"></div>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2 cursor-pointer hover:text-white transition-all duration-300">
            <IoSettingsOutline /> <span>Settings</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer hover:text-white transition-all duration-300">
            <FiHelpCircle /> <span>Help</span>
          </li>
        </ul>
      </div>
      <div></div>
    </aside>
  );
}
