import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthStatus } from '@/hooks/useAuthStatus';
import Head from 'next/head';
import Hero from '@/components/landingpage/sections/hero/Hero';
import Layout from '@/components/Layout';
import { Inter } from 'next/font/google';
import Overview from '@/components/landingpage/sections/overview/Overview';
import Benefits from '@/components/landingpage/sections/benefits/Benefits';
import CallToAction from '@/components/landingpage/sections/calltoaction/CallToAction';
import Testimonials from '@/components/landingpage/sections/testimonials/Testimonials';
import Loading from '@/components/Loading';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const router = useRouter();
  const { loggedIn, checkingStatus } = useAuthStatus();

  useEffect(() => {
    if (loggedIn) {
      router.push('/dashboard');
    }
  }, [loggedIn, router]);

  if (checkingStatus || loggedIn) {
    return <Loading />;
  }

  return (
    <Layout>
      <Head>
        <title>Box Valet</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='w-screen flex flex-col items-center'>
        <Hero />
        <Overview />
        <Benefits />
        <CallToAction />
        <Testimonials />
      </main>
    </Layout>
  );
}
