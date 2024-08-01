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
          <div className='py-9 flex items-start justify-between relative '>
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

            <div className='flex flex-col gap-2 items-end'>
              <Button variant='outlined' size={2} className='relative w-fit'>
                Contact us
              </Button>
              <address className='regular-2 text-right text-neutral-alpha-11'>
                <span>12 North 5th Avenue</span>
                <span className='block Wilmington, NC 28401'>
                  Wilmington, NC 28401
                </span>
              </address>
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
          <span className='text-neutral-9  medium-3'>{`(c) Breaking Barriers 2024`}</span>
          <ButtonLink size={2} noUnderline>
            Terms of service
          </ButtonLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
