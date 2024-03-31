import { useState } from 'react';
import Image from 'next/image';

export default function CallToAction() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    // TODO: Send email
    alert('Sending email to ' + email);

    setEmail('');
  };

  return (
    <section
      id='CallToAction'
      className='w-full max-w-6xl py-10 lg:py-24 lg:pb-36 flex flex-col items-center justify-center container p-4'
    >
      <div className='w-full max-w-lg lg:max-w-full flex flex-col lg:flex-row justify-between'>
        <div>
          <Image
            src='/items.png'
            alt='Isometric Storage Room'
            width={480}
            height={480}
            priority
            className='relative z-10 w-full h-full'
          />
        </div>
        <div className='relative flex flex-col lg:items-end justify-between'>
          <div className='mt-10 lg:-mt-4'>
            <div className='text-center lg:text-right text-xl'>
              <div className='uppercase mt-4'>
                No matter how big or how small
              </div>
              <br />
              <div className='uppercase'>
                Whether it is wide or if it&apos;s tall
              </div>
              <br />
              <div className='uppercase'>Fits on a shelf or a whole wall</div>
              <br />
              <div className='text-4xl'>Simple Storage Solutions</div>
              <br />
              <div className='uppercase'>For one and for all</div>
            </div>
          </div>
          <div className='bg-accent-primary min-w-[923px] py-11 px-12 rounded-lg lg:flex flex-col items-end justify-center absolute right-0 -bottom-24 hidden'>
            <p className='text-white text-xl'>GET MORE INFO IN YOUR INBOX</p>
            <form
              className='mt-6 flex flex-row items-end'
              onSubmit={handleEmailSubmit}
            >
              <input
                type='email'
                value={email}
                placeholder='Email Address'
                onChange={handleEmailChange}
                className='w-96 p-4 text-white bg-transparent border-b border-solid border-white placeholder:text-white placeholder:opacity-50 focus:outline-accent-primary-hover'
              />
              <button
                type='submit'
                className='ml-4 bg-transparent cursor-pointer'
              >
                <Image
                  src='/arrow.svg'
                  alt='Arrow'
                  width={30}
                  height={30}
                  priority
                />
              </button>
            </form>
          </div>
          <div className='lg:hidden bg-accent-tertiary w-full p-8 mt-8 flex flex-col items-center justify-center rounded-lg'>
            <p className='heading_tertiary text_white text_center'>
              GET MORE INFO IN YOUR INBOX
            </p>
            <form
              className='mt-6 w-full flex flex-col items-center justify-center'
              onSubmit={handleEmailSubmit}
            >
              <input
                type='email'
                value={email}
                className='rounded-lg w-full p-4 text-black-primary border-none placeholder:text-black-primary placeholder:opacity-50 focus:outline-accent-primary-hover'
                placeholder='Email Address'
                onChange={handleEmailChange}
              />
              <button
                type='submit'
                className='rounded-lg w-full p-4 mt-4 bg-accent-primary border-none flex flex-row items-center justify-center focus:outline-accent-primary-hover'
              >
                <div className='text_white'>SEND ME INFO</div>
                <Image
                  src='/arrow.svg'
                  alt='Arrow'
                  width={22}
                  height={22}
                  priority
                  className='ml-4'
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
