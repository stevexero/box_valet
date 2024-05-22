const {
  setLocalStorageItem,
  removeLocalStorageItem,
} = require('@/utils/storage');

const api_uri = process.env.NEXT_PUBLIC_API_URI;

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

const authService = {
  register,
  login,
  logout,
};

export default authService;
