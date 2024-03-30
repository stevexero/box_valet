import Link from 'next/link';
import Image from 'next/image';

export default function Benefits() {
  return (
    <>
      <section
        id='Benefits'
        className='bg-accent-tertiary md:flex flex-col items-center justify-center w-full py-32 p-4 hidden'
      >
        <div className='max-w-6xl container text_white'>
          <div className='w-full grid grid-cols-2 gap-12'>
            <div>
              <h2 className='text-4xl'>Solutions. for Everyone.</h2>
              <p className='mt-6 text-justify'>
                At BoxValet, we believe in providing flexible and efficient
                storage solutions that cater to a wide array of needs. Whether
                you&apos;re an individual seeking micro storage options for
                personal belongings, a small business needing temporary space
                for inventory, a large corporation looking for an organized way
                to store important documents, or a convention organizer in
                search of a reliable partner to handle event materials, BoxValet
                has got you covered.
              </p>
              <p className='mt-6 text-justify'>
                Our tailored services ensure that whether your storage needs are
                big or small, short-term or ongoing, we provide a hassle-free,
                secure, and cost-effective solution. With BoxValet, experience
                the ease of storage and delivery services that adapt to your
                unique requirements, simplifying logistics and freeing up
                valuable space and time for what matters most in your personal
                and professional life.
              </p>
              <div className='mt-12'>
                <Link
                  href={'/contactus'}
                  className='bg-accent-primary text-white rounded-lg px-6 py-3 mt-4 border-2 border-accent-primary text-center'
                >
                  TALK TO OUR EXPERTS
                </Link>
              </div>
            </div>
            <div className='grid lg:grid-cols-2 gap-6'>
              <Image
                src='/beneimg1.jpg'
                alt='Women organizing boxes'
                width={251}
                height={251}
                priority
                style={{ objectFit: 'cover' }}
                className='rounded-lg justify-self-center lg:justify-self-end self-end'
              />
              <Image
                src='/beneimg2.jpg'
                alt='Warehouse dock bay'
                width={251}
                height={251}
                priority
                style={{ objectFit: 'cover' }}
                className='rounded-lg justify-self-center self-end'
              />
              <Image
                src='/beneimg3.jpg'
                alt='People attending a conference'
                width={251}
                height={251}
                priority
                style={{ objectFit: 'cover' }}
                className='rounded-lg justify-self-center lg:justify-self-end'
              />
              <Image
                src='/beneimg4.JPG'
                alt='An artist organizing her thoughts'
                width={251}
                height={251}
                priority
                style={{ objectFit: 'cover' }}
                className='rounded-lg justify-self-center'
              />
            </div>
          </div>
        </div>
      </section>
      {/* MOBILE */}
      <section
        id='Benefits'
        className='bg-accent-tertiary text-white md:hidden w-full mt-8 py-10 p-4 flex flex-col items-center justify-center'
      >
        <div className='w-full'>
          <h2 className='text-center text-4xl'>Simple Storage Solutions</h2>
        </div>
        <Image
          src='/beneimg2.jpg'
          alt='Warehouse dock bay'
          width={390}
          height={390}
          priority
          className='mt-6 rounded-lg'
          style={{ objectFit: 'cover' }}
        />
        <p className='text-justify mt-6'>
          At BoxValet, we believe in providing flexible and efficient storage
          solutions that cater to a wide array of needs. Whether you&apos;re an
          individual seeking micro storage options for personal belongings, a
          small business needing temporary space for inventory, a large
          corporation looking for an organized way to store important documents,
          or a convention organizer in search of a reliable partner to handle
          event materials, BoxValet has got you covered.
        </p>
        <div className='w-full'>
          <h2 className='text-center mt-6 text-4xl'>For Everyone.</h2>
        </div>
        <Image
          src='/beneimg1.jpg'
          alt='Women organizing boxes'
          width={390}
          height={390}
          priority
          className='mt-6 rounded-lg'
          style={{ objectFit: 'cover' }}
        />
        <p className='text-justify mt-6'>
          Our tailored services ensure that whether your storage needs are big
          or small, short-term or ongoing, we provide a hassle-free, secure, and
          cost-effective solution. With BoxValet, experience the ease of storage
          and delivery services that adapt to your unique requirements,
          simplifying logistics and freeing up valuable space and time for what
          matters most in your personal and professional life.
        </p>
        <div className='mt-12 w-full flex justify-center'>
          <Link
            href={'/contactus'}
            className='bg-accent-primary text-white rounded-lg px-6 py-3 mt-4 border-2 border-accent-primary text-center'
          >
            TALK TO OUR EXPERTS
          </Link>
        </div>
      </section>
    </>
  );
}
