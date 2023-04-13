import { Search } from "./Search/Search";
import { SearchIcon } from "./SearchIcon";
import { Logo } from "./Logo/Logo";
import { Play } from "./Play/Play";
import { PlayIcon } from "./PlayIcon";
import { memo } from "react";
import type { FC } from "react";
import classes from "./Header.module.css";
import resets from "../_resets.module.css";
import { IoMdMenu } from "react-icons/io";

interface Props {
  className?: string;
}
/* @figmaId 1244:678 */
export const Header: FC<Props> = memo(function Header(props = {}) {
  return (
    <>
      <div className={classes.poster}></div>
      <div className={classes.bG}></div>
      <div className={classes.search2}>
        <Search
          className={classes.search}
          swap={{
            icon: <SearchIcon className={classes.icon} />,
          }}
        />
      </div>
      <div className={classes.menu}>
        <div className={`${classes.menu2} rounded-full bg-blue-500 flex items-center justify-center w-20 h-20`}>
          <IoMdMenu
            size={35}
            className="text-white text-2xl md:text-3xl lg:text-4xl"
          />
        </div>
      </div>
      <Logo className={classes.logo} classes={{ tv: classes.tv }} />
      <div className={classes.descriptionBox}>
        <div className={classes.johnWick3Parabellum}>
          John Wick 3 : Parabellum
        </div>
        <div className={classes.rating}>
          <div className={classes.iMDB}>
            <div className={classes.mV5BMTk3ODA4Mjc0NF5BMl5BcG5nXk}></div>
            <div className={classes._86100}>86.0 / 100</div>
          </div>
          <div className={classes.rottenTomatoes}>
            <div className={classes.pngItem_13810561}></div>
            <div className={classes._97}>97%</div>
          </div>
        </div>
        <div className={classes.johnWickIsOnTheRunAfterKilling}>
          John Wick is on the run after killing a member of the international
          assassins&#39; guild, and with a $14 million price tag on his head, he
          is the target of hit men and women everywhere.
        </div>
        <button className={classes.button}>
          <Play
            swap={{
              icon: <PlayIcon className={classes.icon3} />,
            }}
          />
          <div className={classes.watchTrailer}>Watch trailer</div>
        </button>
      </div>
      <div className={classes.pagination}>
        <div className={classes._1}>1</div>
        <div className={classes._2}>2</div>
        <div className={classes._3}>3</div>
        <div className={classes._4}>4</div>
        <div className={classes._5}>5</div>
      </div>
      <div className={classes.rectangle1}></div>
    </>
  );
});

/*set this component to client component
 to make sure using useState,
 useEffect etc is possible in its children */
/* "use client";

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
 */
