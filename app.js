const Express = require('express');
const morgan = require('morgan');
const app = Express();
const UserModel = require('./models/user.js'); 
const DBconnection = require('./Config/DB.js');

// Middleware
app.use(morgan('dev'));

// Middleware to get Post data (buildin middleware)
app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());

// Build in middleware for Css
app.use(Express.static('public'));


app.set('view engine', 'ejs');


app.get('/login', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/contact', (req, res) => {
  res.send('Contact Page');
});

//CRUD Oprations

app.get ("/get-user", async (req, res) => {
    UserModel.find().then((users) =>{
      res.send(users);
    }
    )
})

app.get ('/user-update', async (req, res) => {
  const {id} = req.params;
  const {username, password} = req.body;
  const user = await UserModel.findByIdAndUpdate(id, {username, password});
  res.send(user);
})

app.get ('/user-delete', async (req, res) => {
  const {id} = req.params;
  const user = await UserModel.findByIdAndDelete(id);
  res.send(user);
})


app.post('/login', async (req, res) => {


    const {username, password} = req.body;

    const Newuser = await UserModel.create({
      username:username, 
      password:password
    })

    res.send('Login Successfully');
});



app.listen(8080);