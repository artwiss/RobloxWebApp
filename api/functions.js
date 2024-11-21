export default function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins
    
    if (req.method === 'GET') {
        // Handle GET request
        res.status(200).json({ message: 'This is a GET request' });
    } else if (req.method === 'POST') {
        // Handle POST request
        const { name } = req.body; // Assuming JSON body with a "name" field
        res.status(200).json({ message: `Hello, ${name}! This is a POST request` });
    } else {
        // Method Not Allowed for other HTTP methods
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}