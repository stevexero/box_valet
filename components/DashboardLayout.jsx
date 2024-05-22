import { useEffect } from 'react';
// import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import DashboardNavbar from './navbar/DashboardNavbar';
import Sidebar from '@/components/sidebar/Sidebar';

const Layout = ({ children }) => {
  // const { isSignedIn, user } = useUser();
  const router = useRouter();

  // useEffect(() => {
  // if (user === undefined) return; // User state still resolving, do nothing

  //   if (!isSignedIn) {
  //     router.push('/signin');
  //     return;
  //   }
  // }, [user, isSignedIn, router]);

  return (
    <main className='w-screen flex flex-row'>
      <Sidebar />
      <div className='w-full'>
        <DashboardNavbar />
        {children}
      </div>
    </main>
  );
};

export default Layout;
