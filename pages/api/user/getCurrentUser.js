export default async function handler(req, res) {
  console.log('api/user/getCurrentUser reached');

  if (req.method === 'GET') {
    console.log('Calling flask api');
    const flaskApiUrl = `${process.env.API_URI}/get-current-user`;

    console.log('From getCurrentUser api: ' + flaskApiUrl);

    const token = req.headers.authorization;

    console.log('Token:', token);

    try {
      const response = await fetch(flaskApiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
          // 'api_key': 'your_flask_api_key_here' // if needed
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('data: ' + data);
      return res.status(200).json(data);
    } catch (error) {
      console.error('API call failed:', error);
      return res
        .status(500)
        .json({ error: 'Failed to call Flask API', details: error.message });
    }
  } else {
    // Method Not Allowed
    console.log("(req.method === 'POST') failed");
    return res.status(405).end();
  }
}
