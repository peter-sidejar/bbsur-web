import React from 'react';
import Image from 'next/image';
import PressCard from './PressCard';
const presses = [
  {
    title: 'Title of the The Economic Cost of the Opioid Epidemic',
    img: '/press/press-1.png',
    description: `The staggering cost of the opioid epidemic has imposed a heavy burden on the nation's economy, straining resources allocated for healthcare, law enforcement, and social services. `,
    link: 'https://example.com',
  },
  {
    title: 'Title of the The Economic Cost of the Opioid Epidemic',
    img: '/press/press-2.png',
    description: `The staggering cost of the opioid epidemic has imposed a heavy burden on the nation's economy, straining resources allocated for healthcare, law enforcement, and social services. `,
    link: 'https://example.com',
  },
  {
    title: 'Title of the The Economic Cost of the Opioid Epidemic',
    img: '/press/press-3.png',
    description: `The staggering cost of the opioid epidemic has imposed a heavy burden on the nation's economy, straining resources allocated for healthcare, law enforcement, and social services. `,
    link: 'https://example.com',
  },
];

const Press = () => {
  return (
    <section
      className='side-wrapper py-[80px] md:py-[124px] text-neutral-12'
      id='news'
    >
      <h2 className='bold-9 md:text-center'>Mentions in Press</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[56px]'>
        {presses.map((press, index) => (
          <PressCard key={index} press={press} />
        ))}
      </div>
    </section>
  );
};

export default Press;
