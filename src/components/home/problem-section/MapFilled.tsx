import React from 'react';
import Image from 'next/image';

const MapFilled = () => {
  return (
    <div className='map-svg'>
      <Image src='/map/MapFilled.svg' alt='map' width={1036} height={444} />
    </div>
  );
};

export default MapFilled;
