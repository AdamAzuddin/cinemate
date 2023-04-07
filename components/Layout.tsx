import React, { ReactNode } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from './Header';
import { useSession } from 'next-auth/react';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Default Title' }: Props) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  // Set showAuthButton to false for sign-in and sign-up pages
  const showAuthButton = !(router.pathname === '/sign-in' || router.pathname === '/sign-up') && status === 'unauthenticated';

  return (
    <>
      <Header showAuthButton={showAuthButton} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
