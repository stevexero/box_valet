// export default async function handler(req, res) {
//   console.log('api/user/addUser reached');

//   if (req.method === 'POST') {
//     console.log('Calling flask api');
//     const { user_id, email } = req.body;
//     const flaskApiUrl = `${process.env.API_URI}/add-user`;

//     console.log('From addUser api: ' + flaskApiUrl);

//     const token = req.headers.authorization;

//     console.log(user_id, email, 'Token:', token);

//     try {
//       const response = await fetch(flaskApiUrl, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: token,
//           // 'api_key': 'your_flask_api_key_here' // if needed
//         },
//         body: JSON.stringify({ user_id, email }),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log('data: ' + data);
//       return res.status(200).json(data);
//     } catch (error) {
//       console.error('API call failed:', error);
//       return res
//         .status(500)
//         .json({ error: 'Failed to call Flask API', details: error.message });
//     }
//   } else {
//     // Method Not Allowed
//     console.log("(req.method === 'POST') failed");
//     return res.status(405).end();
//   }
// }
