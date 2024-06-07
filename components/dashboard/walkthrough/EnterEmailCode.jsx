import { useState, useRef, useEffect } from 'react';
import {
  submitVerificationCode,
  sendVerificationCode,
  reset,
} from '@/features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

const EnterEmailCode = () => {
  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const [verificationNumber, setVerificationNumber] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
  ]);
  const inputRefs = useRef([]);
  const [resendClicked, setResendClicked] = useState(false);

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  useEffect(() => {
    if (isError) {
      alert(message);
      setVerificationNumber(['', '', '', '', '', '']);
      inputRefs.current[0].focus();
      dispatch(reset());
    }
  }, [isError, message, dispatch]);

  const handleChange = (index, value) => {
    if (/^\d$/.test(value)) {
      const newVerificationNumber = [...verificationNumber];
      newVerificationNumber[index] = value;
      setVerificationNumber(newVerificationNumber);
      if (index < 5) {
        inputRefs.current[index + 1].focus();
      }
    } else if (value.length === 6 && /^\d+$/.test(value)) {
      const newVerificationNumber = value.split('');
      setVerificationNumber(newVerificationNumber);
      inputRefs.current[5].focus();
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData('text');
    if (paste.length === 6 && /^\d+$/.test(paste)) {
      const newVerificationNumber = paste.split('');
      setVerificationNumber(newVerificationNumber);
      inputRefs.current[5].focus();
      e.preventDefault();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace') {
      const newVerificationNumber = [...verificationNumber];
      if (newVerificationNumber[index]) {
        newVerificationNumber[index] = '';
        setVerificationNumber(newVerificationNumber);
        if (index > 0) {
          inputRefs.current[index - 1].focus();
        }
      } else if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const code = verificationNumber.join('');

    if (code.length !== 6) {
      alert('invalid length, verification code is 6 digits');
      return;
    }

    const userData = {
      email: user.email,
      verification_code: code,
    };

    dispatch(submitVerificationCode(userData));
  };

  const handleClick = () => {
    if (resendClicked) {
      alert("If you're still having trouble, call us at +1 (702) 689 9811");
    } else {
      dispatch(sendVerificationCode({ email: user.email }));
      setResendClicked(true);
    }
  };

  return (
    <div className='w-full flex flex-col items-center justify-center p-8'>
      <h1 className='text-5xl md:text-center max-w-5xl'>
        Enter the 6-digit code from your email
      </h1>
      <p className='mt-8 text-accent-primary font-bold self-start md:self-center'>
        {user && user.email}
      </p>
      <p className='mt-8 self-start md:self-center'>
        Then your account will be verified and you can begin with your BoxValet
        dashboard
      </p>
      <p className='mt-2 self-start md:self-center'>
        If you don&apos;t see an email from BoxValet, check your spam folder.
      </p>
      <p className='mt-2 self-start md:self-center'>
        If there&apos;s no email from BoxValet in your spam folder,{' '}
        <span
          className={`${resendClicked ? 'text-accent-primary' : 'text-blue-600'} underline hover:cursor-pointer`}
          onClick={handleClick}
        >
          {resendClicked
            ? 'CHECK EMAIL AND/OR SPAM NOW'
            : 'CLICK HERE TO TRY TO RESEND'}
        </span>
      </p>
      <p className='mt-2'>
        Or if you&apos;d like to have us set it up for you, give us a call at{' '}
        <Link href='tel:17026899822' className='text-blue-600 underline'>
          +1 (702) 689 9811
        </Link>
      </p>
      <form
        className='mt-8 flex flex-col items-center justify-center'
        onSubmit={handleSubmit}
      >
        <label
          htmlFor='verification_number'
          className='font-bold text-black-primary mt-2 w-full text-center'
        >
          Verification Code
        </label>
        <div className='flex space-x-2'>
          {verificationNumber.map((num, index) => (
            <input
              key={index}
              type='text'
              maxLength='1'
              className='outline-2 outline-accent-primary-hover border border-black p-2 rounded-lg max-w-12 text-center'
              value={num}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              ref={(el) => (inputRefs.current[index] = el)}
            />
          ))}
        </div>
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
