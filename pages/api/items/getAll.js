export default async function handler(req, res) {
  const userId = req.query.userId;
  const flaskApiUrl = `http://127.0.0.1:5000/api/items/get-all?userId=${userId}`;

  try {
    const flaskResponse = await fetch(flaskApiUrl, {
      method: 'GET',
      // headers: {
      //     'api_key': 'your_flask_api_key_here'
      // }
    });

    if (!flaskResponse.ok) {
      throw new Error(`Error from Flask API: ${flaskResponse.statusText}`);
    }

    const data = await flaskResponse.json();
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.error('API call failed:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
