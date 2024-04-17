import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useUser } from '@clerk/nextjs';

export default function Navbar() {
  const { isSignedIn } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className='w-full py-1 px-4 lg:flex items-center justify-center hidden'>
        <div className='flex flex-row items-center justify-between w-full max-w-6xl'>
          <div>
            <Link href='/'>
              <Image
                src='/logo.svg'
                alt='BoxValet logo'
                width={204}
                height={71}
                priority
              />
            </Link>
          </div>
          <div>
            <ul className='flex flex-row mt-4'>
              <li>
                <Link
                  className='hover:text-accent-primary duration-200'
                  href='/howitworks'
                >
                  HOW IT WORKS
                </Link>
              </li>
              <li className='ml-8'>
                <Link
                  className='hover:text-accent-primary duration-200'
                  href='/pricing'
                >
                  PRICING
                </Link>
              </li>
              <li className='ml-8'>
                <Link
                  className='hover:text-accent-primary duration-200'
                  href={`${isSignedIn ? '/signout' : '/signin'}`}
                >
                  {isSignedIn ? 'SIGN OUT' : 'SIGN IN'}
                </Link>
              </li>
              <li className='ml-8'>
                <Link
                  className='hover:text-accent-primary duration-200'
                  href='/contact'
                >
                  CONTACT US
                </Link>
              </li>
              <li className='ml-8'>
                <Link
                  className='bg-accent-primary text-white rounded-lg px-6 py-3 mt-4 border-2 border-accent-primary text-center'
                  href={`${isSignedIn ? '/dashboard' : '/booking'}`}
                >
                  {isSignedIn ? 'DASHBOARD' : 'BOOK NOW'}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* MOBILE */}
      <nav className='w-full bg-white py-1 px-4 flex flex-row items-center justify-between fixed z-20 top-0 lg:hidden'>
        <div className='relative z-20'>
          <Link href='/'>
            <Image
              src='/logo.svg'
              alt='BoxValet logo'
              width={204}
              height={71}
              priority
            />
          </Link>
        </div>
        <div>
          <div className='cursor-pointer z-20 relative' onClick={toggleMenu}>
            <div
              className={`w-8 h-1 bg-accent-primary my-1 mx-0 duration-200 origin-center ${isOpen ? '-rotate-45 translate-y-2' : ''}`}
            ></div>
            <div
              className={`w-8 h-1 bg-accent-primary my-1 mx-0 duration-200 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
            ></div>
            <div
              className={`w-8 h-1 bg-accent-primary my-1 mx-0 duration-200 origin-center ${isOpen ? 'rotate-45 -translate-y-2' : ''}`}
            ></div>
          </div>
          <div
            className={`fixed top-0 left-0 right-0 bottom-0 z-10 ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'} duration-200 bg-accent-primary-hover`}
          >
            <ul className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white text-xl list-none'>
              <li className='my-5 mx-0' onClick={toggleMenu}>
                <Link href='/'>Home</Link>
              </li>
              <li className='my-5 mx-0' onClick={toggleMenu}>
                <Link href='/howitworks'>How it Works</Link>
              </li>
              <li className='my-5 mx-0' onClick={toggleMenu}>
                <Link href='/pricing'>Pricing</Link>
              </li>
              <li className='my-5 mx-0' onClick={toggleMenu}>
                <Link href='/contact'>Contact Us</Link>
              </li>
              <li className='mt-12' onClick={toggleMenu}>
                <Link
                  className='bg-accent-primary text-white rounded-lg px-6 py-3 mt-4 border-2 border-accent-primary text-center'
                  href='/signin'
                >
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
