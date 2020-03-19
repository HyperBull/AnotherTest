const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

//get static folder
app.use(express.static(path.join(__dirname, 'public'))); 

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});