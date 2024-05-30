const {
  setLocalStorageItem,
  removeLocalStorageItem,
} = require('@/utils/storage');

const api_uri = process.env.NEXT_PUBLIC_API_URI;

/*
 *
 * Register User
 *
 */
const register = async (userData) => {
  const response = await fetch(api_uri + 'register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(userData),
  });
  let data = await response.json();
  if (response.ok) {
    setLocalStorageItem('boxvaletuser', data);
    return { ...data };
  } else {
    throw new Error(data.error || 'Unable to register');
  }
};

/*
 *
 * Login User
 *
 */
const login = async (userData) => {
  const response = await fetch(api_uri + 'login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(userData),
  });

  let data = await response.json();

  if (response.ok) {
    setLocalStorageItem('boxvaletuser', data);
    return { ...data };
  } else {
    throw new Error(data.error || 'Unable to login');
  }
};

/*
 *
 * Logout User
 *
 */
const logout = async () => {
  const response = await fetch(api_uri + 'logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  let data = await response.json();
  if (response.ok) {
    removeLocalStorageItem('boxvaletuser');
    console.log(data.message);
  } else {
    throw new Error('Unable to logout');
  }
};

/*
 *
 * Send Verification Code
 *
 */
const sendVerificationCode = async (email) => {
  const response = await fetch(api_uri + 'sendverificationcode', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(email),
  });

  let data = await response.json();

  if (response.ok) {
    return { ...data };
  } else {
    throw new Error(data.error || 'Unable to send verification code');
  }
};

/*
 *
 * Submit Verification Code
 *
 */
const submitVerificationCode = async (userData) => {
  const response = await fetch(api_uri + 'submitverificationcode', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(userData),
  });

  let data = await response.json();

  if (response.ok) {
    setLocalStorageItem('boxvaletuser', data);
    return { ...data };
  } else {
    throw new Error(data.error || 'Unable to submit verification code');
  }
};

const authService = {
  register,
  login,
  logout,
  sendVerificationCode,
  submitVerificationCode,
};

export default authService;
