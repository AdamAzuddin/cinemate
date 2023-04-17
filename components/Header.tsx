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
import Search from "./Search";

type HeaderProps = {
  showAuthButton: boolean;
};

const Header = ({ showAuthButton }: HeaderProps) => {
  const [active, setActive] = useState(false);
  // set an empty div element
  const menuRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  return (
    <header className="w-full flex">
      <div className=" flex flex-1 items-center ml-3">
        <div className="text-white">Cinemate</div>
      </div>
      <Search />
      <div className="flex flex-1 items-center">
        {showAuthButton && (
          <div>
            <Button variant="contained" onClick={() => router.push("/sign-in")}>
              Log in
            </Button>
            <Button
              variant="outlined"
              onClick={() => router.push("/sign-up")}
              className="ml-5"
            >
              Sign up
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
