import React from 'react';
import Header from './Header';
import clsx from 'classnames';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  const { children } = props;
  return (
    <div>
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
