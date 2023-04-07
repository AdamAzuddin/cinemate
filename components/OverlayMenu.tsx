import React from "react";
import Link from "next/link";

const data = [
  {
    name: "My Account",
    Link: "../pages/MyProfile",
  },
  {
    name: "Genre",
    Link: "/../pages/Genre",
  },
  {
    name: "Movies",
    Link: "/../pages/Movies",
  },
  {
    name: "Series",
    Link: "/../pages/Series",
  },
  {
    name: "My List",
    Link: "/../pages/MyList",
  },
  {
    name: "About",
    Link: "/../pages/About",
  },
  {
    name: "Log Out",
    Link: "/../pages/SignIn",
  },
];

const OverlayMenu = (props: any) => {
  // accept useState as prop
  const [active, setActive] = props.activeState
  return (
    <>
      <ul style={{ listStyleType: "none" }} className="bg-zinc-900">
          {data.map((item, i) => (
            <li key={i} style={{padding: "4vh 0", borderBottom: "0.5px solid black"}}>
              <Link
                href={item.Link}
                onClick={() => setActive(false)}
                style={{paddingLeft:"15px" }}
                className="text-white"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>    </>
  );
};

export default OverlayMenu;
