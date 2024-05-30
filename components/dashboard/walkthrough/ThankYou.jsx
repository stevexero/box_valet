import { useSelector } from 'react-redux';

const ThankYou = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <h1>Thanks {user.first_name} for verifying your email!</h1>
    </div>
  );
};

export default ThankYou;
