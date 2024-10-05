export default async function handler(req, res) {
    const apiKey = import.meta.env.VITE_API_KEY;
    try {
      const response = await fetch('https://findwork.dev/api/jobs/', {
        method: 'GET',
        headers: {
          'Authorization': `Token ${apiKey}`, // Set the appropriate authorization header
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        res.status(response.status).json({ error: 'Failed to fetch data' });
        return;
      }
  
      const data = await response.json();
      res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins (adjust if needed)
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  }
  