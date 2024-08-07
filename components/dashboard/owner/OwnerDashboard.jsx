import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCustomers } from '@/features/user/userSlice';
import Customers from './Customers';
import { setLocalStorageItem } from '@/utils/storage';
import { getStats } from '@/features/analytics/analyticsSlice';
import Analytics from './Analytics';

const OwnerDashboard = () => {
  const dispatch = useDispatch();
  const { customers } = useSelector((state) => state.user);
  const { stats } = useSelector((state) => state.analytics);
  const [screen, setScreen] = useState('main');

  // Disable Umami analytics trackers for owner(s)
  setLocalStorageItem('umami.disabled', 1);

  const handleClick = (e) => {
    setScreen(e.target.id);
  };

  useEffect(() => {
    if (customers.length === 0) {
      dispatch(getAllCustomers());
    }
  }, [dispatch, customers.length]);

  useEffect(() => {
    dispatch(getStats());
  }, [dispatch]);

  return (
    <div className='p-4'>
      {screen === 'main' ? (
        // Overview Screen
        <div className='flex flex-row items-start'>
          {/* Analytics Card */}
          <div className='border w-fit p-4 text-left'>
            <h2>Site Analytics</h2>
            <div>Page Views: {stats.pageviews && stats.pageviews.value}</div>
            <div>Visitors: {stats.visitors && stats.visitors.value}</div>
            <div>Visits: {stats.visits && stats.visits.value}</div>
            <button
              className='rounded p-2 mt-2 bg-accent-primary text-white'
              id='analytics'
              onClick={handleClick}
            >
              View More -&gt;
            </button>
          </div>
          {/* Customers Card */}
          <div className='border w-fit p-4 text-left ml-4'>
            <h2>{customers ? customers.length : 'Err'} active customers</h2>
            <button
              className='rounded p-2 mt-2 bg-accent-primary text-white'
              id='users'
              onClick={handleClick}
            >
              View More -&gt;
            </button>
          </div>
        </div>
      ) : screen === 'analytics' ? (
        // Analytics Screen
        <div>
          <button
            id='main'
            className='bg-accent-primary text-white rounded-lg px-4 py-2 border-2 border-accent-primary text-center'
            onClick={handleClick}
          >
            Back to Dashboard
          </button>
          <Analytics stats={stats} />
        </div>
      ) : (
        screen === 'users' && (
          // Customers Screen
          <div>
            <button
              id='main'
              className='bg-accent-primary text-white rounded-lg px-4 py-2 border-2 border-accent-primary text-center'
              onClick={handleClick}
            >
              Back to Dashboard
            </button>
            <Customers customers={customers} />
          </div>
        )
      )}
    </div>
  );
};

export default OwnerDashboard;
