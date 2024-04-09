const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;

// MongoDB Connection URL
const url = 'mongodb+srv://admin:1234@goldcluster.nf1xhez.mongodb.net/?retryWrites=true&w=majority&appName=GoldCluster';

// Database Name
const dbName = 'GoldCluster';

// Endpoint to handle RFID tags
router.post('/rfid-tags', async (req, res) => {
    const rfidTags = req.body.rfidTags; // Assuming the RFID tags are sent in the request body
    
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection('GoldRfid.Goldcount');

        // Query MongoDB using RFID tags
        const result = await collection.find({ tagID: { $in: rfidTags } }).toArray();

        client.close();

        res.json(result); // Send the result back to the Frontend
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
