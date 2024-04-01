import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';

const Contact = () => {
  const [windowSize, setWindowSize] = useState(null);
  const [envelope, setEnvelope] = useState('envelope_black.svg');
  const [phone, setPhone] = useState('phone_black.svg');

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const lgBreakpoint = 1024;
    if (windowSize >= lgBreakpoint) {
      setEnvelope('envelope_white.svg');
      setPhone('phone_white.svg');
    } else {
      setEnvelope('envelope_black.svg');
      setPhone('phone_black.svg');
    }
  }, [windowSize]);

  return (
    <Layout>
      <main className='mx-auto flex flex-col items-center justify-center p-4 container mt-32 lg:mt-16 pb-8'>
        <header>
          <h1 className='text-5xl text-center'>Contact Us</h1>
        </header>
        <div className='w-full max-w-6xl flex flex-col lg:flex-row lg:justify-center lg:border-2 lg:border-accent-primary lg:rounded-lg lg:mt-16'>
          <form className='flex flex-col mt-8 lg:mt-0 lg:w-full lg:p-8'>
            <h2 className='text-xl text-center lg:text-left lg:text-lg font-bold'>
              Send us a message, feedback, comments, or queries
            </h2>
            <div className='flex flex-col lg:flex-row lg:w-full mt-8'>
              <div className='flex flex-col lg:w-1/2'>
                <label htmlFor='name' className='font-bold text-black-primary'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='outline-2 outline-accent-primary-hover border-2 border-accent-primary p-2 rounded-lg'
                />
              </div>
              <div className='flex flex-col lg:ml-8 lg:w-1/2'>
                <label
                  htmlFor='email'
                  className='font-bold text-black-primary mt-4 lg:mt-0'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='outline-2 outline-accent-primary-hover border-2 border-accent-primary p-2 rounded-lg'
                />
              </div>
            </div>
            <div className='flex flex-col lg:flex-row lg:w-full lg:mt-8'>
              <div className='flex flex-col lg:w-1/2'>
                <label
                  htmlFor='phone'
                  className='font-bold text-black-primary mt-4 lg:mt-0'
                >
                  Phone
                </label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  className='outline-2 outline-accent-primary-hover border-2 border-accent-primary p-2 rounded-lg'
                />
              </div>
              <div className='flex flex-col lg:ml-8 lg:w-1/2'>
                <label
                  htmlFor='subject'
                  className='font-bold text-black-primary mt-4 lg:mt-0'
                >
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  className='outline-2 outline-accent-primary-hover border-2 border-accent-primary p-2 rounded-lg'
                />
              </div>
            </div>
            <label
              htmlFor='message'
              className='font-bold text-black-primary mt-4 lg:mt-8'
            >
              Message
            </label>
            <textarea
              name='message'
              id='message'
              cols='30'
              rows='10'
              className='outline-2 outline-accent-primary-hover border-2 border-accent-primary p-2 rounded-lg'
            ></textarea>
            <button
              type='submit'
              className='bg-accent-primary text-white rounded-lg px-6 py-3 mt-4 border-2 border-accent-primary text-center'
            >
              Send
            </button>
          </form>
          <section className='mt-8 lg:mt-0 lg:bg-accent-primary lg:rounded-r-md lg:w-2/3 lg:p-8'>
            <h3 className='text-xl font-bold lg:text-white'>Reach Us</h3>
            <span className='flex flex-row mt-4'>
              <Image src={envelope} width={24} height={24} alt='' />
              <p className='ml-4 font-bold lg:text-white'>Email:</p>
              <Link
                href='mailto:boxvaletllc@gmail.com'
                className='ml-4 lg:text-white'
              >
                boxvaletllc@gmail.com
              </Link>
            </span>
            <span className='flex flex-row mt-2'>
              <Image src={phone} width={24} height={24} alt='' />
              <p className='ml-4 font-bold lg:text-white'>Phone:</p>
              <Link href='tel:17026899811' className='ml-4 lg:text-white'>
                +1 (702) 689 9811
              </Link>
            </span>
            <p className='text-xl font-bold text-center mt-8 lg:mt-64 lg:text-white'>
              Servicing Las Vegas, Nevada
            </p>
            <div className='hidden lg:flex w-full items-center justify-center mt-8'>
              <Image
                src={'/contact.svg'}
                width={314}
                height={209}
                alt='illustration of customer contacting help'
              />
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default Contact;
