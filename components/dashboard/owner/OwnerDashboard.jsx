import { useState } from 'react';
import Customers from './Customers';

const OwnerDashboard = () => {
  const [screen, setScreen] = useState('main');

  const handleClick = (e) => {
    setScreen(e.target.id);
  };

  return (
    <div>
      {screen === 'main' ? (
        <button
          id='users'
          className='bg-accent-primary text-white rounded-lg px-4 py-2 border-2 border-accent-primary text-center'
          onClick={handleClick}
        >
          Get all users
        </button>
      ) : (
        <div>
          <button
            id='main'
            className='bg-accent-primary text-white rounded-lg px-4 py-2 border-2 border-accent-primary text-center'
            onClick={handleClick}
          >
            Back to Dashboard
          </button>
          <Customers />
        </div>
      )}
    </div>
  );
};

export default OwnerDashboard;
