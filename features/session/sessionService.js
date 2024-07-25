const api_uri = process.env.NEXT_PUBLIC_API_URI;

/*
 *
 * Get User Session IP Address
 *
 */
const getSessionIp = async () => {
  const response = await fetch(api_uri + 'getsessionip', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  let data = await response.json();
  if (response.ok) {
    return data;
  } else {
    throw new Error(data.error || 'Unable to get ip address');
  }
};

const sessionService = {
  getSessionIp,
};

export default sessionService;
