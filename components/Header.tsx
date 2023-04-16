
/*set this component to client component
 to make sure using useState,
 useEffect etc is possible in its children */
 "use client";

import React from "react";
import { useState, useEffect, useRef } from "react";
import { IoMdMenu } from "react-icons/io";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { FaBell } from "react-icons/fa";
import Search  from "./Search";

type HeaderProps = {
  showAuthButton: boolean;
};


const Header = ({ showAuthButton }: HeaderProps) => {
  const [active, setActive] = useState(false);
  // set an empty div element
  const menuRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  return (
    <header  className="flex items-center justify-between bg-gray-800 p-4">
      <div className="flex items-center space-x-2 flex-1 ">
        <IoMdMenu  size={32} color="white"/>
        <Search/>
      </div>
      {showAuthButton && (
            <div>
              <div style={{ margin: "5px" }}>
                <Button
                  variant="contained"
                  onClick={() => router.push("/sign-in")}
                >
                  Log in
                </Button>
              </div>
              <div style={{ margin: "5px" }}>
                <Button
                  variant="outlined"
                  onClick={() => router.push("/sign-up")}
                >
                  Sign up
                </Button>
              </div>
            </div>
          )}
    </header>
  );
};

export default Header;
