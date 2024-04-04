export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { userId } = req.body;
    const { userEmail } = req.body;
    const flaskApiUrl = `http://127.0.0.1:5000/api/add-user`;

    try {
      const response = await fetch(flaskApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'api_key': 'your_flask_api_key_here' // if needed
        },
        body: JSON.stringify({ userId, userEmail }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      return res.status(200).json(data);
    } catch (error) {
      console.error('API call failed:', error);
      return res
        .status(500)
        .json({ error: 'Failed to call Flask API', details: error.message });
    }
  } else {
    // Method Not Allowed
    return res.status(405).end();
  }
}
