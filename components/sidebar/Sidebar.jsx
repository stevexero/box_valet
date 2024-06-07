import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { logout, reset } from '@/features/auth/authSlice';

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
  };

  return (
    <div className='h-screen bg-gradient-to-t from-accent-primary to-accent-primary-hover hidden md:block'>
      <div className='bg-accent-primary px-8 py-[0.69rem]'>
        <h1 className='text-white text-center text-3xl relative'>
          BoxValet
          <span className='text-xl absolute'>™</span>
        </h1>
      </div>
      <div className='flex flex-col items-center mt-8'>
        <button className='flex flex-row items-center' onClick={handleLogout}>
          <Image src='/logout.svg' alt='' width={20} height={20} />
          <p className='text-white ml-4'>Logout</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
