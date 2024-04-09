const express = require('express');
const app = express();

// ระบุที่อยู่ของไฟล์ CSS
app.use(express.static(__dirname + '/public'));

app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
