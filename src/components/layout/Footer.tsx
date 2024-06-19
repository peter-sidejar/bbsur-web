import React from 'react';
import NextLink from 'next/link';
import ButtonLink from '../ui/ButtonLink';
import LogoSvg from '../ui/svg/others/LogoSvg';
import Button from '../ui/Button';

const Footer = () => {
  return (
    <footer className='bg-background-3'>
      <div className='side-wrapper'>
        <div className='border-b border-neutral-alpha-4'>
          <div className='py-9 flex items-center justify-between relative '>
            <div className='absolute left-0 right-0 mx-auto w-fit hidden md:block'>
              <div className='flex gap-8'>
                <NextLink href='/#the-coalition'>
                  <ButtonLink noUnderline size={2}>
                    The Coalition
                  </ButtonLink>
                </NextLink>
                <NextLink href='/#news'>
                  <ButtonLink noUnderline size={2}>
                    News
                  </ButtonLink>
                </NextLink>
              </div>
            </div>
            <NextLink href='/' className='relative'>
              <LogoSvg className='w-auto h-[18px]' />
            </NextLink>

            <div className='flex items-center gap-2'>
              <Button variant='outlined' size={2} className='relative'>
                Contact us
              </Button>
            </div>
          </div>
          <div className='flex flex-col gap-5 pb-9 md:hidden'>
            <NextLink href='/#the-coalition'>
              <ButtonLink noUnderline size={2}>
                The Coalition
              </ButtonLink>
            </NextLink>
            <NextLink href='/#news'>
              <ButtonLink noUnderline size={2}>
                News
              </ButtonLink>
            </NextLink>
          </div>
        </div>

        <div className='pt-9 pb-[124px] flex justify-between items-center'>
          <span className='text-neutral-9  medium-3'>{`(c) BBSUR 2024`}</span>
          <ButtonLink size={2} noUnderline>
            Terms of service
          </ButtonLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
