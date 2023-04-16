import React, { ReactNode } from "react";
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

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col">
          <Header showAuthButton={showAuthButton} />
          <main className=" w-screen">{children}</main>
        </div>
      </div>
    </>
  );
};
export default Layout;
