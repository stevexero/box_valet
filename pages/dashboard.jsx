import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthStatus } from '@/hooks/useAuthStatus';
import { useSelector } from 'react-redux';
import DashboardLayout from '@/components/DashboardLayout';
import Loading from '@/components/Loading';
import Walkthrough from '@/components/dashboard/walkthrough/Walkthrough';

const Dashboard = () => {
  const router = useRouter();
  const { loggedIn, checkingStatus } = useAuthStatus();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!checkingStatus && !loggedIn) {
      router.push('/signin');
    }
  }, [loggedIn, checkingStatus, router]);

  if (checkingStatus || !loggedIn || !user) {
    return <Loading />;
  }

  return (
    <DashboardLayout>
      {user && user.is_verified ? <h1>Verified</h1> : <Walkthrough />}
    </DashboardLayout>
  );
};

export default Dashboard;
