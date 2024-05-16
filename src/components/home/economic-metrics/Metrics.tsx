import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = (height: string) => ({
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: height,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
});

const Metrics = () => {
  return (
    <div className='mobile-full-side-wrapper'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 text-neutral-12 mt-[56px]'>
        <div className='bg-panel-1 rounded-[12px] p-5 flex flex-col h-[384px] gap-10 justify-between border border-neutral-alpha-4 card-shadow'>
          <h6 className='text-center bold-4 shrink-0'>
            The Economic Cost of the Opioid Epidemic
          </h6>

          <motion.div
            className='grid grid-cols-3 gap-7 md:gap-5 xl:gap-9 grow items-end'
            variants={container}
            initial='hidden'
            whileInView={'visible'}
            viewport={{ once: true }}
          >
            <motion.div
              className='h-[88.9%] flex flex-col gap-4'
              variants={item('88.9%')}
            >
              <span className='text-center medium-3 shrink-0'>
                $1.04 Trillion
              </span>
              <div className='w-full bg-accent-9 grow rounded-[12px]'></div>
              <span className='text-center medium-3 shrink-0'>2018</span>
            </motion.div>
            <motion.div
              className='h-[77%] flex flex-col gap-4'
              variants={item('77%')}
            >
              <span className='text-center medium-3 shrink-0'>
                $0.98 Trillion
              </span>
              <div className='w-full bg-accent-9 grow rounded-[12px]'></div>
              <span className='text-center medium-3 shrink-0'>2019</span>
            </motion.div>
            <motion.div
              className='h-full flex flex-col gap-4'
              variants={item('100%')}
            >
              <span className='text-center medium-3 shrink-0'>
                $1.5 Trillion
              </span>
              <div className='w-full bg-accent-9 grow rounded-[12px]'></div>
              <span className='text-center medium-3 shrink-0'>2020</span>
            </motion.div>
          </motion.div>
        </div>
        <div className='bg-panel-1 rounded-[12px] p-5 flex flex-col h-[384px] gap-10 justify-between border border-neutral-alpha-4 card-shadow'>
          <h6 className='text-center bold-4 shrink-0'>
            CDC Reports Overdose Deaths Increased
          </h6>
          <motion.div
            className='grid grid-cols-4 gap-5 xl:gap-6 grow items-end'
            variants={container}
            initial='hidden'
            whileInView={'visible'}
            viewport={{ once: true }}
          >
            <motion.div
              className='h-[58.6%] flex flex-col gap-4'
              variants={item('58.6%')}
            >
              <span className='text-center medium-3 shrink-0'>75k</span>
              <div className='w-full bg-accent-9 grow rounded-[12px]'></div>
              <span className='text-center medium-3 shrink-0'>2020</span>
            </motion.div>
            <motion.div
              className='h-[67.9%] flex flex-col gap-4'
              variants={item('67.9%')}
            >
              <span className='text-center medium-3 shrink-0'>80k</span>
              <div className='w-full bg-accent-9 grow rounded-[12px]'></div>
              <span className='text-center medium-3 shrink-0'>2021</span>
            </motion.div>
            <motion.div
              className='h-[90.4%] flex flex-col gap-4'
              variants={item('90.4%')}
            >
              <span className='text-center medium-3 shrink-0'>105k</span>
              <div className='w-full bg-accent-9 grow rounded-[12px]'></div>
              <span className='text-center medium-3 shrink-0'>2022</span>
            </motion.div>
            <motion.div
              className='h-full flex flex-col gap-4'
              variants={item('100%')}
            >
              <span className='text-center medium-3 shrink-0'>110k</span>
              <div
                className='w-full bg-accent-3 grow rounded-[12px]'
                style={{
                  backgroundImage: 'url(/shared/Slanted-Pattern.png)',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'repeat',
                  backgroundPosition: 'center',
                }}
              ></div>
              <span className='text-center medium-3 shrink-0'>2023</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
