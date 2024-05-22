import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { register, reset } from '@/features/auth/authSlice';
import Link from 'next/link';

function SignUpComponent() {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    user,
    isLoading,
    isError,
    isSuccess,
    message: reduxMessage,
  } = useSelector((state) => state.auth);

  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    verifyPassword: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userData.password !== userData.verifyPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    dispatch(register(userData));
  };

  useEffect(() => {
    if (isError) {
      setMessage(reduxMessage);
      dispatch(reset());
    }
    if (isSuccess && user) {
      setMessage('Signup successful!');
      router.push('/dashboard');
    }
  }, [user, isError, isSuccess, reduxMessage, dispatch, router]);

  return (
    <div className='mb-20 mt-8 flex items-center justify-center'>
      <div className='border border-black rounded-lg'>
        <div className='bg-accent-primary text-white text-center py-3 rounded-t-md'>
          <h2>Sign Up</h2>
        </div>
        <div className='p-5'>
          <form className='flex flex-col items-center' onSubmit={handleSubmit}>
            <label
              htmlFor='first_name'
              className='font-bold text-black-primary mt-2 w-full'
            >
              First Name
            </label>
            <input
              className='outline-2 outline-accent-primary-hover border border-black p-2 rounded-lg w-full'
              type='text'
              name='first_name'
              value={userData.first_name}
              onChange={handleChange}
              required
            />
            <label
              htmlFor='last_name'
              className='font-bold text-black-primary mt-2 w-full'
            >
              Last Name
            </label>
            <input
              className='outline-2 outline-accent-primary-hover border border-black p-2 rounded-lg w-full'
              type='text'
              name='last_name'
              value={userData.last_name}
              onChange={handleChange}
              required
            />
            <label
              htmlFor='email'
              className='font-bold text-black-primary mt-2 w-full'
            >
              Email
            </label>
            <input
              className='outline-2 outline-accent-primary-hover border border-black p-2 rounded-lg w-full'
              type='email'
              name='email'
              value={userData.email}
              onChange={handleChange}
              required
            />
            <label
              htmlFor='password'
              className='font-bold text-black-primary mt-2 w-full'
            >
              Password
            </label>
            <input
              className='outline-2 outline-accent-primary-hover border border-black p-2 rounded-lg w-full'
              type='password'
              name='password'
              value={userData.password}
              onChange={handleChange}
              required
            />
            <label
              htmlFor='verifyPassword'
              className='font-bold text-black-primary mt-2 w-full'
            >
              Verify Password
            </label>
            <input
              className='outline-2 outline-accent-primary-hover border border-black p-2 rounded-lg w-full'
              type='password'
              name='verifyPassword'
              value={userData.verifyPassword}
              onChange={handleChange}
              required
            />
            <button
              className='bg-accent-primary text-white rounded-lg px-6 py-3 mt-8 border-2 border-accent-primary text-center block w-full max-w-xs'
              type='submit'
            >
              Sign Up
            </button>
          </form>
          <div className='w-full text-center mt-4 p-8'>
            {message && <p>{message}</p>}
            <Link href='/signin'>
              Already have an account?{' '}
              <span className='underline'>Sign in here.</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpComponent;
