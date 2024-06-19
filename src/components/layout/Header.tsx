import React, { useState } from 'react';
import LogoSvg from '../ui/svg/others/LogoSvg';
import NextLink from 'next/link';
import Button from '../ui/Button';
import ButtonLink from '../ui/ButtonLink';
import AlignmentJustifyIcon from '../ui/svg/icons/AlignmentJustifyIcon';
import SmallCloseIcon from '../ui/svg/icons/SmallCloseIcon';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'classnames';
import { useLayoutContext } from './LayoutContextProvider';
import { useRouter } from 'next/router';

const Header = () => {
  const { mobileMenuOpened, setMobileMenuOpened } = useLayoutContext();
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  const toggleMobileMenu = () => {
    setMobileMenuOpened(!mobileMenuOpened);
  };
  return (
    <div className='relative z-[10] '>
      <nav
        className={clsx(
          'flex items-center justify-between relative side-wrapper h-[54px]',
          !mobileMenuOpened && isHomePage ? 'dark' : ''
        )}
      >
        <div className='absolute left-0 right-0 mx-auto w-fit hidden md:block'>
          <div className='flex gap-8'>
            <NextLink href='#the-coalition'>
              <ButtonLink noUnderline size={2}>
                The Coalition
              </ButtonLink>
            </NextLink>
            <NextLink href='#news'>
              <ButtonLink noUnderline size={2}>
                News
              </ButtonLink>
            </NextLink>
          </div>
        </div>
        <NextLink href='/' className='relative text-neutral-12'>
          <LogoSvg className='w-auto h-[18px]' />
        </NextLink>

        <div className='flex items-center gap-2'>
          <NextLink href='/#contact-us'>
            <Button variant='outlined' size={2} className='relative'>
              Contact us
            </Button>
          </NextLink>

          <button
            className='h-10 w-10 flex items-center justify-center md:hidden rounded-[8px] text-neutral-12'
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpened ? (
              <SmallCloseIcon className='w-5 h-5' />
            ) : (
              <AlignmentJustifyIcon className='w-5 h-5' />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpened && (
          <motion.div
            className='fixed top-[54px] left-0 right-0 bottom-0 z-[100] bg-panel-1'
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ stiffness: 100 }}
          >
            <ul className='side-wrapper medium-7 text-neutral-12 pt-3'>
              <li>
                <NextLink href='#the-coalition'>The Coalition</NextLink>
              </li>
              <li className='mt-6'>
                <NextLink href='#news'>News</NextLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
