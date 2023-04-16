import React, { ReactNode } from 'react';
import Header from './Header';
type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Default Title' }: Props) => {

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;