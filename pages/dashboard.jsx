import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { logout, reset } from '@/features/auth/authSlice';
import { useAuthStatus } from '@/hooks/useAuthStatus';
import { useDispatch, useSelector } from 'react-redux';
import DashboardLayout from '@/components/DashboardLayout';
import Loading from '@/components/Loading';
import Walkthrough from '@/components/dashboard/walkthrough/Walkthrough';

const Dashboard = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { loggedIn, checkingStatus } = useAuthStatus();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!checkingStatus && !loggedIn) {
      router.push('/signin');
    }
  }, [loggedIn, checkingStatus, router]);

  const handleClick = () => {
    dispatch(logout());
    dispatch(reset());
  };

  if (checkingStatus || !loggedIn || !user) {
    return <Loading />;
  }

  return (
    <DashboardLayout>
      {user && user.user_role} Dashboard
      <button onClick={handleClick}>Logout</button>
      {user && user.is_verified ? <h1>Verified</h1> : <Walkthrough />}
    </DashboardLayout>
  );
};

export default Dashboard;
