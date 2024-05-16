import React from 'react';
import Description from './Description';
import Map from './Map';
// import { useInView } from 'react-intersection-observer';
// import MapFilled from './MapFilled';

const ProblemSection = () => {
  // const { ref, inView } = useInView({
  //   /* Options for the IntersectionObserver */
  //   threshold: 0,
  // });

  // const [isCentered, setIsCentered] = useState(false);

  // const checkIfCentered = () => {
  //   const element = document.getElementById('mapWrapper');
  //   if (element) {
  //     const rect = element.getBoundingClientRect();
  //     const windowHeight =
  //       window.innerHeight || document.documentElement.clientHeight;
  //     const elementCenter = rect.top + rect.height / 2;
  //     const isElementCentered =
  //       elementCenter >= windowHeight / 2 - 50 &&
  //       elementCenter <= windowHeight / 2 + 50;
  //     setIsCentered(isElementCentered);
  //   }
  // };

  // const handleWheel = (e: WheelEvent) => {
  //   e.preventDefault();
  //   const element = document.getElementById('mapWrapper');
  //   if (element) {
  //     element.scrollTop += e.deltaY;
  //     const atTop = element.scrollTop === 0;
  //     const atBottom =
  //       element.scrollHeight - element.scrollTop === element.clientHeight;
  //     if (atTop || atBottom) {
  //       document.body.removeEventListener('wheel', handleWheel);
  //       document.body.classList.remove('no-scroll');
  //     } else {
  //       document.body.classList.add('no-scroll');
  //     }
  //   }
  // };

  // useEffect(() => {
  //   if (inView) {
  //     checkIfCentered();
  //     window.addEventListener('scroll', checkIfCentered);
  //   } else {
  //     window.removeEventListener('scroll', checkIfCentered);
  //   }
  //   return () => {
  //     window.removeEventListener('scroll', checkIfCentered);
  //   };
  // }, [inView]);

  // useEffect(() => {
  //   if (isCentered) {
  //     document.body.classList.add('no-scroll');
  //     document.body.addEventListener('wheel', handleWheel);
  //   } else {
  //     document.body.classList.remove('no-scroll');
  //     document.body.removeEventListener('wheel', handleWheel);
  //   }
  // }, [isCentered]);

  return (
    <section className='side-wrapper py-[80px] md:py-[124px] '>
      <Description />

      {/* <div
        id='mapWrapper'
        ref={ref}
        className='relative hidden xl:block hidden-scroll overflow-y-auto xl:h-[444px]  mt-[80px] md:mt-[56px]'
      >
        <div>
          <div className='sticky top-0'>
            <Map />
          </div>

          <div className='sticky top-0'>
            <MapFilled />
          </div>
        </div>

        <div className='pt-[56px] flex justify-center'>
          <p className=' relative regular-4 w-[684px]'>
            Innovative solutions are necessary to ensure equitable access to
            life-saving treatment and support services, bridging the urban-rural
            gap and providing essential care to those in need, particularly
            veterans.
          </p>
        </div>
      </div> */}
      <div className='relative mt-[80px] md:mt-[56px]'>
        <div>
          <Map />
        </div>

        <div className='pt-[56px] flex justify-center'>
          <p className=' relative regular-4 w-[684px]'>
            Innovative solutions are necessary to ensure equitable access to
            life-saving treatment and support services, bridging the urban-rural
            gap and providing essential care to those in need, particularly
            veterans.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
