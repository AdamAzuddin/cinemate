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

interface Props {
  isSidebarOpen: boolean;
  setIsSideBarOpen: Function;
}

const Sidebar: React.FC<Props> = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function handleToggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }
  return (
    <div className={`h-screen bg-blue-600 px-2 flex flex-col`}>
      <IoMdMenu size={32} color="white" onClick={handleToggleSidebar}/>
      <div className="flex">
          <HiUserCircle size={32}/>
          {isSidebarOpen && <span>John doe</span>}
      </div>
      <div className="flex">
          <AiOutlineHome size={32}/>
          {isSidebarOpen && <span>John doe</span>}
      </div>
      <div className="flex">
          <BiCameraMovie size={32}/>
          {isSidebarOpen && <span>John doe</span>}
      </div>
      <div className="flex">
          <BiMoviePlay  size={32}/>
          {isSidebarOpen && <span>John doe</span>}
      </div>
      <div className="flex">
          <BsBookmarkPlus  size={32}/>
          {isSidebarOpen && <span>John doe</span>}
      </div>
      <div className="flex">
          <FaShapes size={32}/>
          {isSidebarOpen && <span>John doe</span>}
      </div>
      <div className="flex">
          <GrAnnounce size={32}/>
          {isSidebarOpen && <span>John doe</span>}
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