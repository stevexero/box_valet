import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useUser, useAuth } from '@clerk/nextjs';

const GetCurrentUser = () => {
  const { isSignedIn, user } = useUser();
  const { getToken } = useAuth();
  const router = useRouter();
  const [bearerToken, setBearerToken] = useState('');

  useEffect(() => {
    // console.log('dashboard redirect component');

    const fetchUserToken = async () => {
      if (isSignedIn) {
        const token = await getToken();
        setBearerToken(token);
      }
    };

    fetchUserToken();

    if (user === undefined) return; // User state still resolving, do nothing

    if (!isSignedIn) {
      router.push('/signin');
      return;
    }

    if (user && bearerToken) {
      console.log('calling api: /api/user/getCurrentUser');
      fetch(`/api/user/getCurrentUser`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${bearerToken}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log('User fetched:', data);
          if (data.user_role === 'customer_active') {
            router.push('/customerDashboard');
          } else if (data.user_role === 'admin_owner') {
            router.push('/ownerDashboard');
          }
        })
        .catch((error) => {
          console.error('Error fetching user:', error);
          router.push('/error'); // Redirect to an error page or display a message
        });
    }
  }, [isSignedIn, user, bearerToken, router, getToken]);

  return (
    <main className='w-screen h-screen flex flex-col items-center justify-center'>
      <div role='status'>
        <svg
          aria-hidden='true'
          className='inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-red-600'
          viewBox='0 0 100 101'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          {/* SVG content */}
        </svg>
        <span className='sr-only'>Loading...</span>
      </div>
      <h1 className='mt-8'>Redirecting you to your BoxValet dashboard</h1>
    </main>
  );
};

export default GetCurrentUser;
