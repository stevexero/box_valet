import { useState } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import {
  sendVerificationCode,
  updateUserEmail,
} from '@/features/auth/authSlice';

const VerifyEmail = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const handleClick = () => {
    if (isChecked) {
      dispatch(sendVerificationCode({ email: user.email }));
    } else {
      alert('Check the checkbox to verify your email is correct');
    }
  };

  const handleEmailUpdate = () => {
    let _email = prompt('Enter email address');
    if (user && _email !== null) {
      let _confirm = confirm('Confirm email: ' + _email);
      if (_confirm) {
        const userData = {
          oldEmail: user.email,
          newEmail: _email,
        };
        dispatch(updateUserEmail(userData));
      }
    }
  };

  return (
    <div className='w-full flex flex-col items-start sm:items-center justify-center p-8'>
      <h1 className='text-5xl md:text-center max-w-5xl'>
        Hey {user && user.first_name}! Before we can do anything, let&apos;s
        verify your email address
      </h1>
      <p className='mt-8'>
        We&apos;ll send a code to {user && user.email} that you&apos;ll user to
        verify your account.
      </p>
      <Image
        src='/verify.svg'
        alt='setting up account'
        width={641}
        height={199}
        className='sm:block hidden'
      />
      <div className='flex flex-col md:flex-row items-start sm:items-center me-4 mt-8 md:mt-0'>
        <div className='flex items-center'>
          <input
            checked={isChecked}
            onChange={handleCheck}
            id='email_is_correct'
            type='checkbox'
            value={isChecked}
            className='w-4 h-4 text-accent-primary bg-gray-100 border-gray-300 rounded focus:ring-accent-primary dark:focus:ring-accent-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mr-2'
          />
          <label htmlFor='email_is_correct'>
            My email{' '}
            <span className='font-bold text-accent-primary'>
              {user && user.email}
            </span>{' '}
            is correct
          </label>
        </div>
        <p className='ml-2'>- or -</p>
        <button
          onClick={handleEmailUpdate}
          className='text-blue-600 underline ml-2'
        >
          update email address
        </button>
      </div>
      <button
        className='bg-accent-primary text-white rounded-lg px-6 py-3 mt-8 border-2 border-accent-primary text-center'
        onClick={handleClick}
      >
        SEND CODE
      </button>
    </div>
  );
};

export default VerifyEmail;
