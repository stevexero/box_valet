import { useSelector } from 'react-redux';

const ThankYou = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className='w-full flex flex-col items-center justify-center p-8'>
      <h1 className='text-accent-primary font-bold self-start md:self-center'>
        Thanks {user.first_name} for verifying your email!
      </h1>
      <h2 className='text-5xl md:text-center max-w-5xl mt-2'>
        Now let&apos;s valet your first item for storage!
      </h2>
    </div>
  );
};

export default ThankYou;
