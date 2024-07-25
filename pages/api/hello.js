export default function handler(req, res) {
  if (req.method === 'POST') {
    const { action, session_duration, reload_count, ip_address } = JSON.parse(
      req.body
    );
    console.log(
      `Action: ${action}, Session Duration: ${session_duration} seconds, Reload Count: ${reload_count}, IP Address: ${ip_address}`
    );
    res.status(200).json({ status: 'success' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
