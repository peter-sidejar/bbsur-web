import React from 'react';
import Image from 'next/image';
import NextLink from 'next/link';

const PressCard: React.FC<{
  press: {
    title: string;
    img: string;
    description: string;
    link: string;
  };
}> = (props) => {
  const { title, img, description, link } = props.press;
  return (
    <div className='h-[384px] rounded-[12px] relative overflow-hidden pt-[262px] p-5 border border-neutral-alpha-4 card-shadow'>
      <div className='absolute inset-0'>
        <Image
          src={img}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          alt={title}
        />
      </div>
      <div className='absolute top-[223px] h-[198px] inset-x-[-316px] bg-overlay-dark-12 blur-[40px]'></div>
      <div className='dark cursor-pointer group absolute bottom-5 right-5 left-5'>
        <NextLink href={link}>
          <h6 className='bold-4 line-clamp-2 md:line-clamp-1 overflow-ellipsis text-neutral-12 group-hover:underline max-w-[417px]'>
            {title}
          </h6>
          <p className='pl-[11px] md:pl-0 line-clamp-2 overflow-ellipsis text-neutral-alpha-11 regular-3 mt-[2px] max-w-[652px]'>
            {description}
          </p>
        </NextLink>
      </div>
    </div>
  );
};

export default PressCard;
