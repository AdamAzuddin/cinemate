import React from "react";
import Link from "next/link";

const data = [
  {
    name: "My Account",
    Link: "/my-profile",
  },
  {
    name: "Genre",
    Link: "/genre",
  },
  {
    name: "Movies",
    Link: "/movies",
  },
  {
    name: "Series",
    Link: "/series",
  },
  {
    name: "My List",
    Link: "/my-list",
  },
  {
    name: "About",
    Link: "/about",
  },
  {
    name: "Log Out",
    Link: "/sign-in",
  },
];

const OverlayMenu = (props: any) => {
  // accept useState as prop
  const [active, setActive] = props.activeState;
  return (
    <>
      <ul style={{ listStyleType: "none" }} className="bg-zinc-900 h-full">
        {data.map((item, i) => (
          <li
            key={i}
            style={{ padding: "4vh 0", borderBottom: "0.5px solid black" }}
          >
            <Link
              href={item.Link}
              onClick={() => setActive(false)}
              style={{ paddingLeft: "15px" }}
              className="text-white text-xl"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>{" "}
    </>
  );
};

export default OverlayMenu;
