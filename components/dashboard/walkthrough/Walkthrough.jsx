import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import VerifyEmail from './VerifyEmail';
import EnterEmailCode from './EnterEmailCode';
import ThankYou from './ThankYou';
import OwnerDashboard from '../owner/OwnerDashboard';

const Walkthrough = () => {
  const { resend_response, user } = useSelector((state) => state.auth);
  const [isCodeSent, SetIsCodeSent] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  useEffect(() => {
    if (user.email_verified) {
      setIsEmailVerified(true);
    } else {
      if (resend_response.id !== null) {
        SetIsCodeSent(true);
      } else {
        SetIsCodeSent(false);
      }
    }
  }, [resend_response, user]);

  return (
    <div>
      {user.user_role === 'owner_active' ? (
        <OwnerDashboard />
      ) : isEmailVerified ? (
        <ThankYou />
      ) : isCodeSent ? (
        <EnterEmailCode />
      ) : (
        <VerifyEmail />
      )}
    </div>
  );
};

export default Walkthrough;
