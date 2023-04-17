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
      <div className="flex">
        <div className="bg-blue fixed top-0 bottom-0 left-0">
          <Sidebar isSidebarOpen={isSidebarOpen} setIsSideBarOpen={handleToggleSidebar} />
        </div>

        <div className="flex flex-col w-full overflow-y-auto" style={{ marginLeft: isSidebarOpen ? '150px' : '60px' }}>
          <Header showAuthButton={showAuthButton} />
          <main >{children}</main>
        </div>
      </div>
    </>
  );
};
export default Layout;
