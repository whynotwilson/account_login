const express = require('express')
const port = 3000
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const app = express()
const isUserValid = require('./isUserValid')

//setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//setting bodyParser
app.use(bodyParser.urlencoded({ extended: true }))


//setting router
app.get('/', (req, res) => {
    res.render('login')
})

app.post('/', (req, res) => {
    const user = req.body
    console.log('user', user)
    res.render('welcome', {userName: isUserValid(user.email, user.password)})
})

app.listen(port, () => {
    console.log('simple login server is running......')
})

