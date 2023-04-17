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

interface Props {
  isSidebarOpen: boolean;
  setIsSideBarOpen: () => void;
}

const Sidebar: React.FC<Props> = ({ isSidebarOpen, setIsSideBarOpen }) => {
  return (
    <div className={`h-screen bg-blue-600 px-2 flex flex-col`}>
      <IoMdMenu size={32} color="white" onClick={setIsSideBarOpen} />
      <div className="flex">
        <HiUserCircle size={32} color="#898989" className="my-2" />
        {isSidebarOpen && <span>Account</span>}
      </div>
      <div className="flex">
        <AiOutlineHome size={32} color="#898989" className="my-2" />
        {isSidebarOpen && <span>Home</span>}
      </div>
      <div className="flex">
        <BiCameraMovie size={32} color="#898989" className="my-2" />
        {isSidebarOpen && <span>Movies</span>}
      </div>
      <div className="flex">
        <BiMoviePlay size={32} color="#898989" className="my-2" />
        {isSidebarOpen && <span>Series</span>}
      </div>
      <div className="flex">
        <BsBookmarkPlus size={32} color="#898989" className="my-2" />
        {isSidebarOpen && <span>My List</span>}
      </div>
      <div className="flex">
        <FaShapes size={32} color="#898989" className="my-2" />
        {isSidebarOpen && <span>Genres</span>}
      </div>
      <div className="flex">
        <BsMegaphone size={32} color="#898989" className="my-2" />
        {isSidebarOpen && <span>Coming soon</span>}
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
