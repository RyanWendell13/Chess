
const express = require('express')
const games = require('./models/games').games

const app = express()
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('static'))
app.use(express.urlencoded({ extended: true }))
app.use('/game', require('./controllers/game'))

app.get('/', function (req, res){

    res.render('home', games)
})

app.listen(3000)