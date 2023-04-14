
/*set this component to client component
 to make sure using useState,
 useEffect etc is possible in its children */
 "use client";

import React from "react";
import { useState, useEffect, useRef } from "react";
import { IoMdMenu } from "react-icons/io";
import OverlayMenu from "../OverlayMenu";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { FaBell } from "react-icons/fa";
import Search  from "./Search/Search";


const Header = () => {
  const [active, setActive] = useState(false);
  // set an empty div element
  const menuRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      // checks if the menuRef exists and
      //if the click event target is not contained within the menuRef element
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActive(false);
      }
    };

    //if mouse is clicked
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuRef]);

  useEffect(() => {
    // body is not scrollable when menu is in
    // active state
    document.body.style.overflow = active ? "hidden" : "auto";
  }, [active]);

  useEffect(() => {
    // root html element is unscrollable if menu active
    document.documentElement.style.overflow = active ? "hidden" : "auto";
  });

  const handleMenuClick = () => {
    setActive(!active);
  };

  return (
    <header  className="flex items-center justify-between bg-gray-800 p-4">
      <div className="flex items-center space-x-2 flex-1 ">
        <IoMdMenu  size={32} color="white"/>
        <Search/>
      </div>
      <div>
        <FaBell size={32} color="white"/>
      </div>
    </header>
  );
};

export default Header;

