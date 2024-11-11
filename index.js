import {generateMissingPeds} from './generator/missingPeds.js';

const index_dataFlag = process.argv.findIndex(x => x === '-d');
const index_data_value = index_dataFlag + 1;

if (process.argv[index_dataFlag]) {
    switch(process.argv[index_data_value]) {
        case 'missingpeds': {
            await generateMissingPeds();
            break;
        }
        default: {
            console.log('use -d pedlist');
        }
    }
}

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();
const port = 3000;
// Get __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route to handle the form data
app.post('/submit', async (req, res) => {
    const {url, rawXml} = req.body;
    const pedsData = await generateMissingPeds(url, rawXml);
    //console.log('Received data:', {url, rawXml}, pedsData);

    // Send a response back to the client
    res.send({success: true, pedsData});
});

// Serve static files from the 'public' folder (optional)
app.use(express.static(path.join(__dirname, 'public')));

// Define the route for the index page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`);
});