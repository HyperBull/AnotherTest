const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});