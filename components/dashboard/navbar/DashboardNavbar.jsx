import { logout, reset } from '@/features/auth/authSlice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const DashboardNavbar = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const [userRole, setUserRole] = useState('Customer');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (user && user.role) {
      if (user.role === 'customer_active') {
        setUserRole('Customer');
      } else if (user.role === 'admin_active') {
        setUserRole('Admin');
      } else if (user.role === 'owner_active') {
        setUserRole('Owner');
      } else {
        setUserRole('');
      }
    }
  }, [user]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
  };

  return (
    <div className='w-full bg-gradient-to-l from-accent-primary to-accent-primary-hover flex flex-row justify-between p-4 items-center text-white'>
      <div className='hidden sm:block'>
        <h2>
          <span className='hidden md:inline-block'>{user && userRole}</span>{' '}
          Dashboard {user && user.email_verified ? '' : '( unverified )'}
        </h2>
      </div>
      <div className='sm:hidden md:block'>
        <p>Hi {user && user.first_name}!</p>
      </div>
      {/*  */}
      <div className='md:hidden'>
        <div className='flex'>
          <div className='mr-4 hidden sm:inline-block'>
            <p>Hi {user && user.first_name}!</p>
          </div>
          <div className='cursor-pointer z-20 relative' onClick={toggleMenu}>
            <div
              className={`w-8 h-1 bg-white my-1 mx-0 duration-200 origin-center ${isOpen ? '-rotate-45 translate-y-2' : ''}`}
            ></div>
            <div
              className={`w-8 h-1 bg-white my-1 mx-0 duration-200 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
            ></div>
            <div
              className={`w-8 h-1 bg-white my-1 mx-0 duration-200 origin-center ${isOpen ? 'rotate-45 -translate-y-2' : ''}`}
            ></div>
          </div>
        </div>
        <div
          className={`fixed top-0 left-0 right-0 bottom-0 z-10 ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'} duration-200 bg-accent-primary-hover`}
        >
          <ul className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white text-xl list-none'>
            <li className='my-5 mx-0' onClick={toggleMenu}>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default DashboardNavbar;
