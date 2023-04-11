/*set this component to client component
 to make sure using useState,
 useEffect etc is possible in its children */
"use client";

import React from "react";
import SearchBar from "./SearchBar";
import { useState, useEffect, useRef } from "react";
import { IoMdMenu } from "react-icons/io";
import OverlayMenu from "./OverlayMenu";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { FaBell } from "react-icons/fa";

type HeaderProps = {
  showAuthButton: boolean;
};

const Header = ({ showAuthButton }: HeaderProps) => {
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
    <div>
      <div
        style={{
          background: "#0B253F",
        }}
      >
        <div className="px-4 sm:px-6 md:px-8 py-4 flex justify-between items-center">
          {" "}
          <div className="">
            {!active && (
              <IoMdMenu
                size={32}
                className="text-white text-2xl md:text-3xl lg:text-4xl"
                onClick={handleMenuClick}
              />
            )}
          </div>
          <div>
            <SearchBar />
          </div>
          <div className="px-5 ">
            <FaBell size={24} color="white" />
          </div>
        </div>
      </div>
      <div
        ref={menuRef}
        style={{
          position: "fixed",
          width: "60%",
          height: "100vh",
          background: "white ",
          // animation
          transform: active ? "translateX(0%)" : "translateX(-100%)",
          transition: "all 0.5s ease-in-out",
          zIndex: "1000",
        }}
      >
        <OverlayMenu activeState={[active, setActive]} />
      </div>
    </div>
  );
};

export default Header;
