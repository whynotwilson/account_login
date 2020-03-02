const express = require('express')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const isUserValid = require('./isUserValid')
const session = require('express-session')
const app = express()
const port = 3000

app.use(session({
  secret: 'Alpha camp Account_Login',
  rolling: true,
  saveUninitialized: false,
  resave: false,
  cookie: {
    maxAge: 20 * 1000
  }
}))

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting bodyParser
app.use(bodyParser.urlencoded({ extended: true }))

// setting router
app.get('/', (req, res) => {
  const sess = req.session
  if (sess.userName) {
    res.render('welcome', { userName: sess.userName })
  } else res.render('login')
})

app.post('/', (req, res) => {
  const user = req.body
  if (isUserValid(user.email, user.password)) {
    req.session.regenerate(function () {
      req.session.userName = isUserValid(user.email, user.password)
    })
    res.render('welcome', { userName: isUserValid(user.email, user.password) })
  } else {
    res.render('login', { warning: true })
  }
})

app.listen(port, () => {
  console.log('simple login server is running......')
})
