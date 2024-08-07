const api_uri = process.env.NEXT_PUBLIC_API_URI;

/*
 *
 * Get Website Stats
 *
 */
const getStats = async () => {
  const response = await fetch(
    api_uri +
      `getstats?website_id=${process.env.NEXT_PUBLIC_UMAMI_SITE_ID}&api_key=${process.env.NEXT_PUBLIC_UMAMI_API_KEY}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }
  );
  let data = await response.json();
  if (response.ok) {
    return { ...data };
  } else {
    throw new Error(data.error || 'Unable to fetch stats');
  }
};

const analyticsService = {
  getStats,
};

export default analyticsService;
