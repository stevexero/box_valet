import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthStatus } from '@/hooks/useAuthStatus';
import Layout from '@/components/Layout';
import SignUpComponent from '@/components/auth/SignUpComponent';
import Loading from '@/components/Loading';

const SignUpPage = () => {
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
      <main className='w-screen flex items-center justify-center'>
        <div className='p-4 flex flex-col items-center'>
          <h1 className='text-5xl text-center mt-32 md:mt-20 mb-12'>
            Sign up to start using BoxValet
          </h1>
          <SignUpComponent />
        </div>
      </main>
    </Layout>
  );
};

export default SignUpPage;
