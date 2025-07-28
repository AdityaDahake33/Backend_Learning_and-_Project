const express = require('express')
const morgan = require('morgan')
const app = express()


app.use(morgan('dev'))

app.set('view engine','ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public')) 

app.get('/',(req,res) => {
    res.render('index')
})

app.get('/register',(req,res) =>{
    res.render('register')
})

app.get('/get-users',(req,res)=>{
    usermodel.find().then((users)=> {
        res.send(users)
    })
})

app.post('/register', async (req,res) =>{

    const{ username, email ,password} = req.body

   const newuser = await usermodel.create({
        username: username,
        email: email,
        password: password

    })
    res.send(newuser)
})

app.post('/get-form-data',(req,res) => {
    console.log(req.body)
    res.send('data received')
})

app.listen(8080)