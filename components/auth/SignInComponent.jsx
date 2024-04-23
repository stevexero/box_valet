import { useState } from 'react';

const SignInComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    console.log(userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          name='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type='password' name='password' id='password' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default SignInComponent;
