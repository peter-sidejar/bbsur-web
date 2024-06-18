import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ContactUs from '../home/Contactus';

const Layout: React.FC<{
  children: React.ReactNode;
  hideContactUs?: boolean;
}> = (props) => {
  const { children, hideContactUs } = props;
  return (
    <div>
      <div className='flex flex-col min-h-screen'>
        <div className='grow'>
          <Header />
          <main>{children}</main>
          {!hideContactUs && <ContactUs />}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
