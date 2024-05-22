import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, reset } from '@/features/auth/authSlice';
import { useRouter } from 'next/router';
import Link from 'next/link';

const SignInComponent = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const {
    user,
    isLoading,
    isError,
    isSuccess,
    message: reduxMessage,
  } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  useEffect(() => {
    if (isError) {
      setMessage(reduxMessage);
      dispatch(reset());
    }
    if (isSuccess && user) {
      setMessage('Login successful!');
      router.push('/dashboard');
    }
  }, [user, isError, isSuccess, reduxMessage, dispatch, router]);

  return (
    <div className='mb-20 mt-8 flex items-center justify-center'>
      <div className='border border-black rounded-lg'>
        <div className='bg-accent-primary text-white text-center py-3 rounded-t-md'>
          <h2>Sign In</h2>
        </div>
        <div className='p-5'>
          <form className='flex flex-col items-center' onSubmit={handleSubmit}>
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
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link
              className='self-start text-xs mt-1 underline'
              href='/forgot-password'
            >
              Forgot Password?
            </Link>
            <button
              type='submit'
              className='bg-accent-primary text-white rounded-lg px-6 py-3 mt-8 border-2 border-accent-primary text-center block w-full max-w-xs'
            >
              Sign In
            </button>
          </form>
          <div className='w-full text-center mt-4 p-8'>
            {message && <div className='text-accent-primary'>{message}</div>}
            <Link href='/signup'>
              Don&apos;t have an account?{' '}
              <span className='underline'>Sign up here.</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInComponent;
