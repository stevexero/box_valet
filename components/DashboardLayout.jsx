import { useRouter } from 'next/router';
import DashboardNavbar from './navbar/DashboardNavbar';
import Sidebar from '@/components/sidebar/Sidebar';

const Layout = ({ children }) => {
  const router = useRouter();

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
