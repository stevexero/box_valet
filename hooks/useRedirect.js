import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '@clerk/nextjs';

const useRedirect = () => {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn && router.pathname !== '/dashboard') {
      router.push('/dashboard');
    } else if (!isSignedIn && router.pathname !== '/') {
      router.push('/');
    }
  }, [isSignedIn, router]);
};

export default useRedirect;
