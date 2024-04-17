import { useEffect, useCallback, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, PrevButton, NextButton } from './ArrowsAndButtons';
import { testimonials } from './TestimonialsByIndex';

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  // For production debugging
  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_API_URI);
    console.log(process.env.API_URI);
  }, []);

  return (
    <section
      id='Testimonials'
      className={`w-full flex flex-col items-center justify-center relative py-32 p-4 bg-black-primary-light`}
    >
      <Image
        src='/dolly.svg'
        className='absolute left-0 bottom-0 hidden lg:block'
        alt='Dolly'
        width={324}
        height={459}
        priority
      />
      <div className='container'>
        <div className='w-full text-center flex flex-col items-center'>
          <Image
            className='w-8 h-8 -mt-8 lg:w-14 lg:h-14'
            src='/quote.svg'
            alt='Quote'
            width={58}
            height={58}
            priority
          />
          <div className='overflow-hidden max-w-full' ref={emblaRef}>
            <div
              className='flex touch-pan-y -ml-4'
              style={{
                backfaceVisibility: 'hidden',
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  className='min-w-0 relative cursor-grab flex flex-col items-center active:cursor-grabbing pl-4 flex-none w-full'
                  key={index}
                >
                  <h3 className='mt-9 text-4xl'>{testimonial.headerQuote}</h3>
                  <p className='mt-7 lg:max-w-2xl text-justify lg:text-center'>
                    {testimonial.testimonialText}
                  </p>
                  <Image
                    src={testimonial.avatarImage}
                    alt={testimonial.reviewerName}
                    width={64}
                    height={64}
                    className='mt-9 rounded-full'
                    priority
                  />
                  <p className='mt-1.5'>{testimonial.reviewerName}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='mt-9 w-full max-w-72 flex flex-row items-center justify-between'>
            <PrevButton onClick={scrollPrev} />
            <div className='w-1/2 flex flex-row items-center justify-evenly'>
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`border-none ${index === selectedIndex ? 'scale-x-[3]' : 'scale-x-100'} duration-200 ease-out`}
                />
              ))}
            </div>
            <NextButton onClick={scrollNext} />
          </div>
        </div>
      </div>
    </section>
  );
}
