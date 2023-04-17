import React, { useState } from "react";
import { BiMoviePlay } from "react-icons/bi";
import { BiCameraMovie } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { BsBookmarkPlus } from "react-icons/bs";
import { GrAnnounce } from "react-icons/gr";
import { FaShapes } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { HiUserCircle } from "react-icons/hi";
import { IoMdMenu } from "react-icons/io";
import { BsMegaphone } from "react-icons/bs";
import Link from "next/link";

interface Props {
  isSidebarOpen: boolean;
  setIsSideBarOpen: () => void;
}

const Sidebar: React.FC<Props> = ({ isSidebarOpen, setIsSideBarOpen }) => {
  return (
    <div className={`h-screen bg-blue-600 px-2 flex flex-col`}>
      <IoMdMenu size={32} color="white" onClick={setIsSideBarOpen} />
      <div className="flex">
        <Link href="/my-profile">
          <HiUserCircle size={32} color="#898989" className="my-2" />
          {isSidebarOpen && <span>Account</span>}
        </Link>
      </div>
      <div className="flex">
        <Link href="/">
          <AiOutlineHome size={32} color="#898989" className="my-2" />
          {isSidebarOpen && <span>Home</span>}
        </Link>
      </div>
      <div className="flex">
        <Link href="/movies">
          <BiCameraMovie size={32} color="#898989" className="my-2" />
          {isSidebarOpen && <span>Movies</span>}
        </Link>
      </div>
      <div className="flex">
        <Link href="/series">
          <BiMoviePlay size={32} color="#898989" className="my-2" />
          {isSidebarOpen && <span>Series</span>}
        </Link>
      </div>
      <div className="flex">
        <Link href="/my-list">
          <BsBookmarkPlus size={32} color="#898989" className="my-2" />
          {isSidebarOpen && <span>My List</span>}
        </Link>
      </div>
      <div className="flex">
        <Link href="/genre">
          <FaShapes size={32} color="#898989" className="my-2" />
          {isSidebarOpen && <span>Genres</span>}
        </Link>
      </div>
      <div className="flex">
        <Link href="/coming-soon">
          <BsMegaphone size={32} color="#898989" className="my-2" />
          {isSidebarOpen && <span>Coming soon</span>}
        </Link>
      </div>
      <div className="mt-auto">
        <div className="flex bottom-0 absolute">
          <div className="flex-grow"></div>
          <div>
            <ImExit size={32} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
