import { submitVerificationCode } from '@/features/auth/authSlice';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const EnterEmailCode = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [verificationNumber, setVerificationNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (verificationNumber.length !== 6) {
      alert('invalid length, verification code is 6 digits');
      return;
    }

    const userData = {
      email: user.email,
      verification_code: verificationNumber,
    };

    dispatch(submitVerificationCode(userData));
  };

  return (
    <div>
      <h1 className='text-5xl'>Enter the 6-digit code from your email</h1>
      <p>
        Then your account will be verified and can begin with your BoxValet
        dashboard
      </p>
      <p>
        If you don&apos;t see an email from BoxValet, check your spam folder.
      </p>
      <p>
        If there&apos;s no email from BoxValet in your spam folder, click here
      </p>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor='verification_number'
          className='font-bold text-black-primary mt-2 w-full'
        >
          Verification Code
        </label>
        <input
          type='text'
          className='outline-2 outline-accent-primary-hover border border-black p-2 rounded-lg'
          name='verification_number'
          id='verification_number'
          value={verificationNumber}
          onChange={(e) => setVerificationNumber(e.target.value)}
          required
        />
        <button
          className='bg-accent-primary text-white rounded-lg px-6 py-3 mt-8 border-2 border-accent-primary text-center'
          type='submit'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EnterEmailCode;
