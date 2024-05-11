import React from 'react';
import Image from 'next/image';
import ButtonLink from '../ui/ButtonLink';
import ArrowTopRight from '../ui/svg/icons/ArrowTopRight';
import NextLink from 'next/link';

const partners = [
  {
    src: '/partners/black/RecoveryPlatform.svg',
    width: 142,
    height: 23,
    alt: 'Recovery Platform',
    description: `TRP serves as a "collaborative care" technology platform designed to support a SAMHSA-compliant Recovery Treatment model.`,
    href: '#',
  },
  {
    src: '/partners/black/Vbot.svg',
    width: 48,
    height: 23,
    alt: 'Vbot',
    description: `The North Carolina Medical Society Foundation has spearheaded Project Virtual-Based Opioid Treatment (VBOT) in North Carolina as part of its broader mission to enhance and expand access to healthcare services for all residents of the state.`,
    href: '#',
  },
  {
    src: '/partners/black/Triad.svg',
    width: 72,
    height: 22,
    alt: 'Triad',
    description: `As the first NC VBOT provider of virtual Medication Assisted Treatment (MAT) in North Carolina, Triad excels in delivering comprehensive care.`,
    href: '#',
  },
  {
    src: '/partners/black/IPill.svg',
    width: 75,
    height: 23,
    alt: 'IPill',
    description: `iPill serves as a secure medication dispenser specifically designed for patients undergoing treatment for Medication Opioid Use Disorder (MOUD).`,
    href: '#',
  },
  {
    src: '/partners/black/OpiAid.svg',
    width: 74,
    height: 21,
    alt: 'OpiAid',
    description: `OpiAid delivers an innovative and valuable tool in the realm of addiction treatment.`,
    href: '#',
  },
  {
    src: '/partners/black/SelectLabratory.svg',
    width: 63,
    height: 38,
    alt: 'SelectLabratory',
    description: `SLP, a seasoned laboratory management company, is dedicated to supporting its medical practice clients by providing services that facilitate the delivery of accurate Toxicology testing.`,
    href: '#',
  },
];

const Coalition = () => {
  return (
    <section className='side-wrapper mt-[80px] md:mt-[124px] text-neutral-12'>
      <h2 className='bold-9 md:text-center'>The Coalition</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-[56px] items-stretch'>
        {partners.map((partner, index) => (
          <div
            key={'partner-card' + index}
            className='max-h-[501px] w-full aspect-[0.86] md:aspect-[1.34] lg:aspect-[0.86] bg-panel-1 flex flex-col p-5 rounded-[12px] card-shadow gap-7 justify-between'
          >
            <div className='flex flex-col gap-7'>
              <Image
                src={partner.src}
                alt='background lights'
                width={partner.width}
                height={partner.height}
              />

              <p className='regular-4'>{partner.description}</p>
            </div>
            <NextLink
              target='_blank'
              href={partner.href as string}
              className='w-fit'
            >
              <ButtonLink
                size={2}
                noUnderline
                EndIcon={ArrowTopRight}
                highContrast
              >
                Learn more
              </ButtonLink>
            </NextLink>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Coalition;
