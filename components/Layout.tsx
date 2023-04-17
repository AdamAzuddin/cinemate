import React, { ReactNode, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./Header";
import { useSession } from "next-auth/react";
import Sidebar from "./Sidebar";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Default Title" }: Props) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  // Set showAuthButton to false for sign-in and sign-up pages
  const showAuthButton =
    !(router.pathname === "/sign-in" || router.pathname === "/sign-up") &&
    status === "unauthenticated";

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function handleToggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <>
      <input
        type="checkbox"
        id="check"
        checked={isSidebarOpen}
        onChange={handleToggleSidebar}
      />
      <div className="flex">
        <div className="bg-blue">
          <Sidebar isSidebarOpen={isSidebarOpen} />
        </div>

        <div className="flex flex-col w-full ">
          <Header showAuthButton={showAuthButton} />
          <main className="">{children}</main>
        </div>
      </div>
    </>
  );
};
export default Layout;
