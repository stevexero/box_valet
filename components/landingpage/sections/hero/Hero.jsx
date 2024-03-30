import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id='Hero' className='max-w-6xl container p-4 mt-24'>
      <div className='flex flex-row items-center justify-evenly'>
        <div className='max-w-lg'>
          <h1 className='text-5xl'>
            Store a Little. Save a Lot. It&apos;s That Simple.
          </h1>
          <div>
            <p className='mt-6'>
              For when you need just a bit more space. Quick, secure, and
              tailored to your schedule.
            </p>
          </div>
          <div className='mt-14'>
            <Link
              href='/booking'
              className='bg-accent-primary text-white rounded-lg px-6 py-3 mt-4 border-2 border-accent-primary'
            >
              SCHEDULE YOUR PICKUP TODAY
            </Link>
            <Link
              href='/howitworks'
              className='rounded-lg px-6 py-3 mt-4 border-2 border-accent-primary ml-4'
            >
              LEARN MORE
            </Link>
          </div>
        </div>
        <div className='hidden md:block'>
          <Image
            src='/heroimg.png'
            alt='Isometric Storage Room'
            width={469}
            height={428}
            priority
          />
        </div>
      </div>
    </section>
  );
}
