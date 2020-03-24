//in terminal type 'npm run dev' to start dev server.

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

//set ejs template engine
app.set('view engine', 'ejs');

//get static folder
app.use(express.static(path.join(__dirname, 'public')));


//home
app.get('/',(req, res) => {
    console.log(req);
    res.render('pages/index', {title: 'Home Page'});
});

//about


//listen on ENV.port or port 5000
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
}); 