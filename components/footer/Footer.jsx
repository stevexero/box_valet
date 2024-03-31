import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='w-screen bg-black-primary pb-8'>
      <div className='w-full text-white flex flex-col items-center justify-center'>
        <div className='container px-10 lg:grid lg:grid-cols-3 lg:gap-16 lg:justify-between lg:items-start mt-12 lg:pb-8'>
          <div className='max-w-[365px]'>
            <Link href='/'>
              <Image
                src='/logodark.svg'
                alt='BoxValet logo'
                width={204}
                height={71}
                priority
              />
            </Link>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Malesuada fames ac turpis egestas integer eget aliquet nibh.
            </p>
          </div>
          <div className='lg:ml-24'>
            <ul>
              <li className='-mt-6 lg:mt-6 font-bold'>Contact</li>
              <li className='mt-6'>
                <Link href='#' />
                Phone:{' '}
                <a href='tel:+17026899811' className='text-white'>
                  +1 (702) 689 9811
                </a>
              </li>
              <li className='mt-1.5'>
                <Link href='#' />
                Email:{' '}
                <a href='mailto:boxvaletllc@gmail.com' className='text-white'>
                  boxvaletllc@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className='lg:ml-16'>
            <ul>
              <li className='mt-6 font-bold'>Support</li>
              <li className='mt-6'>
                <Link href='/privacypolicy' className='text-white'>
                  Privacy Policy
                </Link>
              </li>
              <li className='mt-1.5'>
                <Link href='/termsofservice' className='text-white'>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className='w-full text-center mt-6'>
          Copyright &copy; 2024 BoxValet. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
