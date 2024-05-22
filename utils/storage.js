export const getLocalStorageItem = (key) => {
  if (typeof window !== 'undefined') {
    const storedItem = localStorage.getItem(key);
    return storedItem ? JSON.parse(storedItem) : null;
  }
  return null;
};

export const setLocalStorageItem = (key, value) => {
  if (typeof window !== 'undefined') {
    try {
      const item = JSON.stringify(value);
      localStorage.setItem(key, item);
    } catch (error) {
      console.error('Failed to save in localStorage:', error);
    }
  }
};

export const removeLocalStorageItem = (key) => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Failed to remove from localStorage:', error);
    }
  }
};
