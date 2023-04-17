import React, { useState } from "react";
import { useRouter } from 'next/router';
import { BiMoviePlay } from "react-icons/bi";
import { BiCameraMovie } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { BsBookmarkPlus } from "react-icons/bs";
import { FaShapes } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { HiUserCircle } from "react-icons/hi";
import { IoMdMenu } from "react-icons/io";
import { BsMegaphone } from "react-icons/bs";
import Link from "next/link";
import SidebarItems from "./SidebarItems";

interface Props {
  isSidebarOpen: boolean;
  setIsSideBarOpen: () => void;
}

const Sidebar: React.FC<Props> = ({ isSidebarOpen, setIsSideBarOpen }) => {

  const router = useRouter()
  const isProfile = router.pathname=='/my-profile'
  const isHome = router.pathname=='/'
  const isMovies = router.pathname=='/movies'
  const isSeries = router.pathname=='/series'
  const isMyList = router.pathname=='/my-list'
  const isGenres = router.pathname=='/genre'
  const isComingSoon = router.pathname=='/coming-soon'
  return (
    <div className={`h-screen px-2 flex flex-col`} style={{backgroundColor: "#1A1A1A"}}>
      <IoMdMenu size={32} color="white" onClick={setIsSideBarOpen} />
      <SidebarItems icon={<HiUserCircle/>} isActive={isProfile} isSidebarOpen={isSidebarOpen} name="Account" toPage="my-profile"/>
      <SidebarItems icon={<AiOutlineHome/>} isActive={isHome} isSidebarOpen={isSidebarOpen} name="Home" toPage=""/>
      <SidebarItems icon={<BiCameraMovie/>} isActive={isMovies} isSidebarOpen={isSidebarOpen} name="Movies" toPage="movies"/>
      <SidebarItems icon={<BiMoviePlay/>} isActive={isSeries} isSidebarOpen={isSidebarOpen} name="Series" toPage="series"/>
      <SidebarItems icon={<BsBookmarkPlus/>} isActive={isMyList} isSidebarOpen={isSidebarOpen} name="My list" toPage="my-list"/>
      <SidebarItems icon={<FaShapes/>} isActive={isGenres} isSidebarOpen={isSidebarOpen} name="Genre" toPage="genre"/>
      <SidebarItems icon={<BsMegaphone/>} isActive={isComingSoon} isSidebarOpen={isSidebarOpen} name="Coming Soon" toPage="coming-soon"/>
      <div className="mt-auto">
        <div className="flex bottom-0 absolute">
          <div className="flex-grow"></div>
          <div>
            <ImExit size={32} color="#898989"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
