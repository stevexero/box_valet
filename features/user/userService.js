const api_uri = process.env.NEXT_PUBLIC_API_URI;

/*
 *
 * Get All Customers
 *
 */
const getAllCustomers = async () => {
  const response = await fetch(api_uri + 'get_customers', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  let data = await response.json();
  if (response.ok) {
    return Array.isArray(data) ? data : Object.values(data);
  } else {
    throw new Error(data.error || 'Unable to get all customers');
  }
};

const userService = {
  getAllCustomers,
};

export default userService;
