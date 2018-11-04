const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const app = express();
const routers = require('./routes/index.js')

//setting
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use((req, res, next) =>{
    console.log(`${req.url}-${req.method}`);
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//routers
app.use(routers);

//static files
app.use(express.static(path.join(__dirname,'public')));

//start a server
app.listen(app.get('port'), ()=>{
    console.log('S1 erver on port' , app.get('port'));
})