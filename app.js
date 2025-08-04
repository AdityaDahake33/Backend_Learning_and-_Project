const Express = require('express');
const morgan = require('morgan');
const app = Express();
const Mongoos = require('./models/user.js'); 

// Middleware
app.use(morgan('dev'));

// Middleware to get Post data (buildin middleware)
app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());

// Build in middleware for Css
app.use(Express.static('public'));


app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/contact', (req, res) => {
  res.send('Contact Page');
});
app.post('/login', (req, res) => {
    console.log(req.body);
    res.send('Login Successful');
});

app.listen(8080);