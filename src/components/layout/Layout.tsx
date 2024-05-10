import React from 'react';
import Header from './Header';
import clsx from 'classnames';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  const { children } = props;
  return (
    <div>
      <div className='flex flex-col min-h-screen'>
        <div className='grow'>
          <Header />
          <main>{children}</main>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
