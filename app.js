//in terminal type 'npm run dev' to start dev server.

const express = require('express');
const path = require('path');
require('dotenv').config;

console.log(process.env)

const app = express();
const PORT = process.env.PORT || 5000;

//set ejs template engine
app.set('view engine', 'ejs');

//use static folder
app.use(express.static(path.join(__dirname, 'public')));


//home
app.get('/',(req, res) => {
    res.render('pages/index', {
        title: 'Home'
    });
});

//about
app.get('/about',(req, res) => {
    res.render('pages/index', {
        title: 'About'
    });
});


//listen on ENV.port or port 5000
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
}); 