import React, { useState } from 'react';
import LogoSvg from '../ui/svg/others/LogoSvg';
import NextLink from 'next/link';
import Button from '../ui/Button';
import ButtonLink from '../ui/ButtonLink';
import AlignmentJustifyIcon from '../ui/svg/icons/AlignmentJustifyIcon';
import SmallCloseIcon from '../ui/svg/icons/SmallCloseIcon';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };
  return (
    <div className='relative z-[10] '>
      <nav className='dark flex items-center justify-between relative side-wrapper h-[54px]'>
        <div className='absolute left-0 right-0 mx-auto w-fit hidden md:block'>
          <div className='flex gap-8'>
            <NextLink href='#'>
              <ButtonLink noUnderline size={2}>
                The Coalition
              </ButtonLink>
            </NextLink>
            <NextLink href='#'>
              <ButtonLink noUnderline size={2}>
                News
              </ButtonLink>
            </NextLink>
          </div>
        </div>
        <NextLink href='/' className='relative text-neutral-12'>
          <LogoSvg className='w-[80px] h-[18px]' />
        </NextLink>

        <div className='flex items-center gap-2'>
          <Button variant='outlined' size={2} className='relative'>
            Contact us
          </Button>
          <button
            className='h-10 w-10 flex items-center justify-center md:hidden rounded-[8px] text-neutral-12'
            onClick={toggleMobileMenu}
          >
            {openMobileMenu ? (
              <SmallCloseIcon className='w-5 h-5' />
            ) : (
              <AlignmentJustifyIcon className='w-5 h-5' />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {openMobileMenu && (
          <motion.div
            className='fixed top-[54px] left-0 right-0 bottom-0 z-[100] bg-panel-1'
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ stiffness: 100 }}
          >
            <ul className='side-wrapper medium-7 text-neutral-12 pt-3'>
              <li>
                <NextLink href={'#'}>The Coalition</NextLink>
              </li>
              <li className='mt-6'>
                <NextLink href={'#'}>News</NextLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
