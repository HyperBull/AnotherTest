//in terminal type 'npm run dev' to start dev server.
require('dotenv').config({path: `${__dirname}/.env`});
const express = require('express');
const path = require('path');


const app = express();
const appPort = process.env.PORT ;

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
    res.render('pages/about', {
        title: 'About'
    });
});

//about
app.get('/photos',(req, res) => {
    res.render('pages/photos', {
        title: 'Photos'
    });
});

//contact
app.get('/contact', (req, res) => {
    res.render('pages/contact', {
        title: 'Contact'
    });
});



//listen on ENV.port or port 5000
app.listen(appPort, () => {
    console.log(`listening on port ${appPort}`);
}); 