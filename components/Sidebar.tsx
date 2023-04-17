import React from "react";
import { BiMoviePlay } from "react-icons/bi";
import { BiCameraMovie } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { BsBookmarkPlus } from "react-icons/bs";
import { GrAnnounce } from "react-icons/gr";
import { FaShapes } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { HiUserCircle } from "react-icons/hi";

interface Props {
  isSidebarOpen: boolean;
}

const Sidebar: React.FC<Props> = ({ isSidebarOpen }) => {
  return (
    <>
      <a href="#">
        <HiUserCircle />
        {isSidebarOpen && <span>John doe</span>}
      </a>
      <a href="#">
        <AiOutlineHome />
        {isSidebarOpen && <span>Dashboard</span>}
      </a>
      <a href="#">
        <BiCameraMovie />
        {isSidebarOpen && <span>Dashboard</span>}
      </a>
      <a href="#">
        <BiMoviePlay />
        {isSidebarOpen && <span>Dashboard</span>}
      </a>
      <a href="#">
        <BsBookmarkPlus />
        {isSidebarOpen && <span>Dashboard</span>}
      </a>
      <a href="#">
        <FaShapes />
        {isSidebarOpen && <span>Dashboard</span>}
      </a>
      <a href="#">
        <GrAnnounce />
        {isSidebarOpen && <span>Dashboard</span>}
      </a>
      <a href="#">
        <ImExit />
        {isSidebarOpen && <span>Dashboard</span>}
      </a>
    </>
  );
};

export default Sidebar;
