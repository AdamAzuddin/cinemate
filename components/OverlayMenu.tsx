import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const content = [
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
  const { data } = useSession();

  return (
    <>
      <ul style={{ listStyleType: "none" }} className="bg-zinc-900 h-full">
        <li>
          <div className="flex flex-col items-center">
            <img
              src={data?.user?.image as string}
              className="w-24 h-24 rounded-full"
              alt="My Image"
              width={500}
              height={500}
            />
            <p className="text-white">{data?.user?.name}</p>
          </div>
        </li>
        {content.map((item, i) => (
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
