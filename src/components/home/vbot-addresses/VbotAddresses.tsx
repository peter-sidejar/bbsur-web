import React from 'react';
import vbotAddresses from './vbot-addresses.json';
import VbotAddress from './VbotAddress';
import Link from 'next/link';

const VbotAddresses = () => {
  return (
    <div className='bg-accent-3 py-[80px] md:py-[124px]'>
      <section className='side-wrapper text-neutral-12  bg-accent-3'>
        <div className='flex justify-center'>
          <h2 className='bold-9 md:text-center max-w-[683px]'>
            The VBOT Model
            <br />
            <span className='text-[1.75rem]'>
              (Virtual Based Opioid Treatment)
            </span>
          </h2>
        </div>
        <div className='flex justify-center mt-[56px]'>
          <ul className='flex flex-col gap-2 w-full md:w-[684px]'>
            {vbotAddresses.map((vbotAddress, index) => (
              <li key={index}>
                <VbotAddress
                  title={vbotAddress.title}
                  description={vbotAddress.description}
                />
              </li>
            ))}
          </ul>
          <ul className='flex flex-col gap-2 w-full md:w-[684px]'>
            <li>
              <Link href='https://projectvbot.com/'>Learn More</Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default VbotAddresses;
