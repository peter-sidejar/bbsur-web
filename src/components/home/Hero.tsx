import React from 'react';
import Button from '../ui/Button';
import Image from 'next/image';
import StarCanvas from './StarCanvas';
import { useLayoutContext } from '../layout/LayoutContextProvider';
import clsx from 'classnames';

const partners = [
  {
    src: '/partners/white/RecoveryPlatform.svg',
    width: 156,
    height: 40,
    alt: 'Recovery Platform',
  },
  {
    src: '/partners/white/Vbot.svg',
    width: 48,
    height: 23,
    alt: 'Vbot',
  },
  {
    src: '/partners/white/Triad.svg',
    width: 72,
    height: 22,
    alt: 'Triad',
  },
  {
    src: '/partners/white/IPill.svg',
    width: 75,
    height: 23,
    alt: 'IPill',
  },
  {
    src: '/partners/white/OpiAid.svg',
    width: 74,
    height: 21,
    alt: 'OpiAid',
  },
  {
    src: '/partners/white/SelectLabratory.svg',
    width: 63,
    height: 38,
    alt: 'SelectLabratory',
  },
];

const Hero = () => {
  const { mobileMenuOpened } = useLayoutContext();
  return (
    <div className={'dark relative overflow-x-clip'}>
      <div
        className={clsx(
          'absolute inset-0 top-[-54px] transition duration-300 ease-in-out ',
          mobileMenuOpened ? 'bg-white' : 'bg-off-black'
        )}
      ></div>
      <StarCanvas
        className={clsx(
          'absolute inset-0 top-[-54px] w-full h-full',
          mobileMenuOpened ? 'hidden' : ''
        )}
        numStars={50}
        minSize={1}
        maxSize={2}
      />
      <div className='hidden md:block absolute bottom-[350px] left-[50%] w-[846px] overflow-x-hidden'>
        <Image
          src='/shared/Lights-2.svg'
          alt='background lights'
          className='w-full h-auto'
          width={953}
          height={815}
        />
      </div>

      <section className='relative side-wrapper text-neutral-12 flex flex-col items-start md:items-center pb-[51px] md:pb-[119px] overflow-x-hidden'>
        <div
          className='absolute top-0 bottom-0 left-0 right-0'
          style={{
            backgroundImage: 'url(/shared/Grid.svg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        ></div>

        <h1 className='relative bold-10 md:bold-11 md:text-center max-w-[655px] pt-[24px] md:pt-[70px] white-text-gradient'>
          Breaking Barriers to Substance Use Recovery
        </h1>
        <p className='relative mt-2 max-w-[625px] md:text-center'>
          {`In response to the urgent need for accessible opioid treatment recovery solutions that Break the Barriers to Substance Use Recovery, a dynamic coalition emerges to help identify new and innovative solutions.`}
        </p>
        <Button variant='solid' size={3} className='relative mt-4 md:mt-6'>
          Contact us
        </Button>

        <ul className='relative mt-8 md:mt-[97px] gap-4 md:gap-9 justify-start md:justify-between flex flex-wrap lg:w-[684px]'>
          {partners.map((partner, index) => (
            <Image
              className='shrink-0'
              key={'partner' + index}
              src={partner.src}
              height={partner.height}
              width={partner.width}
              alt={partner.alt}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Hero;
