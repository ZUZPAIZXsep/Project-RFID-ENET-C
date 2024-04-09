const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const router = require('./api.js'); // เปลี่ยนชื่อไฟล์เป็นชื่อของไฟล์ที่มีโค้ดของ API ของคุณ

// Middleware to parse incoming request bodies
app.use(bodyParser.json());

// Mount the router
app.use('/api', router);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
