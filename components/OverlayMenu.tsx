import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const content = [
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
    name: "Social",
    Link: "/social",
  },
];

const OverlayMenu = (props: any) => {
  // accept useState as prop
  const [active, setActive] = props.activeState;
  const { data } = useSession();

  return (
    <>
      <ul style={{ listStyleType: "none" }} className="bg-zinc-900 h-full">
        <li className="py-4 border-b border-solid border-black">
          <div className="flex flex-col items-center">
            <Link href='/my-profile'>
                <img
                  src={data?.user?.image as string}
                  className="w-24 h-24 rounded-full m-2"
                  alt="My Image"
                  width={500}
                  height={500}
                />
                <p className="text-white">{data?.user?.name}</p>
            </Link>
          </div>
        </li>
        {content.map((item, i) => (
          <li
            key={i}
            className="py-4 border-b border-solid border-black"
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
