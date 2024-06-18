import React, { useEffect } from 'react';
import Script from 'next/script';

const ContactUs = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://webforms.pipedrive.com/f/loader';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='side-wrapper py-[80px] md:py-[124px]' id='contact-us'>
      <div className='flex flex-col items-center '>
        <h3 className='bold-9 text-center text-neutral-12'>Ready to talk?</h3>
        <div className='mt-[46px] md:w-[332px]'>
          <div
            className='pipedriveWebForms flex justify-center'
            data-pd-webforms='https://webforms.pipedrive.com/f/1yq8O9Gqg6fbrbgLBVrOQCKIIdmBTSq95TSHtaNpPSZ1ndhklW1j6uqN5vnNmPQbh'
          >
            {/* <Script src='https://webforms.pipedrive.com/f/loader'></Script> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
